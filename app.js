
const APP_VERSION = '6.0';
let entries = [];
let floors = [];

const categories = () => ['Toutes', ...new Set(entries.map(e => e.category))];
const qualities = () => ['Toutes', ...new Set(entries.map(e => e.quality).filter(Boolean))];

let currentView = 'home';
let selectedCategory = 'Toutes';
let selectedQuality = 'Toutes';
let selectedStatus = 'Tous';

let completed = new Set(JSON.parse(localStorage.getItem('gc_completed') || '[]'));
let favorites = new Set(JSON.parse(localStorage.getItem('gc_favorites') || '[]'));
let notes = JSON.parse(localStorage.getItem('gc_notes') || '{}');
let runs = JSON.parse(localStorage.getItem('gc_runs') || '[]');

const $ = s => document.querySelector(s);

async function loadData() {
  const [guideResponse, floorsResponse] = await Promise.all([
    fetch('./data/guide.json'),
    fetch('./data/floors.json')
  ]);
  entries = await guideResponse.json();
  floors = await floorsResponse.json();
  renderAll();
  setView('home');
}

function persist() {
  localStorage.setItem('gc_completed', JSON.stringify([...completed]));
  localStorage.setItem('gc_favorites', JSON.stringify([...favorites]));
  localStorage.setItem('gc_notes', JSON.stringify(notes));
  localStorage.setItem('gc_runs', JSON.stringify(runs));
}

function categoryEmoji(category) {
  const icons = {
    'Armes':'🔫','Objets passifs':'🎒','Objets actifs':'⚡','Boss':'👑',
    'Boss secrets':'☠️','Monstres':'👾','Personnages':'🧍','PNJ':'🧑‍🚀',
    'Étages':'🗺️','Étages secrets':'🕳️','Secrets':'🔐','Quêtes':'📜'
  };
  return icons[category] || '📚';
}

function validCompletedCount(list=entries) {
  const ids = new Set(list.map(e=>e.id));
  return [...completed].filter(id=>ids.has(id)).length;
}

function setView(view) {
  currentView = view;
  document.querySelectorAll('[data-view]').forEach(el => el.hidden = el.dataset.view !== view);
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.target === view));
  if (view === 'favorites') renderFavorites();
  if (view === 'remaining') renderRemaining();
  if (view === 'stats') updateProgress();
  if (view === 'map') renderMap();
  if (view === 'journal') renderJournal();
  window.scrollTo({top:0,behavior:'smooth'});
}

function filteredEntries() {
  const q = $('#search').value.trim().toLowerCase();
  return entries.filter(e => {
    const categoryOk = selectedCategory === 'Toutes' || e.category === selectedCategory;
    const qualityOk = selectedQuality === 'Toutes' || e.quality === selectedQuality;
    const statusOk = selectedStatus === 'Tous'
      || (selectedStatus === 'Terminés' && completed.has(e.id))
      || (selectedStatus === 'Restants' && !completed.has(e.id));
    const text = [e.name,e.category,e.quality,e.summary,e.details,e.unlock,e.floor,e.notes,...(e.tips||[])].join(' ').toLowerCase();
    return categoryOk && qualityOk && statusOk && (!q || text.includes(q));
  }).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
}

function entryCard(e) {
  return `
    <article class="entry" onclick="openEntry('${e.id}')">
      <div class="entry-emoji">${e.emoji}</div>
      <div class="entry-main">
        <div class="entry-title">${e.name} ${e.quality?`<span class="quality">[${e.quality}]</span>`:''}</div>
        <div class="entry-sub">${e.category} · ${e.summary}</div>
      </div>
      <button class="mini ${favorites.has(e.id)?'favorite':''}" onclick="event.stopPropagation();toggleFavorite('${e.id}')">★</button>
      <button class="mini ${completed.has(e.id)?'completed':''}" onclick="event.stopPropagation();toggleCompleted('${e.id}')">✓</button>
    </article>`;
}

function renderGuide() {
  const cats = categories();
  $('#categories').innerHTML = cats.map(c =>
    `<button class="chip ${selectedCategory===c?'active':''}" onclick='setCategory(${JSON.stringify(c)})'>${c}</button>`
  ).join('');

  $('#qualityFilter').innerHTML = qualities().map(q =>
    `<option value="${q}">${q === 'Toutes' ? 'Toutes les qualités' : 'Qualité '+q}</option>`
  ).join('');
  $('#qualityFilter').value = selectedQuality;
  $('#statusFilter').value = selectedStatus;

  const list = filteredEntries();
  $('#resultCount').textContent = `${list.length} résultat${list.length>1?'s':''}`;
  $('#list').innerHTML = list.map(entryCard).join('');
}

