'use strict';
const SHOP_ITEMS = [
  {id:'basic-rack',name:'Starter rack',price:0,kind:'item',category:'Furniture',art:'rack',colour:'#c59d7b'},
  {id:'basic-till',name:'Starter till',price:0,kind:'item',category:'Furniture',art:'till',colour:'#ba9cce'},
  {id:'star-sign',name:'Star sign',price:1,kind:'item',category:'Decor',art:'star',colour:'#e8b954'},
  {id:'green-plant',name:'Green plant',price:2,kind:'item',category:'Decor',art:'plant',colour:'#639d78'},
  {id:'star-rug',name:'Star rug',price:2,kind:'item',category:'Decor',art:'rug',colour:'#eeb89d'},
  {id:'sale-sign',name:'Sale sign',price:3,kind:'item',category:'Decor',art:'sale',colour:'#f1805d'},
  {id:'clothes-rack',name:'Clothes rack',price:3,kind:'item',category:'Furniture',art:'rack',colour:'#6f8f99'},
  {id:'shirt-table',name:'T-shirt table',price:3,kind:'item',category:'Clothes',art:'table',colour:'#94a886'},
  {id:'shoe-shelf',name:'Shoe shelf',price:4,kind:'item',category:'Clothes',art:'shoes',colour:'#b79b80'},
  {id:'bag-stand',name:'Bag stand',price:4,kind:'item',category:'Clothes',art:'bags',colour:'#b98eaa'},
  {id:'tall-mirror',name:'Tall mirror',price:4,kind:'item',category:'Furniture',art:'mirror',colour:'#bd9e73'},
  {id:'comfy-chair',name:'Comfy chair',price:5,kind:'item',category:'Furniture',art:'chair',colour:'#7ba597'},
  {id:'fancy-till',name:'Fancy till',price:6,kind:'item',category:'Furniture',art:'till',colour:'#7d6bb4'},
  {id:'big-display',name:'Big display',price:8,kind:'item',category:'Clothes',art:'display',colour:'#d0a35e'},
  {id:'wall-lilac',name:'Lilac walls',price:2,kind:'wall',category:'Colours',value:'lilac',colour:'#e5ddf1'},
  {id:'wall-mint',name:'Mint walls',price:2,kind:'wall',category:'Colours',value:'mint',colour:'#dbeade'},
  {id:'wall-peach',name:'Peach walls',price:2,kind:'wall',category:'Colours',value:'peach',colour:'#f6dfd0'},
  {id:'floor-blue',name:'Blue floor',price:3,kind:'floor',category:'Colours',value:'blue',colour:'#b8cdd8'},
  {id:'floor-rose',name:'Rose floor',price:3,kind:'floor',category:'Colours',value:'rose',colour:'#dbc0be'}
];
const SHOP_KEY='retail-star-shop-v1';
const SHOP_ITEM_MAP=Object.assign(Object.create(null),Object.fromEntries(SHOP_ITEMS.map(item=>[item.id,item])));
function newShop(){return {version:2,balance:0,name:'My Star Shop',owned:['basic-rack','basic-till'],positions:{'basic-rack':{x:8,y:48},'basic-till':{x:88,y:90}},wall:'cream',floor:'oak',awards:[]}}
function cleanShop(value){
  const result=newShop();if(!value||typeof value!=='object')return result;
  if(Number.isSafeInteger(value.balance)&&value.balance>=0&&value.balance<=10000000)result.balance=value.balance;
  if(typeof value.name==='string'&&value.name.trim())result.name=value.name.trim().slice(0,24);
  if(Array.isArray(value.owned))result.owned=[...new Set(['basic-rack','basic-till',...value.owned.filter(id=>SHOP_ITEM_MAP[id])])];
  if(value.positions&&typeof value.positions==='object'&&!Array.isArray(value.positions)){
    result.positions={};for(const id of result.owned){const point=value.positions[id];if(SHOP_ITEM_MAP[id]?.kind==='item'&&point&&Number.isFinite(point.x)&&Number.isFinite(point.y)&&point.x>=0&&point.x<=100&&point.y>=0&&point.y<=100)result.positions[id]={x:point.x,y:point.y}}
  }else if(Array.isArray(value.placements)){
    result.positions={};const oldSpots=[{x:4,y:48},{x:50,y:48},{x:96,y:48},{x:4,y:92},{x:50,y:92},{x:96,y:92}];value.placements.slice(0,6).forEach((id,i)=>{if(result.owned.includes(id)&&SHOP_ITEM_MAP[id]?.kind==='item'&&!Object.hasOwn(result.positions,id))result.positions[id]={...oldSpots[i]}})
  }
  for(const kind of ['wall','floor']){const theme=SHOP_ITEMS.find(item=>item.kind===kind&&item.value===value[kind]);if(theme&&result.owned.includes(theme.id))result[kind]=theme.value}
  if(Array.isArray(value.awards))result.awards=[...new Set(value.awards.filter(id=>typeof id==='string'&&id.length<=120))].slice(-2000);
  return result;
}
function createStarShop(storage){
  let data=newShop(),persistent=!!storage;
  function refresh(){if(!storage)return;try{const raw=storage.getItem(SHOP_KEY);if(raw)data=cleanShop(JSON.parse(raw))}catch{persistent=false}}
  refresh();
  function save(){if(!storage)return;try{storage.setItem(SHOP_KEY,JSON.stringify(data));persistent=true}catch{persistent=false;storage=null}}
  function snapshot(){refresh();return JSON.parse(JSON.stringify(data))}
  function credit(id,amount){refresh();if(typeof id!=='string'||!id||id.length>120||!Number.isSafeInteger(amount)||amount<=0||amount>39||data.awards.includes(id))return false;data.balance=Math.min(10000000,data.balance+amount);data.awards.push(id);data.awards=data.awards.slice(-2000);save();return true}
  function buy(id){refresh();const item=SHOP_ITEM_MAP[id];if(!item)return {ok:false,reason:'missing'};if(data.owned.includes(id))return {ok:false,reason:'owned'};if(data.balance<item.price)return {ok:false,reason:'stars',need:item.price-data.balance};const before=data.balance;data.balance-=item.price;data.owned.push(id);if(item.kind==='wall'||item.kind==='floor')data[item.kind]=item.value;save();return {ok:true,before,cost:item.price,left:data.balance,item}}
  function place(id,x,y){refresh();if(!data.owned.includes(id)||SHOP_ITEM_MAP[id]?.kind!=='item'||!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>100||y<0||y>100)return false;data.positions[id]={x:Math.round(x*100)/100,y:Math.round(y*100)/100};save();return true}
  function remove(id){refresh();if(!Object.hasOwn(data.positions,id))return false;delete data.positions[id];save();return true}
  function theme(kind,value){refresh();if(!['wall','floor'].includes(kind))return false;const basic=kind==='wall'?'cream':'oak';if(value!==basic&&!SHOP_ITEMS.some(item=>item.kind===kind&&item.value===value&&data.owned.includes(item.id)))return false;data[kind]=value;save();return true}
  function rename(name){refresh();if(typeof name!=='string'||!name.trim())return false;data.name=name.trim().slice(0,24);save();return true}
  return {snapshot,credit,buy,place,remove,theme,rename,get persistent(){return persistent}};
}
let starShop;
try{starShop=createStarShop(localStorage)}catch{starShop=createStarShop(null)}
