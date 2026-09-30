// ---------- Data ----------
// Amounts in ml; `null` amount = garnish / "to taste" item described by `note`.
const COCKTAILS = [
  {
    id: "negroni",
    name: "Negroni",
    origin: "Florence, 1919",
    category: "Aperitivo",
    glass: "rocks",
    color: "#c0281c",
    strength: "Strong",
    method: "Stirred",
    description: "Bitter, sweet and boozy in perfect balance — the king of Italian aperitivi.",
    ingredients: [
      { name: "Gin", amount: 30 },
      { name: "Campari", amount: 30 },
      { name: "Sweet (rosso) vermouth", amount: 30 },
      { name: "Orange peel", amount: null, note: "garnish" }
    ],
    steps: [
      "Add gin, Campari and vermouth to a mixing glass filled with ice.",
      "Stir for about 20–30 seconds until well chilled.",
      "Strain into a rocks glass over a large ice cube.",
      "Express an orange peel over the drink and drop it in."
    ],
    story: "Legend says Count Camillo Negroni asked the bartender at Caffè Casoni to strengthen his Americano by swapping soda water for gin."
  },
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    origin: "Veneto, 1950s",
    category: "Spritz",
    glass: "wine",
    color: "#f07a1d",
    strength: "Light",
    method: "Built",
    description: "Bright, bubbly and gently bitter — the taste of a Venetian summer evening.",
    ingredients: [
      { name: "Prosecco", amount: 90 },
      { name: "Aperol", amount: 60 },
      { name: "Soda water", amount: 30 },
      { name: "Orange slice", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a large wine glass with ice.",
      "Pour in the Prosecco, then the Aperol.",
      "Top with a splash of soda water and stir gently once.",
      "Garnish with an orange slice."
    ],
    story: "The 3-2-1 ratio (Prosecco, Aperol, soda) is the easiest way to remember it."
  },
  {
    id: "bellini",
    name: "Bellini",
    origin: "Venice, 1948",
    category: "Sparkling",
    glass: "flute",
    color: "#f6b48f",
    strength: "Light",
    method: "Built",
    description: "Silky white peach purée topped with chilled Prosecco.",
    ingredients: [
      { name: "White peach purée", amount: 50 },
      { name: "Prosecco", amount: 100 }
    ],
    steps: [
      "Pour the chilled peach purée into a flute.",
      "Slowly top with cold Prosecco, tilting the glass to keep the bubbles.",
      "Stir very gently to combine."
    ],
    story: "Created by Giuseppe Cipriani at Harry's Bar and named after the Renaissance painter Giovanni Bellini, for its soft pink glow."
  },
  {
    id: "americano",
    name: "Americano",
    origin: "Milan, 1860s",
    category: "Aperitivo",
    glass: "highball",
    color: "#b8321f",
    strength: "Light",
    method: "Built",
    description: "The Negroni's lighter, fizzier ancestor — perfect for a long afternoon.",
    ingredients: [
      { name: "Campari", amount: 30 },
      { name: "Sweet (rosso) vermouth", amount: 30 },
      { name: "Soda water", amount: 60 },
      { name: "Orange slice", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a highball glass with ice.",
      "Add Campari and vermouth.",
      "Top with soda water and stir gently.",
      "Garnish with an orange slice."
    ],
    story: "Originally called the Milano-Torino; soda was added and the name reportedly changed for the American visitors who loved it."
  },
  {
    id: "negroni-sbagliato",
    name: "Negroni Sbagliato",
    origin: "Milan, 1972",
    category: "Sparkling",
    glass: "rocks",
    color: "#d23a24",
    strength: "Medium",
    method: "Built",
    description: "The 'mistaken' Negroni — Prosecco instead of gin, and happily so.",
    ingredients: [
      { name: "Campari", amount: 30 },
      { name: "Sweet (rosso) vermouth", amount: 30 },
      { name: "Prosecco", amount: 30 },
      { name: "Orange slice", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a rocks glass with ice.",
      "Add Campari and vermouth and stir briefly.",
      "Top with Prosecco.",
      "Garnish with an orange slice."
    ],
    story: "Born at Bar Basso when a bartender grabbed a bottle of spumante instead of gin — sbagliato means 'wrong'."
  },
  {
    id: "hugo",
    name: "Hugo",
    origin: "South Tyrol, 2005",
    category: "Spritz",
    glass: "wine",
    color: "#cfe3a2",
    strength: "Light",
    method: "Built",
    description: "Floral, minty and refreshing — an alpine twist on the spritz.",
    ingredients: [
      { name: "Elderflower syrup or liqueur", amount: 20 },
      { name: "Prosecco", amount: 120 },
      { name: "Soda water", amount: 30 },
      { name: "Fresh mint leaves", amount: null, note: "6–8 leaves" },
      { name: "Lime wedge", amount: null, note: "garnish" }
    ],
    steps: [
      "Gently clap the mint leaves to release their aroma and place in a wine glass.",
      "Add elderflower syrup and fill the glass with ice.",
      "Pour in Prosecco and top with soda water.",
      "Stir gently and garnish with a lime wedge."
    ],
    story: "Created in Naturno, South Tyrol, as a lighter alternative to the Aperol Spritz."
  },
  {
    id: "rossini",
    name: "Rossini",
    origin: "Venice",
    category: "Sparkling",
    glass: "flute",
    color: "#e2475c",
    strength: "Light",
    method: "Built",
    description: "The Bellini's berry-red cousin, made with fresh strawberry purée.",
    ingredients: [
      { name: "Strawberry purée", amount: 50 },
      { name: "Prosecco", amount: 100 }
    ],
    steps: [
      "Blend fresh strawberries and strain to make a smooth purée.",
      "Pour the purée into a chilled flute.",
      "Slowly top with Prosecco and stir gently."
    ],
    story: "Named after composer Gioachino Rossini, author of The Barber of Seville."
  },
  {
    id: "garibaldi",
    name: "Garibaldi",
    origin: "Italy, 1860s",
    category: "Aperitivo",
    glass: "highball",
    color: "#f2621c",
    strength: "Light",
    method: "Built",
    description: "Just Campari and fluffy, freshly squeezed orange juice — simple and brilliant.",
    ingredients: [
      { name: "Campari", amount: 45 },
      { name: "Fresh orange juice", amount: 120 },
      { name: "Orange wedge", amount: null, note: "garnish" }
    ],
    steps: [
      "Juice oranges and whip the juice (a blender or milk frother works) until airy.",
      "Fill a highball glass with ice and add Campari.",
      "Top with the fluffy orange juice.",
      "Garnish with an orange wedge."
    ],
    story: "Named for Giuseppe Garibaldi: Campari from the north and oranges from the south, united like Italy itself."
  },
  {
    id: "milano-torino",
    name: "Milano-Torino",
    origin: "Milan, 1860s",
    category: "Aperitivo",
    glass: "rocks",
    color: "#9e2418",
    strength: "Medium",
    method: "Built",
    description: "Campari from Milan meets vermouth from Turin — the original classic.",
    ingredients: [
      { name: "Campari", amount: 45 },
      { name: "Sweet (rosso) vermouth", amount: 45 },
      { name: "Lemon peel", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a rocks glass with ice.",
      "Add Campari and vermouth and stir well.",
      "Garnish with a lemon peel."
    ],
    story: "The grandfather of both the Americano and the Negroni."
  },
  {
    id: "bicicletta",
    name: "Bicicletta",
    origin: "Lombardy",
    category: "Spritz",
    glass: "wine",
    color: "#e0452a",
    strength: "Light",
    method: "Built",
    description: "Campari and crisp white wine — a rustic, easygoing spritz.",
    ingredients: [
      { name: "Dry white wine", amount: 90 },
      { name: "Campari", amount: 60 },
      { name: "Soda water", amount: 30 },
      { name: "Lemon slice", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add white wine and Campari.",
      "Top with soda water and stir gently.",
      "Garnish with a lemon slice."
    ],
    story: "Said to be named after elderly gentlemen wobbling home on their bicycles after a few too many."
  },
  {
    id: "sgroppino",
    name: "Sgroppino",
    origin: "Venice, 16th century",
    category: "Digestivo",
    glass: "coupe",
    color: "#f3ecb0",
    strength: "Light",
    method: "Whisked",
    description: "A frothy lemon sorbet cocktail served between courses or after dinner.",
    ingredients: [
      { name: "Lemon sorbet", amount: null, note: "2 scoops" },
      { name: "Prosecco", amount: 60 },
      { name: "Vodka", amount: 15 },
      { name: "Lemon zest", amount: null, note: "garnish" }
    ],
    steps: [
      "Place the sorbet in a chilled bowl and whisk until smooth.",
      "Slowly whisk in the vodka, then the Prosecco, until creamy and frothy.",
      "Pour into a chilled coupe or flute.",
      "Garnish with a little lemon zest."
    ],
    story: "Sgroppino comes from Venetian dialect for 'untying a knot' — it was meant to settle the stomach after a rich meal."
  },
  {
    id: "godfather",
    name: "Godfather",
    origin: "Italian-American, 1970s",
    category: "Digestivo",
    glass: "rocks",
    color: "#9a5a1f",
    strength: "Strong",
    method: "Stirred",
    description: "Scotch softened with almond-sweet amaretto — a smooth nightcap.",
    ingredients: [
      { name: "Scotch whisky", amount: 45 },
      { name: "Amaretto", amount: 15 }
    ],
    steps: [
      "Fill a rocks glass with ice.",
      "Add Scotch and amaretto.",
      "Stir gently and serve."
    ],
    story: "Amaretto di Saronno reportedly claimed it as a favorite of Marlon Brando."
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    origin: "Amalfi Coast",
    category: "Spritz",
    glass: "wine",
    color: "#f5d840",
    strength: "Light",
    method: "Built",
    description: "Sunny, zesty and sweet — the Amalfi Coast in a glass.",
    ingredients: [
      { name: "Prosecco", amount: 90 },
      { name: "Limoncello", amount: 60 },
      { name: "Soda water", amount: 30 },
      { name: "Lemon slice & mint", amount: null, note: "garnish" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add limoncello, then Prosecco.",
      "Top with soda water and stir gently.",
      "Garnish with a lemon slice and a sprig of mint."
    ],
    story: "Limoncello is made by steeping lemon zest in alcohol — Sorrento lemons are the most prized."
  },
  {
    id: "cardinale",
    name: "Cardinale",
    origin: "Rome, 1950s",
    category: "Aperitivo",
    glass: "coupe",
    color: "#b01e2e",
    strength: "Strong",
    method: "Stirred",
    description: "A drier, crisper Negroni made with dry vermouth.",
    ingredients: [
      { name: "Gin", amount: 30 },
      { name: "Campari", amount: 30 },
      { name: "Dry vermouth", amount: 30 },
      { name: "Lemon peel", amount: null, note: "garnish" }
    ],
    steps: [
      "Add all ingredients to a mixing glass with ice.",
      "Stir until well chilled.",
      "Strain into a chilled coupe.",
      "Garnish with a lemon peel."
    ],
    story: "Said to have been created for a cardinal visiting Rome — its deep red matches the robes."
  }
];

const CATEGORIES = ["All", "Aperitivo", "Spritz", "Sparkling", "Digestivo", "Favorites"];

// ---------- Glass illustrations ----------
function glassSVG(type, color) {
  const stroke = 'stroke="rgba(255,255,255,0.9)" stroke-width="3" fill="none" stroke-linejoin="round"';
  const shapes = {
    rocks: `
      <path d="M24 30 L28 82 H72 L76 30 Z" fill="${color}" opacity="0.9"/>
      <rect x="36" y="44" width="16" height="16" rx="3" fill="rgba(255,255,255,0.45)"/>
      <rect x="50" y="54" width="14" height="14" rx="3" fill="rgba(255,255,255,0.35)"/>
      <path d="M20 20 L26 86 H74 L80 20" ${stroke}/>`,
    highball: `
      <path d="M32 26 L34 90 H66 L68 26 Z" fill="${color}" opacity="0.9"/>
      <circle cx="44" cy="50" r="2.5" fill="#fff" opacity="0.7"/>
      <circle cx="54" cy="66" r="2" fill="#fff" opacity="0.7"/>
      <circle cx="48" cy="78" r="1.8" fill="#fff" opacity="0.7"/>
      <path d="M30 12 L33 94 H67 L70 12" ${stroke}/>`,
    wine: `
      <path d="M26 32 Q26 64 50 64 Q74 64 74 32 Z" fill="${color}" opacity="0.9"/>
      <circle cx="42" cy="44" r="2.5" fill="#fff" opacity="0.7"/>
      <circle cx="56" cy="52" r="2" fill="#fff" opacity="0.7"/>
      <path d="M24 12 Q20 66 50 66 Q80 66 76 12 M50 66 V90 M36 92 H64" ${stroke}/>`,
    flute: `
      <path d="M40 30 Q40 64 50 64 Q60 64 60 30 Z" fill="${color}" opacity="0.9"/>
      <circle cx="48" cy="44" r="1.8" fill="#fff" opacity="0.8"/>
      <circle cx="52" cy="54" r="1.5" fill="#fff" opacity="0.8"/>
      <path d="M38 8 Q36 66 50 66 Q64 66 62 8 M50 66 V90 M38 92 H62" ${stroke}/>`,
    coupe: `
      <path d="M20 34 Q24 54 50 54 Q76 54 80 34 Z" fill="${color}" opacity="0.9"/>
      <path d="M16 28 Q20 56 50 56 Q80 56 84 28 M50 56 V88 M36 90 H64" ${stroke}/>`
  };
  return `<svg viewBox="0 0 100 100" aria-hidden="true">${shapes[type] || shapes.rocks}</svg>`;
}

// ---------- State ----------
const state = {
  query: "",
  category: "All",
  unit: "ml",
  favorites: loadFavorites()
};

function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem("aperitivo-favs") || "[]"));
  } catch {
    return new Set();
  }
}
function saveFavorites() {
  try {
    localStorage.setItem("aperitivo-favs", JSON.stringify([...state.favorites]));
  } catch { /* storage unavailable — favorites live for this session only */ }
}

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);

