
const entries = [{"id": "marine", "name": "Marine", "category": "Personnages", "emoji": "🪖", "summary": "Personnage équilibré, précis et robuste.", "details": "Commence avec une arme fiable, une armure et un bonus de précision.", "unlock": "Disponible dès le début.", "tips": ["Excellent pour apprendre le jeu.", "Économise les armes rares pour les boss."]}, {"id": "hunter", "name": "Chasseresse", "category": "Personnages", "emoji": "🏹", "summary": "Personnage accompagnée d’un chien.", "details": "Son chien peut parfois déterrer des objets après une salle.", "unlock": "Disponible dès le début.", "tips": ["L’arbalète est forte au premier étage.", "Observe les réactions du chien."]}, {"id": "pilot", "name": "Pilote", "category": "Personnages", "emoji": "🧑‍✈️", "summary": "Personnage orienté économie et utilité.", "details": "Peut crocheter certains coffres et bénéficie de meilleurs prix.", "unlock": "Disponible dès le début.", "tips": ["Tente le crochet sur les coffres sans clé.", "Son arme de départ manque de précision."]}, {"id": "convict", "name": "Condamnée", "category": "Personnages", "emoji": "⛓️", "summary": "Personnage agressif à courte portée.", "details": "Commence avec un fusil à canon scié.", "unlock": "Disponible dès le début.", "tips": ["Reste proche avec le fusil.", "Ne te fais pas toucher volontairement."]}, {"id": "robot", "name": "Robot", "category": "Personnages", "emoji": "🤖", "summary": "Personnage secret sans cœur rouge.", "details": "Utilise uniquement de l’armure.", "unlock": "Apporter la télévision cassée à la Forgeronne.", "tips": ["Protège chaque point d’armure.", "Pose la télévision avant les combats difficiles."]}, {"id": "marine-sidearm", "name": "Pistolet du Marine", "category": "Armes", "emoji": "🔫", "summary": "Arme de départ précise et fiable.", "details": "Faibles dégâts mais excellente précision et munitions infinies.", "unlock": "Commencer avec le Marine.", "tips": ["Utilise-la sur les ennemis faibles.", "Garde les meilleures armes pour les boss."]}, {"id": "crossbow", "name": "Arbalète", "category": "Armes", "emoji": "🏹", "summary": "Arme de départ puissante.", "details": "Tire lentement mais inflige de bons dégâts.", "unlock": "Commencer avec la Chasseresse.", "tips": ["Recharge derrière un couvert.", "Très utile au premier étage."]}, {"id": "mega-douser", "name": "Méga Douche", "category": "Armes", "emoji": "💦", "summary": "Arme qui projette de l’eau.", "details": "Peut éteindre certaines flammes et révéler des chemins invisibles.", "unlock": "Trouvable pendant les parties.", "tips": ["Utile pour certains secrets.", "Laisse une trace visible au sol."]}, {"id": "old-goldie", "name": "Vieille Dorée", "category": "Armes", "emoji": "✨", "summary": "Fusil puissant à courte portée.", "details": "Inflige d’importants dégâts.", "unlock": "Trouvable dans les coffres de haute qualité.", "tips": ["Très forte contre les boss.", "Reste assez proche pour toucher toutes les balles."]}, {"id": "yari-launcher", "name": "Lanceur Yari", "category": "Armes", "emoji": "🚀", "summary": "Arme très puissante contre les boss.", "details": "Tire une rafale rapide de missiles.", "unlock": "Trouvable dans les coffres de haute qualité.", "tips": ["Garde les munitions pour les boss."]}, {"id": "master-round", "name": "Balle de Maître", "category": "Objets passifs", "emoji": "❤️", "summary": "Récompense pour un boss vaincu sans dégâts.", "details": "Augmente la santé maximale d’un cœur.", "unlock": "Battre un boss d’étage sans subir de dégâts.", "tips": ["Conserve tes Blancs pour le boss.", "Apprends les motifs d’attaque."]}, {"id": "prime-primer", "name": "Amorce Principale", "category": "Objets passifs", "emoji": "📦", "summary": "Composant de la Balle pouvant tuer le Passé.", "details": "Objet de quête acheté au deuxième étage.", "unlock": "Acheter pour 110 douilles puis apporter à la Forgeronne.", "tips": ["Économise avant la boutique."]}, {"id": "planar-lead", "name": "Plomb Planaire", "category": "Objets passifs", "emoji": "🌌", "summary": "Composant de quête.", "details": "Se trouve derrière un chemin invisible du quatrième étage.", "unlock": "Traverser le chemin invisible du Hollow.", "tips": ["Une arme laissant une trace aide beaucoup."]}, {"id": "blank", "name": "Blanc", "category": "Objets actifs", "emoji": "💥", "summary": "Efface les projectiles ennemis.", "details": "Peut aussi révéler les passages secrets.", "unlock": "Disponible pendant les parties.", "tips": ["Utilise-le avant d’être touché.", "Teste les murs suspects."]}, {"id": "bullet-king", "name": "Roi Balle", "category": "Boss", "emoji": "👑", "summary": "Boss possible du premier étage.", "details": "Utilise de grands motifs circulaires.", "unlock": "Atteindre la salle de boss du premier étage.", "tips": ["Tourne autour de la salle.", "Évite les coins."]}, {"id": "gatling-gull", "name": "Mouette Gatling", "category": "Boss", "emoji": "🦅", "summary": "Boss possible du premier étage.", "details": "Tire de longues rafales avec une mitrailleuse.", "unlock": "Atteindre la salle de boss du premier étage.", "tips": ["Utilise les piliers.", "Change de direction pendant ses rafales."]}, {"id": "ammoconda", "name": "Ammoconda", "category": "Boss", "emoji": "🐍", "summary": "Boss possible du deuxième étage.", "details": "Serpent composé de segments.", "unlock": "Atteindre la salle de boss du deuxième étage.", "tips": ["Élimine ce qu’il peut manger."]}, {"id": "high-dragun", "name": "High Dragun", "category": "Boss", "emoji": "🐉", "summary": "Boss principal de la Forge.", "details": "Combat majeur de fin de parcours normal.", "unlock": "Atteindre la fin de la Forge.", "tips": ["Garde des Blancs pour la dernière phase."]}, {"id": "bullet-kin", "name": "Bullet Kin", "category": "Monstres", "emoji": "👾", "summary": "Ennemi de base du Gungeon.", "details": "Tire généralement un projectile simple.", "unlock": "Présent naturellement.", "tips": ["Élimine-le rapidement."]}, {"id": "shotgun-kin", "name": "Shotgun Kin", "category": "Monstres", "emoji": "💀", "summary": "Ennemi équipé d’un fusil à pompe.", "details": "Tire plusieurs projectiles en éventail.", "unlock": "Présent naturellement.", "tips": ["Garde tes distances."]}, {"id": "grenade-kin", "name": "Grenade Kin", "category": "Monstres", "emoji": "💣", "summary": "Ennemi explosif.", "details": "Se jette sur le joueur avant d’exploser.", "unlock": "Présent naturellement.", "tips": ["Éloigne-toi quand il charge."]}, {"id": "blacksmith", "name": "Forgeronne", "category": "PNJ", "emoji": "🧑‍🏭", "summary": "PNJ essentiel de la Forge.", "details": "Reçoit les composants de la Balle pouvant tuer le Passé.", "unlock": "La rencontrer dans la Forge.", "tips": ["Remets les composants dès que possible."]}, {"id": "bello", "name": "Bello", "category": "PNJ", "emoji": "🛒", "summary": "Marchand principal.", "details": "Vend armes, objets, clés et munitions.", "unlock": "Le rencontrer dans une boutique.", "tips": ["Ne tire pas dans sa boutique."]}, {"id": "keep", "name": "Donjon du Seigneur des Balles", "category": "Étages", "emoji": "🏰", "summary": "Premier étage principal.", "details": "Zone d’introduction avec plusieurs boss possibles.", "unlock": "Commencer une nouvelle partie.", "tips": ["Explore avant le boss."]}, {"id": "gungeon-proper", "name": "Gungeon Proper", "category": "Étages", "emoji": "🕯️", "summary": "Deuxième étage principal.", "details": "Contient la boutique où acheter l’Amorce Principale.", "unlock": "Terminer le premier étage.", "tips": ["Prévois 110 douilles."]}, {"id": "mine", "name": "Mine de Poudre Noire", "category": "Étages", "emoji": "⛏️", "summary": "Troisième étage principal.", "details": "Contient un composant de la quête du Passé.", "unlock": "Terminer le deuxième étage.", "tips": ["Observe les rails de wagonnets."]}, {"id": "hollow", "name": "Hollow", "category": "Étages", "emoji": "❄️", "summary": "Quatrième étage principal.", "details": "Contient le Plomb Planaire.", "unlock": "Terminer le troisième étage.", "tips": ["Une trace au sol aide à voir le chemin invisible."]}, {"id": "forge", "name": "Forge", "category": "Étages", "emoji": "🔥", "summary": "Cinquième étage principal.", "details": "Contient la Forgeronne et le High Dragun.", "unlock": "Terminer le quatrième étage.", "tips": ["Conserve des ressources pour le boss."]}, {"id": "secret-room", "name": "Salle secrète", "category": "Secrets", "emoji": "🔐", "summary": "Salle cachée derrière un mur destructible.", "details": "Peut contenir ressources, coffres ou PNJ.", "unlock": "Repérer un mur fissuré puis utiliser un Blanc.", "tips": ["Inspecte les murs proches des coffres et boutiques."]}, {"id": "oubliette", "name": "Oubliette", "category": "Secrets", "emoji": "🕳️", "summary": "Premier étage secret.", "details": "Accessible via une cheminée spéciale du premier étage.", "unlock": "Éteindre le feu puis utiliser deux clés.", "tips": ["Économise deux clés."]}, {"id": "past-bullet", "name": "Balle pouvant tuer le Passé", "category": "Quêtes", "emoji": "📜", "summary": "Grande quête principale.", "details": "Assembler quatre composants auprès de la Forgeronne.", "unlock": "Apporter les quatre composants à la Forgeronne.", "tips": ["Les composants remis sont conservés."]}, {"id": "robot-quest", "name": "Débloquer le Robot", "category": "Quêtes", "emoji": "📺", "summary": "Transporter une télévision cassée.", "details": "La télévision tombe lors des roulades.", "unlock": "L’apporter jusqu’à la Forgeronne.", "tips": ["Pose-la avant les combats.", "N’oublie pas de la reprendre."]}];
const categories = ['Toutes', ...new Set(entries.map(e => e.category))];