function renderCategoryCards() {
  $('#categoryCards').innerHTML = categories().filter(c=>c!=='Toutes').map(c=>{
    const list=entries.filter(e=>e.category===c);
    const done=validCompletedCount(list);
    const pct=list.length?Math.round(done/list.length*100):0;
    return `
      <button class="category-card" onclick='openCategory(${JSON.stringify(c)})'>
        <div class="category-emoji">${categoryEmoji(c)}</div>
        <div class="category-name">${c}</div>
        <div class="category-count">${done} / ${list.length} terminés</div>
        <div class="category-mini"><div style="width:${pct}%"></div></div>
      </button>`;
  }).join('');
}

function renderRecommendation() {
  const candidates = entries.filter(e=>e.trackable && !completed.has(e.id))
    .sort((a,b)=>(b.priority||0)-(a.priority||0)||a.name.localeCompare(b.name,'fr'));
  const e = candidates[0];
  $('#recommendation').innerHTML = e ? `
    <div class="recommend-card" onclick="openEntry('${e.id}')">
      <div class="entry-emoji">${e.emoji}</div>
      <div class="entry-main"><div class="entry-title">${e.name}</div><div class="entry-sub">${e.unlock}</div></div>
      <span>›</span>
    </div>` : `<div class="empty-state">Tout est terminé. Bravo !</div>`;
}

function renderFavorites() {
  const list = entries.filter(e=>favorites.has(e.id)).sort((a,b)=>a.name.localeCompare(b.name,'fr'));
  $('#favoritesCount').textContent = `${list.length} favori${list.length>1?'s':''}`;
  $('#favoritesList').innerHTML = list.length ? list.map(entryCard).join('') :
    `<div class="empty-state">Ajoute une étoile sur une fiche pour la retrouver ici.</div>`;
}

function renderRemaining() {
  const list = entries.filter(e=>e.trackable && !completed.has(e.id))
    .sort((a,b)=>(b.priority||0)-(a.priority||0)||a.name.localeCompare(b.name,'fr'));
  $('#remainingCount').textContent = `${list.length} élément${list.length>1?'s':''} à débloquer`;
  $('#remainingList').innerHTML = list.length ? list.map(entryCard).join('') :
    `<div class="empty-state">Tu as tout terminé 🎉</div>`;
}

function updateProgress() {
  const n = validCompletedCount();
  const p = entries.length ? Math.round((n / entries.length) * 100) : 0;
  $('#progressText').textContent = `${p} %`;
  $('#progressBar').style.width = `${p}%`;
  $('#progressCount').textContent = `${n} sur ${entries.length} fiches cochées · v${APP_VERSION}`;
  $('#totalEntriesHero').textContent = entries.length;
  $('#favoriteCountHero').textContent = favorites.size;
  $('#remainingCountHero').textContent = entries.length - n;

  const byCat = categories().filter(c=>c!=='Toutes').map(c=>{
    const list=entries.filter(e=>e.category===c);
    const done=validCompletedCount(list);
    return {c,total:list.length,done,p:list.length?Math.round(done/list.length*100):0};
  }).sort((a,b)=>b.p-a.p);

  $('#categoryProgress').innerHTML = byCat.map(x=>`
    <div class="cat-progress">
      <div><span>${categoryEmoji(x.c)} ${x.c}</span><span>${x.done} / ${x.total}</span></div>
      <div class="mini-track"><div style="width:${x.p}%"></div></div>
    </div>`).join('');
}

function renderMap() {
  $('#floorMap').innerHTML = floors.map(f => `
    <div class="floor-node ${f.secret?'secret-floor':''}">
      <div class="floor-line"></div>
      <div class="floor-card">
        <div class="floor-emoji">${f.emoji}</div>
        <div>
          <div class="floor-name">${f.name}</div>
          <div class="entry-sub">${f.summary}</div>
        </div>
        ${f.secret?'<span class="secret-badge">SECRET</span>':''}
      </div>
    </div>`).join('');
}

function renderJournal() {
  $('#runCount').textContent = `${runs.length} partie${runs.length>1?'s':''}`;
  $('#runList').innerHTML = runs.length ? runs.map((r,i)=>`
    <article class="run-card">
      <div class="run-top">
        <div><strong>${r.character || 'Personnage inconnu'}</strong><div class="entry-sub">${r.date}</div></div>
        <button class="mini danger-mini" onclick="deleteRun(${i})">✕</button>
      </div>
      <div class="run-grid">
        <span>🏁 ${r.floor || 'Non indiqué'}</span>
        <span>👑 ${r.bosses || 0} boss</span>
        <span>⏱️ ${r.duration || 0} min</span>
        <span>${r.result === 'victoire' ? '🏆 Victoire' : '💀 Défaite'}</span>
      </div>
      ${r.note ? `<p class="run-note">${r.note}</p>` : ''}
    </article>`).join('') : `<div class="empty-state">Enregistre ta première partie.</div>`;
}

