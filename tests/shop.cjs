const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const context={localStorage:null};vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(__dirname,'../dist/shop-model.js'),'utf8'),context);
const run=s=>vm.runInContext(s,context),read=s=>JSON.parse(run('JSON.stringify('+s+')'));
run(`let memory={value:null,getItem(){return this.value},setItem(k,v){this.value=v}};let store=createStarShop(memory)`);
assert.equal(read('store.snapshot().balance'),0);assert.deepEqual(read('store.snapshot().owned'),['basic-rack','basic-till']);
assert.equal(run("store.credit('game-1:q-1',1)"),true);assert.equal(run("store.credit('game-1:q-1',1)"),false);assert.equal(read('store.snapshot().balance'),1);
assert.equal(read("store.buy('green-plant').reason"),'stars');assert.equal(read('store.snapshot().balance'),1);
const purchase=read("store.buy('star-sign')");assert.deepEqual([purchase.ok,purchase.before,purchase.cost,purchase.left],[true,1,1,0]);
assert.equal(read("store.buy('star-sign').reason"),'owned');assert.equal(read('store.snapshot().balance'),0);
run('let reloaded=createStarShop(memory)');assert.equal(read('reloaded.snapshot().balance'),0);assert.ok(read('reloaded.snapshot().owned').includes('star-sign'));
assert.equal(run("reloaded.credit('game-1:q-1',1)"),false);
assert.equal(run("store.credit('game-1:wheel',3)"),true);assert.equal(read('reloaded.snapshot().balance'),3,'Other store instances see fresh data');
assert.equal(read("reloaded.buy('green-plant').left"),1);assert.equal(run("store.place('green-plant',0)"),true);assert.equal(read('store.snapshot().placements[0]'),'green-plant');assert.ok(read('store.snapshot().owned').includes('basic-rack'),'Replaced furniture stays owned');
assert.equal(run("store.place('green-plant',4)"),true);assert.equal(read('store.snapshot().placements[0]'),null);assert.equal(read('store.snapshot().placements[4]'),'green-plant');
assert.equal(run('store.remove(4)'),true);assert.ok(read('store.snapshot().owned').includes('green-plant'));assert.equal(read('store.snapshot().balance'),1,'Moving and removing are free');
for(const id of ['unknown','toString','__proto__']){assert.equal(read(`store.buy('${id}').reason`),'missing');assert.equal(run(`store.place('${id}',2)`),false)}
for(const slot of [-1,6,1.5,NaN]){context.testSlot=slot;assert.equal(run("store.place('green-plant',testSlot)"),false);assert.equal(run('store.remove(testSlot)'),false)}
assert.equal(run("store.theme('wall','lilac')"),false);assert.equal(run("store.theme('floor','blue')"),false);run("store.credit('g2:q1',3)");assert.equal(read("store.buy('wall-lilac').ok"),true);assert.equal(read('store.snapshot().wall'),'lilac');assert.equal(run("store.place('wall-lilac',2)"),false);assert.equal(run("store.theme('wall','cream')"),true);assert.equal(run("store.theme('wall','lilac')"),true);
assert.equal(run("store.rename('   ')"),false);assert.equal(run("store.rename('My Happy Hangers')"),true);assert.equal(read('createStarShop(memory).snapshot().name'),'My Happy Hangers');
for(const amount of [-2,0,1.5,NaN,Infinity,40]){context.testAmount=amount;assert.equal(run("store.credit('bad-credit',testAmount)"),false)}
run(`let quotaStorage={value:JSON.stringify(newShop()),getItem(){return this.value},setItem(){throw Error('quota')}};let visit=createStarShop(quotaStorage)`);assert.equal(run("visit.credit('visit:q1',5)"),true);assert.equal(read('visit.snapshot().balance'),5);assert.equal(run('visit.persistent'),false);assert.equal(read("visit.buy('green-plant').left"),3);assert.equal(read('visit.snapshot().balance'),3,'Failed browser saving must not overwrite this visit’s balance');
run(`let corrupt={getItem(){return '{broken'},setItem(k,v){this.fixed=v}};let repaired=createStarShop(corrupt)`);assert.equal(read('repaired.snapshot().balance'),0);assert.equal(run("repaired.credit('repair',2)"),true);assert.equal(run('repaired.persistent'),true);
const sanitized=read(`cleanShop({balance:-10,owned:['star-sign','star-sign','bad','toString'],placements:['star-sign','star-sign','bad',null,null,null],wall:'mint',awards:[1,null,'ok','ok']})`);assert.equal(sanitized.balance,0);assert.deepEqual(sanitized.owned,['basic-rack','basic-till','star-sign']);assert.deepEqual(sanitized.placements,['star-sign',null,null,null,null,null]);assert.equal(sanitized.wall,'cream');assert.deepEqual(sanitized.awards,['ok']);
assert.ok(read('SHOP_ITEMS.every(item=>Number.isInteger(item.price)&&item.price>=0&&item.price<=8)'));
console.log('PASS: persistent star wallet, one-time credits, exact spending, affordability and duplicate guards, ownership, placements, free moves, themes, fresh reads, invalid data and browser-storage failure recovery.');
