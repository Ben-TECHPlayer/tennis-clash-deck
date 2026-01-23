const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Liste des cartes à récupérer avec leur catégorie et nom de fichier cible
const cardsToFetch = [
  // --- Grips ---
  { name: 'The_Katana', category: 'grip', filename: 'Katana.js' },
  { name: 'The_Warrior', category: 'grip', filename: 'Warrior.js' },
  { name: 'The_Talon', category: 'grip', filename: 'Talon.js' },
  { name: 'The_Machete', category: 'grip', filename: 'Machete.js' },
  { name: 'The_Cobra', category: 'grip', filename: 'Cobra.js' },
  { name: 'The_Titan', category: 'grip', filename: 'Titan.js' },
  { name: 'Tactical_Grip', category: 'grip', filename: 'TacticalGrip.js' },
  { name: 'The_Forge', category: 'grip', filename: 'Forge.js' },


  // --- Nutrition ---
  { name: 'Antioxidants', category: 'nutrition', filename: 'Antioxidants.js' },
  { name: 'Carboload', category: 'nutrition', filename: 'Carboload.js' },
  { name: 'Increased_Hydration', category: 'nutrition', filename: 'IncreasedHydration.js' },
  { name: 'Keto_Sourcing', category: 'nutrition', filename: 'KetoSourcing.js' },
  { name: 'Lean_Protein', category: 'nutrition', filename: 'LeanProtein.js' },
  { name: 'Macrobiotic', category: 'nutrition', filename: 'Macrobiotic.js' },
  { name: 'Natural_Energy', category: 'nutrition', filename: 'NaturalEnergy.js' },
  { name: 'Vegan_Diet', category: 'nutrition', filename: 'VeganDiet.js' },

  // --- Rackets ---
  { name: 'The_Bullseye', category: 'racket', filename: 'Bullseye.js' },
  { name: 'The_Eagle', category: 'racket', filename: 'Eagle.js' },
  { name: 'The_Patriot', category: 'racket', filename: 'Patriot.js' },
  { name: 'The_Outback', category: 'racket', filename: 'Outback.js' },
  { name: 'The_Panther', category: 'racket', filename: 'Panther.js' },
  { name: 'The_Samurai', category: 'racket', filename: 'Samurai.js' },
  { name: 'The_Hammer', category: 'racket', filename: 'Hammer.js' },
  { name: 'Zeus', category: 'racket', filename: 'Zeus.js' },

  // --- Shoes ---
  { name: 'The_Feather', category: 'shoe', filename: 'Feather.js' },
  { name: 'The_Anvil', category: 'shoe', filename: 'Anvil.js' },
  { name: 'The_Hunter', category: 'shoe', filename: 'Hunter.js' },
  { name: 'The_Raptor', category: 'shoe', filename: 'Raptor.js' },
  { name: 'The_Piranha', category: 'shoe', filename: 'Piranha.js' },
  { name: 'The_Ballistic', category: 'shoe', filename: 'Ballistic.js' },
  { name: 'The_Hades_Treads', category: 'shoe', filename: 'Hades.js' },
  { name: 'The_Shuriken', category: 'shoe', filename: 'Shuriken.js' },

  // --- Wristbands ---
  { name: 'The_Rocket', category: 'wristband', filename: 'Rocket.js' },
  { name: 'The_Tomahawk', category: 'wristband', filename: 'Tomahawk.js' },
  { name: 'Jolly_Roger', category: 'wristband', filename: 'JollyRoger.js' },
  { name: 'The_Macaw', category: 'wristband', filename: 'Macaw.js' },
  { name: 'The_Koi', category: 'wristband', filename: 'Koi.js' },
  { name: 'The_Kodiak', category: 'wristband', filename: 'Kodiak.js' },
  { name: 'The_Gladiator', category: 'wristband', filename: 'Gladiator.js' },
  { name: 'The_Shield', category: 'wristband', filename: 'Shield.js' },

  // --- Workouts ---
  { name: 'Endurance', category: 'workout', filename: 'Endurance.js' },
  { name: 'Sprint', category: 'workout', filename: 'Sprint.js' },
  { name: 'Plyometrics', category: 'workout', filename: 'Plyometrics.js' },
  { name: 'Powerlifting', category: 'workout', filename: 'Powerlifting.js' },
  { name: 'Weight_lifting', category: 'workout', filename: 'WeightLifting.js' },
  { name: 'Resistance_Band', category: 'workout', filename: 'ResistanceBand.js' },
  { name: 'Mountain_Climber', category: 'workout', filename: 'MountainClimber.js' },
  { name: 'Lunges', category: 'workout', filename: 'Lunges.js' }
];

