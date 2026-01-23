const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Liste des cartes à récupérer avec leur catégorie et nom de fichier cible
const cardsToFetch = [
  // --- Champions ---
  { name: 'Jonah', category: 'champions', filename: 'Jonah.js' },
  { name: 'Abeke', category: 'champions', filename: 'Abeke.js' },
  { name: 'Diana', category: 'champions', filename: 'Diana.js' },
  { name: 'Luc', category: 'champions', filename: 'Luc.js' },
  { name: 'Omar', category: 'champions', filename: 'Omar.js' },
  { name: 'Ingrid', category: 'champions', filename: 'Ingrid.js' },
  { name: 'Kaito', category: 'champions', filename: 'Kaito.js' },
  { name: 'Diego', category: 'champions', filename: 'Diego.js' },
  { name: 'Florence', category: 'champions', filename: 'Florence.js' },
  { name: 'Leo', category: 'champions', filename: 'Leo.js' },
  { name: 'Hope', category: 'champions', filename: 'Hope.js' },
  { name: 'Mark', category: 'champions', filename: 'Mark.js' },
  { name: 'Anton', category: 'champions', filename: 'Anton.js' },
  { name: 'Viktoria', category: 'champions', filename: 'Viktoria.js' },
  { name: 'Mei-Li', category: 'champions', filename: 'MeiLi.js' },
  { name: 'Hyun-Jun', category: 'champions', filename: 'HyunJun.js' }

];

const BASE_WIKI_URL = 'https://tennis-clash.fandom.com/wiki/';
const BASE_OUTPUT_DIR = path.join(__dirname, 'src', 'players');

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