let selectedCategory = 'Toutes';
let favoritesOnly = false;
let completed = new Set(JSON.parse(localStorage.getItem('gc_completed') || '[]'));
let favorites = new Set(JSON.parse(localStorage.getItem('gc_favorites') || '[]'));

const $ = s => document.querySelector(s);

function persist() {
  localStorage.setItem('gc_completed', JSON.stringify([...completed]));
  localStorage.setItem('gc_favorites', JSON.stringify([...favorites]));
}

function filteredEntries() {
  const q = $('#search').value.trim().toLowerCase();
  return entries.filter(e => {
    const categoryOk = selectedCategory === 'Toutes' || e.category === selectedCategory;
    const favoriteOk = !favoritesOnly || favorites.has(e.id);
    const text = [e.name,e.category,e.summary,e.details,e.unlock,...(e.tips||[])].join(' ').toLowerCase();
    return categoryOk && favoriteOk && (!q || text.includes(q));
  });
}

function renderCategories() {
  $('#categories').innerHTML = categories.map(c =>
    `<button class="chip ${!favoritesOnly && selectedCategory===c?'active':''}" onclick="setCategory('${c.replaceAll("'","\'")}')">${c}</button>`
  ).join('');
}

function updateProgress() {
  const n = completed.size;
  const p = Math.round((n / entries.length) * 100);
  $('#progressText').textContent = `${p} %`;
  $('#progressBar').style.width = `${p}%`;
  $('#progressCount').textContent = `${n} sur ${entries.length} fiches cochées`;
}