const BASE_WIKI_URL = 'https://tennis-clash.fandom.com/wiki/';
const BASE_OUTPUT_DIR = path.join(__dirname, 'src', 'attributes');

// Fonction pour nettoyer les textes (retirer les espaces superflus, etc.)
const cleanText = (text) => text ? text.replace(/(\r\n|\n|\r)/gm, "").trim() : "";

// Fonction principale pour récupérer et écrire les données
async function fetchAndSaveCard(card) {
  const url = `${BASE_WIKI_URL}${card.name}`;
  console.log(`Fetching data for ${card.name} from ${url}...`);

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const stats = [];

    // Recherche du tableau de statistiques. 
    // Sur Fandom, c'est souvent une table avec la classe "article-table" ou juste une table standard.
    // On cherche une table qui contient "Level" ou "Niveau" dans ses en-têtes.
    let table = $('table.article-table').first();
    
    if (table.length === 0) {
      // Fallback : chercher n'importe quelle table
      $('table').each((i, el) => {
        const headers = $(el).find('th').text();
        if (headers.includes('Level') || headers.includes('Niveau')) {
          table = $(el);
          return false; // break
        }
      });
    }

    if (table.length === 0) {
      console.warn(`⚠️  Tableau non trouvé pour ${card.name}`);
      return;
    }

    // Extraction des en-têtes
    const headers = [];
    table.find('tr').first().find('th').each((i, el) => {
      let header = cleanText($(el).text());
      // Normalisation des clés (ex: "Forehand" -> "forehand")
      header = header.toLowerCase().replace(/\s+/g, '_');
      headers.push(header);
    });

    // Extraction des lignes
    table.find('tr').each((i, row) => {
      // Ignorer la ligne d'en-tête
      if (i === 0) return;

      const rowData = {};
      const cells = $(row).find('td');

      // Si pas de cellules td, c'est peut-être une autre ligne d'en-tête ou vide
      if (cells.length === 0) return;

      cells.each((j, cell) => {
        const header = headers[j] || `col_${j}`;
        let value = cleanText($(cell).text());
        
        // Convertir en nombre si c'est possible
        if (!isNaN(value) && value !== "") {
          value = Number(value);
        }
        
        rowData[header] = value;
      });

      // On ajoute la ligne seulement si elle contient des données pertinentes (ex: un niveau)
      if (Object.keys(rowData).length > 0) {
        stats.push(rowData);
      }
    });

    if (stats.length > 0) {
      saveFile(card, stats);
    } else {
      console.warn(`⚠️  Aucune donnée extraite pour ${card.name}`);
    }

  } catch (error) {
    console.error(`❌ Erreur lors de la récupération de ${card.name}:`, error.message);
  }
}

function saveFile(card, data) {
  const dirPath = path.join(BASE_OUTPUT_DIR, card.category, 'database');
  
  // Création du dossier s'il n'existe pas
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, card.filename);
  
  // Nom de la variable (ex: TheKatana)
  const variableName = card.filename.replace('.js', '');

  const fileContent = `// Données récupérées depuis ${BASE_WIKI_URL}${card.name}
const ${variableName} = ${JSON.stringify(data, null, 2)};

export default ${variableName};
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`✅ Fichier sauvegardé : ${filePath}`);
}

// Exécution du script
(async () => {
  for (const card of cardsToFetch) {
    await fetchAndSaveCard(card);
  }
})();
