'use strict';
const encode=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
document.getElementById('source-list').innerHTML=Object.values(syllabus.sources).map(s=>`<li>${encode(s.title)}</li>`).join('');
document.getElementById('question-guide').innerHTML=syllabus.rounds.map((round,r)=>`<section><h2>${encode(round.name)}</h2>${syllabus.bank.filter(q=>q.r===r).map(q=>`<article class="guide-question"><h3>${q.id} · ${encode(q.title)}</h3><p>${encode(q.instruction)}</p><p><strong>Answer:</strong> ${encode(q.explain)}</p><p class="micro"><strong>Format:</strong> ${encode(q.type)}<br><strong>Lesson links:</strong><br>${q.refs.map(ref=>`${encode(syllabus.sources[ref.source].title)} — PDF ${ref.pages.length===1?'page':'pages'} ${ref.pages.join(', ')}`).join('<br>')}</p></article>`).join('')}</section>`).join('');
document.getElementById('print-guide').addEventListener('click',()=>window.print());