function addRun() {
  const character = $('#runCharacter').value.trim();
  const floor = $('#runFloor').value.trim();
  const bosses = Number($('#runBosses').value || 0);
  const duration = Number($('#runDuration').value || 0);
  const result = $('#runResult').value;
  const note = $('#runNote').value.trim();
  runs.unshift({
    character, floor, bosses, duration, result, note,
    date: new Date().toLocaleDateString('fr-BE')
  });
  persist();
  ['runCharacter','runFloor','runBosses','runDuration','runNote'].forEach(id => $('#'+id).value='');
  renderJournal();
}

function deleteRun(index) {
  if (confirm('Supprimer cette partie ?')) {
    runs.splice(index,1);
    persist();
    renderJournal();
  }
}

function openCategory(c) {
  selectedCategory=c;
  setView('guide');
  renderGuide();
  setTimeout(()=>$('#search').scrollIntoView({behavior:'smooth',block:'start'}),100);
}
function setCategory(c) { selectedCategory=c; renderGuide(); }
function setQuality(q) { selectedQuality=q; renderGuide(); }
function setStatus(s) { selectedStatus=s; renderGuide(); }

function toggleCompleted(id) {
  completed.has(id)?completed.delete(id):completed.add(id);
  persist(); renderAll();
}
function toggleFavorite(id) {
  favorites.has(id)?favorites.delete(id):favorites.add(id);
  persist(); renderAll();
}

function openEntry(id) {
  const e=entries.find(x=>x.id===id);
  $('#modalBody').innerHTML=`
    <div class="detail-emoji">${e.emoji}</div>
    <h2>${e.name}</h2>
    <div class="detail-category">${e.category} ${e.quality?`· Qualité ${e.quality}`:''}</div>
    <div class="info-row">${e.floor?`<div class="info-pill">📍 ${e.floor}</div>`:''}${e.isSecret?`<div class="info-pill secret">🔐 Secret</div>`:''}</div>
    <h3>📌 Résumé</h3><p>${e.summary}</p>
    <h3>📖 Détails</h3><p>${e.details}</p>
    <h3>🔓 Comment l’obtenir</h3><p>${e.unlock}</p>
    ${e.notes?`<h3>📝 Note officielle</h3><p>${e.notes}</p>`:''}
    ${e.tips?.length?`<h3>💡 Conseils</h3><ul>${e.tips.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}
    <h3>❤️ Ma note personnelle</h3>
    <textarea id="personalNote" class="personal-note" placeholder="Écris ici ton astuce ou ton souvenir…">${notes[e.id]||''}</textarea>
    <button class="save-note" onclick="saveNote('${e.id}')">Enregistrer ma note</button>
    <div class="detail-actions">
      <button onclick="toggleCompleted('${e.id}');openEntry('${e.id}')">${completed.has(e.id)?'✅ Terminé':'⭕ Marquer comme terminé'}</button>
      <button onclick="toggleFavorite('${e.id}');openEntry('${e.id}')">${favorites.has(e.id)?'⭐ Favori':'☆ Ajouter aux favoris'}</button>
    </div>`;
  $('#modal').classList.add('show');
}

function saveNote(id) {
  notes[id] = $('#personalNote').value;
  persist();
  alert('Note enregistrée.');
}

function closeModal() { $('#modal').classList.remove('show'); }

function renderAll() {
  renderGuide();
  renderRecommendation();
  renderCategoryCards();
  renderFavorites();
  renderRemaining();
  renderJournal();
  renderMap();
  updateProgress();
}

function resetAll() {
  if(confirm('Effacer progression, favoris, notes et journal ?')) {
    completed.clear(); favorites.clear(); notes={}; runs=[];
    persist(); renderAll();
  }
}

function exportProgress() {
  const payload=JSON.stringify({
    version:APP_VERSION,
    completed:[...completed],
    favorites:[...favorites],
    notes,
    runs
  },null,2);
  const blob=new Blob([payload],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download='gungeon-sauvegarde-v6.json';a.click();
  URL.revokeObjectURL(url);
}
function importProgress() { $('#importFile').click(); }

document.addEventListener('DOMContentLoaded', () => {
  $('#importFile').addEventListener('change', async e=>{
    const file=e.target.files[0]; if(!file) return;
    try {
      const data=JSON.parse(await file.text());
      completed=new Set(data.completed||[]);
      favorites=new Set(data.favorites||[]);
      notes=data.notes||{};
      runs=data.runs||[];
      persist(); renderAll(); alert('Sauvegarde importée.');
    } catch { alert('Fichier invalide.'); }
  });
  $('#search').addEventListener('input',renderGuide);
  $('#qualityFilter').addEventListener('change',e=>setQuality(e.target.value));
  $('#statusFilter').addEventListener('change',e=>setStatus(e.target.value));
  $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
  loadData();
});

if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