function render() {
  renderCategories();
  const list = filteredEntries();
  $('#resultCount').textContent = `${list.length} résultat${list.length>1?'s':''}`;
  $('#list').innerHTML = list.map(e => `
    <article class="entry" onclick="openEntry('${e.id}')">
      <div class="entry-emoji">${e.emoji}</div>
      <div class="entry-main">
        <div class="entry-title">${e.name}</div>
        <div class="entry-sub">${e.category} · ${e.summary}</div>
      </div>
      <button class="mini ${favorites.has(e.id)?'favorite':''}" onclick="event.stopPropagation();toggleFavorite('${e.id}')">★</button>
      <button class="mini ${completed.has(e.id)?'completed':''}" onclick="event.stopPropagation();toggleCompleted('${e.id}')">✓</button>
    </article>
  `).join('');
  updateProgress();
}

function setCategory(c) {
  selectedCategory = c;
  favoritesOnly = false;
  render();
}

function showFavorites() {
  favoritesOnly = true;
  render();
  window.scrollTo({top:0, behavior:'smooth'});
}

function toggleCompleted(id) {
  completed.has(id) ? completed.delete(id) : completed.add(id);
  persist();
  render();
}

function toggleFavorite(id) {
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  persist();
  render();
}

function openEntry(id) {
  const e = entries.find(x => x.id === id);
  $('#modalBody').innerHTML = `
    <div class="detail-emoji">${e.emoji}</div>
    <h2>${e.name}</h2>
    <div class="detail-category">${e.category}</div>
    <h3>📌 Résumé</h3><p>${e.summary}</p>
    <h3>📖 Détails</h3><p>${e.details}</p>
    <h3>🔓 Comment l’obtenir</h3><p>${e.unlock}</p>
    ${e.tips?.length ? `<h3>💡 Conseils</h3><ul>${e.tips.map(t=>`<li>${t}</li>`).join('')}</ul>` : ''}
    <div class="detail-actions">
      <button onclick="toggleCompleted('${e.id}');openEntry('${e.id}')">${completed.has(e.id)?'✅ Terminé':'⭕ Marquer comme terminé'}</button>
      <button onclick="toggleFavorite('${e.id}');openEntry('${e.id}')">${favorites.has(e.id)?'⭐ Favori':'☆ Ajouter aux favoris'}</button>
    </div>`;
  $('#modal').classList.add('show');
}

function closeModal() {
  $('#modal').classList.remove('show');
}

function resetAll() {
  if (confirm('Effacer la progression et les favoris ?')) {
    completed.clear();
    favorites.clear();
    persist();
    render();
  }
}

$('#search').addEventListener('input', render);
$('#modal').addEventListener('click', e => {
  if (e.target.id === 'modal') closeModal();
});

render();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}