function formatAmount(ml, servings = 1) {
  const total = ml * servings;
  if (state.unit === "oz") {
    const oz = total / 30; // bartender's approximation: 1 oz ≈ 30 ml
    return `${+oz.toFixed(2)} oz`;
  }
  return `${Math.round(total)} ml`;
}

function matches(c) {
  if (state.category === "Favorites" && !state.favorites.has(c.id)) return false;
  if (!["All", "Favorites"].includes(state.category) && c.category !== state.category) return false;
  if (!state.query) return true;
  const q = state.query.toLowerCase();
  return (
    c.name.toLowerCase().includes(q) ||
    c.origin.toLowerCase().includes(q) ||
    c.ingredients.some((i) => i.name.toLowerCase().includes(q))
  );
}

// ---------- Rendering ----------
function renderFilters() {
  $("#filters").innerHTML = CATEGORIES.map(
    (cat) => `<button type="button" class="chip ${cat === state.category ? "active" : ""}" data-cat="${cat}">
      ${cat === "Favorites" ? "♥ " : ""}${cat}${cat === "Favorites" ? ` (${state.favorites.size})` : ""}
    </button>`
  ).join("");
}

function renderGrid() {
  const list = COCKTAILS.filter(matches);
  $("#result-count").textContent = `${list.length} cocktail${list.length === 1 ? "" : "s"}`;
  $("#empty").hidden = list.length > 0;

  $("#grid").innerHTML = list
    .map((c) => {
      const fav = state.favorites.has(c.id);
      return `
      <div class="card" tabindex="0" role="button" data-id="${c.id}" style="--c:${c.color}" aria-label="Open ${c.name} recipe">
        <button type="button" class="fav-btn ${fav ? "on" : ""}" data-fav="${c.id}" aria-label="${fav ? "Remove from" : "Add to"} favorites">${fav ? "♥" : "♡"}</button>
        <div class="card-art">${glassSVG(c.glass, c.color)}</div>
        <div class="card-body">
          <h3>${c.name}</h3>
          <p class="card-origin">${c.origin}</p>
          <p class="card-desc">${c.description}</p>
          <div class="card-tags">
            <span class="tag">${c.category}</span>
            <span class="tag">${c.strength}</span>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

let modalServings = 1;
let modalId = null;

function renderModal() {
  const c = COCKTAILS.find((x) => x.id === modalId);
  if (!c) return;
  const fav = state.favorites.has(c.id);

  $("#modal-body").innerHTML = `
    <div class="detail-head" style="--c:${c.color}">
      ${glassSVG(c.glass, c.color)}
      <div>
        <h2 id="modal-title">${c.name}</h2>
        <p>${c.origin} · ${c.description}</p>
      </div>
    </div>
    <div class="detail-body">
      <div class="meta">
        <span>🍸 ${c.glass[0].toUpperCase() + c.glass.slice(1)} glass</span>
        <span>🥄 ${c.method}</span>
        <span>💪 ${c.strength}</span>
        <span>🏷️ ${c.category}</span>
      </div>

      <h3>Ingredients</h3>
      <div class="servings">
        <button type="button" data-serv="-1" aria-label="Fewer servings">−</button>
        <strong>${modalServings} serving${modalServings > 1 ? "s" : ""}</strong>
        <button type="button" data-serv="1" aria-label="More servings">+</button>
      </div>
      <ul class="ingredients">
        ${c.ingredients
          .map(
            (i) => `<li><span>${i.name}</span><span class="amt">${
              i.amount != null ? formatAmount(i.amount, modalServings) : i.note
            }</span></li>`
          )
          .join("")}
      </ul>

      <h3>Method</h3>
      <ol class="steps">${c.steps.map((s) => `<li>${s}</li>`).join("")}</ol>

      <p class="story">${c.story}</p>

      <div style="margin-top:22px;text-align:center">
        <button type="button" class="btn" data-fav="${c.id}"
          style="background:${fav ? "var(--bg)" : "var(--accent)"};color:${fav ? "var(--accent)" : "#fff"};border:1px solid var(--accent)">
          ${fav ? "♥ Saved to favorites" : "♡ Add to favorites"}
        </button>
      </div>
    </div>`;
}

function openModal(id) {
  modalId = id;
  modalServings = 1;
  renderModal();
  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
  $(".modal-close").focus();
}

function closeModal() {
  $("#modal").hidden = true;
  document.body.style.overflow = "";
  modalId = null;
}

function toggleFavorite(id) {
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  saveFavorites();
  renderFilters();
  renderGrid();
  if (modalId) renderModal();
}

// ---------- Events ----------
$("#search").addEventListener("input", (e) => {
  state.query = e.target.value.trim();
  renderGrid();
});

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.category = btn.dataset.cat;
  renderFilters();
  renderGrid();
});

$("#grid").addEventListener("click", (e) => {
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) {
    e.stopPropagation();
    toggleFavorite(favBtn.dataset.fav);
    return;
  }
  const card = e.target.closest(".card");
  if (card) openModal(card.dataset.id);
});

$("#grid").addEventListener("keydown", (e) => {
  const card = e.target.closest(".card");
  if (card && e.target === card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openModal(card.dataset.id);
  }
});

$("#modal").addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) return closeModal();
  const serv = e.target.closest("[data-serv]");
  if (serv) {
    modalServings = Math.min(20, Math.max(1, modalServings + Number(serv.dataset.serv)));
    renderModal();
    return;
  }
  const favBtn = e.target.closest("[data-fav]");
  if (favBtn) toggleFavorite(favBtn.dataset.fav);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("#modal").hidden) closeModal();
});

document.querySelector(".unit-toggle").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-unit]");
  if (!btn) return;
  state.unit = btn.dataset.unit;
  document.querySelectorAll(".unit-toggle button").forEach((b) =>
    b.classList.toggle("active", b === btn)
  );
  if (modalId) renderModal();
});

$("#random-btn").addEventListener("click", () => {
  const pick = COCKTAILS[Math.floor(Math.random() * COCKTAILS.length)];
  openModal(pick.id);
});

// ---------- Init ----------
renderFilters();
renderGrid();