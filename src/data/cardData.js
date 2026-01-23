// Ce fichier sert de "cerveau" pour les calculs.
// Les clés (ex: "natural-energy-table") doivent correspondre aux IDs que tu as mis dans SelectCard.js

export const CARDS_DATA = {
    // --- LEGENDS ---
    "players/legends/database/Osaka": {
        name: "Naomi Osaka",
        type: "Character",
        stats: {                
            agility: [4,6,7,8,0,0,0,0,0,0,0,0,0,0,26],
            stamina: [5,6,7,8,0,0,0,0,0,0,0,0,0,0,19],
            serve: [4,5,6,7,0,0,0,0,0,0,0,0,0,0,18],
            volley: [2,3,4,5,0,0,0,0,0,0,0,0,0,0,13],
            forehand: [7,9,10,12,0,0,0,0,0,0,0,0,0,0,28],
            backhand: [6,7,9,10,0,0,0,0,0,0,0,0,0,0,24]
        }
    },

    "players/legends/database/Kyrgios": {
        name: "Nick Kyrgios",
        type: "Character",
        stats: {                        
            agility: [5,6,8,10,11,13,15,0,0,0,0,0,0,0,28],
            stamina: [3,4,4,5,6,6,7,0,0,0,0,0,0,0,12],
            serve: [7,8,10,11,13,14,15,0,0,0,0,0,0,0,27],
            volley: [6,8,9,10,12,13,15,0,0,0,0,0,0,0,25],
            forehand: [7,8,9,11,12,13,15,0,0,0,0,0,0,0,25],
            backhand: [4,5,7,8,9,10,11,0,0,0,0,0,0,0,19]
        }
    },

    "players/legends/database/Sabalenka": {
        name: "Aryna Sabalenka",
        type: "Character",
        stats: {
            agility: [4,6,0,0,0,0,0,0,0,0,0,0,0,0,26],
            stamina: [5,6,0,0,0,0,0,0,0,0,0,0,0,0,18],
            serve: [5,6,0,0,0,0,0,0,0,0,0,0,0,0,18],
            volley: [2,3,0,0,0,0,0,0,0,0,0,0,0,0,12],
            forehand: [8,10,0,0,0,0,0,0,0,0,0,0,0,0,31],
            backhand: [6,7,0,0,0,0,0,0,0,0,0,0,0,0,24]
        }
    },

    "players/legends/database/Paul": {
        name: "Tommy Paul",
        type: "Character",
        stats: {
            agility: [5,6,8,10,0,0,0,0,0,0,0,0,0,0,28],
            stamina: [5,6,7,8,0,0,0,0,0,0,0,0,0,0,18],
            serve: [4,5,6,7,0,0,0,0,0,0,0,0,0,0,17],
            volley: [5,6,7,8,0,0,0,0,0,0,0,0,0,0,20],
            forehand: [5,7,8,9,0,0,0,0,0,0,0,0,0,0,22],
            backhand: [5,7,8,9,0,0,0,0,0,0,0,0,0,0,22]
        }
    },

    "players/legends/database/Paolini": {
        name: "Jasmine Paolini",
        type: "Character",
        stats: {
            agility: [7,9,11,13,0,0,0,0,0,0,0,0,0,0,34],
            stamina: [7,8,9,10,0,0,0,0,0,0,0,0,0,0,24],
            serve: [3,3,4,5,0,0,0,0,0,0,0,0,0,0,13],
            volley: [2,2,3,4,0,0,0,0,0,0,0,0,0,0,10],
            forehand: [5,6,7,9,0,0,0,0,0,0,0,0,0,0,21],
            backhand: [3,3,4,5,0,0,0,0,0,0,0,0,0,0,14]
        }
    },

    //-- CHAMPIONS ---
    "players/champions/database/Abeke": {
        name: "Abeke",
        type: "Character",
        stats: {
            agility: [6,8,10,12,14,16,17,19,21,23,25,26,28,30,32],
            stamina: [7,8,9,10,12,13,14,15,16,18,19,20,22,23,24],
            serve: [4,4,5,6,7,8,9,10,11,12,13,13,14,15,16],
            volley: [2,2,3,4,4,5,5,6,7,7,8,9,9,10,10],
            forehand: [3,4,5,5,6,7,8,9,10,10,11,12,12,12,12],
            backhand: [4,6,7,8,9,10,11,12,13,14,15,16,16,16,17]
        }
    },

    "players/champions/database/Anton": {
        name: "Anton",
        type: "Character",
        stats: {
            agility: [4,5,6,7,8,9,11,12,13,14,15,16,17,19,21],
            stamina: [4,4,5,5,6,6,7,8,8,9,9,10,11,13,14],
            serve: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            volley: [2,3,4,4,5,6,6,7,8,8,9,10,11,13,14],
            forehand: [8,9,10,11,12,13,16,18,19,20,21,22,23,25,27],
            backhand: [5,6,7,8,9,10,11,12,13,14,15,16,17,19,21]
        }
    },

    "players/champions/database/Diana": {
        name: "Diana",
        type: "Character",
        stats: {
            agility: [4,5,7,8,10,11,13,14,16,17,19,20,22,24,25],
            stamina: [1,2,2,3,3,4,4,4,5,5,6,6,7,7,8],
            serve: [5,6,7,8,9,10,11,12,13,15,16,17,18,19,20],
            volley: [6,7,8,9,11,12,13,14,16,17,18,19,20,22,24],
            forehand: [3,4,5,6,7,8,8,9,10,10,11,13,13,14,15],
            backhand: [3,4,5,6,7,7,8,9,10,11,13,13,14,14,17]
        }
    },

    "players/champions/database/Diego": {
        name: "Diego",
        type: "Character",
        stats: {
            agility: [6,8,10,12,14,15,17,19,21,23,25,27,29,30,32],
            stamina: [7,8,9,10,12,13,14,15,16,18,19,20,22,23,24],
            serve: [4,4,5,6,7,8,9,10,10,11,12,13,14,15,16],
            volley: [2,2,3,4,4,5,5,6,6,7,7,8,8,9,10],
            forehand: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            backhand: [3,3,4,5,6,7,7,8,8,9,10,11,12,13,14]
        }
    },

    "players/champions/database/Viktoria": {
        name: "Viktoria",
        type: "Character",
        stats: {
            agility: [2,3,4,6,7,8,9,10,12,13,14,15,17,18,19],
            stamina: [4,5,5,6,7,7,8,9,9,10,11,11,12,12,14],
            serve: [4,5,5,6,7,8,9,10,11,12,13,14,15,16,17],
            volley: [2,3,4,4,5,5,6,6,7,7,8,9,9,10,12],
            forehand: [8,9,10,11,12,14,15,16,17,19,21,22,23,25,26],
            backhand: [4,5,6,7,8,9,10,10,11,12,13,14,15,16,18]
        }
    },

    "players/champions/database/Hope": {
        name: "Hope",
        type: "Character",
        stats: {
            agility: [4,5,6,7,8,9,11,12,13,14,15,16,17],
            stamina: [4,4,5,5,6,6,7,8,8,9,9,10,11],
            serve: [4,5,6,7,8,9,10,11,12,13,14,15,16],
            volley: [2,3,4,4,5,6,6,7,8,8,9,10,11,12],
            forehand: [8,9,10,11,12,13,16,18,19,20,21,22,23],
            backhand: [5,6,7,8,9,10,11,12,13,14,15,16,17]
        }
    },

    "players/champions/database/HyunJun": {
        name: "Hyun-Jun",
        type: "Character",
        stats: {
            agility: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
            stamina: [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
            serve: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            volley: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
            forehand: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
            backhand: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        }
    },

    "players/champions/database/Ingrid": {
        name: "Ingrid",
        type: "Character",
        stats: {
            agility: [5,6,8,10,11,13,15,16,18,19,20,22,24,26,28],
            stamina: [2,2,3,3,4,4,5,5,6,6,7,7,8,8,9],
            serve: [6,7,9,10,11,13,14,15,16,18,20,21,22,23,24],
            volley: [7,9,10,12,13,14,15,17,19,20,21,22,24,26,27],
            forehand: [3,4,5,6,7,8,9,10,11,11,12,13,14,15,16],
            backhand: [3,4,5,5,6,7,8,9,10,10,11,12,13,14,15]
        }
    },

    "players/champions/database/Kaito": {
        name: "Kaito",
        type: "Character",
        stats: {
            agility: [6,7,9,11,12,14,16,18,20,21,23,25,27,28,30],
            stamina: [6,8,9,10,11,13,14,15,16,17,19,20,21,22,24],
            serve: [1,2,2,3,3,4,4,5,5,6,7,7,8,8,9],
            volley: [2,3,4,4,5,6,6,7,8,8,9,10,10,11,12],
            forehand: [3,4,5,6,7,8,8,9,10,11,13,13,13,14,16],
            backhand: [3,4,5,5,6,7,8,9,10,10,11,12,13,14,15]
        }
    },

    "players/champions/database/Luc": {
        name: "Luc",
        type: "Character",
        stats: {
            agility: [3,4,5,7,8,9,11,12,13,15,16,17,19,20,21],
            stamina: [2,3,4,4,5,5,6,7,7,8,8,9,10,10,11],
            serve: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            volley: [2,3,3,4,4,5,6,6,7,8,8,9,10,11,11],
            forehand: [6,7,9,10,11,12,14,15,16,18,19,20,21,22,24],
            backhand: [4,5,6,8,9,10,11,12,13,14,15,16,17,18,19]
        }
    },

    "players/champions/database/Mark": {
        name: "Mark",
        type: "Character",
        stats: {
            agility: [3,5,6,7,9,10,12,13,15,16,18,19,20,22,23],
            stamina: [3,4,5,6,6,7,8,8,9,10,11,11,12,12,13],
            serve: [4,5,5,6,7,8,9,10,11,12,13,14,15,16,17],
            volley: [3,3,4,5,6,6,7,8,9,9,10,11,12,12,13],
            forehand: [7,8,9,1,12,13,15,16,18,19,20,22,23,25,26],
            backhand: [5,6,8,9,10,11,12,13,15,16,17,18,20,21,22]
        }
    },

    "players/champions/database/MeiLi": {
        name: "Mei-Li",
        type: "Character",
        stats: {
            agility: [4,6,8,9,11,13,15,15,17,20,21,23,24,26,27],
            stamina: [3,4,5,6,6,7,8,9,10,10,11,12,12,13,14],
            serve: [4,5,5,6,7,8,9,9,10,11,12,13,13,14,16],
            volley: [4,5,6,7,8,9,10,10,11,13,14,14,15,16,16],
            forehand: [4,5,6,7,8,9,10,12,13,14,15,16,17,18,19],
            backhand: [4,5,5,6,7,8,9,10,11,12,13,14,15,16,17]
        }
    },

    "players/champions/database/Leo": {
        name: "Leo",
        type: "Character",
        stats: {
            agility: [3,5,6,7,9,10,12,13,15,16,18,19,21],
            stamina: [2,2,3,3,4,5,5,6,6,7,7,8,8],
            serve: [5,6,8,9,10,11,12,14,15,16,17,18,19],
            volley: [5,7,8,9,10,11,12,14,15,16,17,18,19],
            forehand: [4,5,6,7,7,8,8,9,10,10,11,12,13],
            backhand: [3,4,5,5,7,8,9,10,11,12,13,14,15]
        }
    },

    "players/champions/database/Jonah": {
        name: "Jonah",
        type: "Character",
        stats: {
            agility: [2,3,4,6,7,8,9,10,12,13,14,15,17],
            stamina: [3,4,4,5,6,6,7,8,8,9,10,10,11],
            serve: [4,5,5,6,7,8,9,10,11,12,13,14,15],
            volley: [2,3,4,4,5,6,6,7,8,8,9,10,10],
            forehand: [5,7,8,9,10,11,13,14,15,16,17,18,20],
            backhand: [4,5,6,7,8,9,10,11,12,13,14,15,16]
        }
    },

    "players/champions/database/Omar": {
        name: "Omar",
        type: "Character",
        stats: {
            agility: [3,5,6,8,9,11,12,14,15,17,18,20,21,22,24],
            stamina: [2,2,3,3,4,4,5,5,6,6,7,7,8,9,9],
            serve: [5,7,8,9,10,11,13,14,15,16,17,19,20,21,22],
            volley: [6,7,8,9,12,12,13,14,15,17,18,19,20,21,26],
            forehand: [3,4,5,6,7,8,9,10,11,11,12,13,14,15,16],
            backhand: [3,4,5,5,6,7,8,9,9,10,11,12,13,14,14]
        }
    },

    "players/champions/database/Florence": {
        name: "Florence",
        type: "Character",
        stats: {
            agility: [5,7,9,11,12,14,16,18,20,21,23,25,27],
            stamina: [7,8,9,10,11,13,14,15,16,17,19,20,21],
            serve: [1,2,2,3,3,4,4,5,5,6,7,7,8],
            volley: [2,2,3,4,4,5,5,6,7,7,8,9,9],
            forehand: [3,4,5,6,7,7,9,9,10,11,13,13,13],
            backhand: [3,4,5,5,6,7,8,9,10,10,11,12,13]
        }
    },

    // --- NUTRITION ---
    "attributes/nutrition/database/StarterProtein": {
        name: "Starter Protein",
        type: "Nutrition",
        stats: {
            stamina: [4]
        }
    },
    "attributes/nutrition/database/NaturalEnergy": {
        name: "Natural Energy",
        type: "Nutrition",
        // Les tableaux commencent à l'index 0 (Niveau 1) jusqu'à l'index 14 (Niveau 15)
        stats: {
            volley:  [0, 0, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9],
            stamina: [0, 0, 3, 6, 9, 13, 17, 19, 21, 23, 26, 28, 30, 32, 34]
        }
    },
    "attributes/nutrition/database/VeganDiet": {
        name: "Vegan Diet",
        type: "Nutrition",
        stats: {
            volley:  [3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8],
            stamina: [0, 2, 3, 6, 10, 13, 18, 20, 22, 24, 26, 29, 31]
        }
    },
    "attributes/nutrition/database/Macrobiotic": {
        name: "Macrobiotic",
        type: "Nutrition",
        stats: {
            volley:  [0, 0, 0, 12, 12, 14, 14, 15, 16, 17, 19, 20, 21],
            stamina: [0, 0, 0, 1, 8, 9, 11, 13, 15, 17, 18, 20, 22]
        }
    },
    "attributes/nutrition/database/LeanProtein": {
        name: "Lean Protein",
        type: "Nutrition",
        stats: {
            stamina: [0, 0, 0, 13, 17, 22, 25, 28, 31, 34, 36, 39, 42]
        }
    },
    "attributes/nutrition/database/KetoSourcing": {
        name: "Keto Sourcing",
        type: "Nutrition",
        stats: {
            stamina: [0, 0, 0, 18, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 49]
        }
    },
    "attributes/nutrition/database/IncreasedHydration": {
        name: "IncreasedHydration",
        type: "Nutrition",
        stats: {
            forehand:  [0, 0, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6],
            stamina: [0, 0, 3, 8, 9, 12, 17, 18, 21, 23, 26, 28, 30]
        }
    },
    "attributes/nutrition/database/Carboload": {
        name: "Carboload",
        type: "Nutrition",
        stats: {
            forehand:  [0, 0, 0, 8, 9, 10, 10, 11, 12, 13, 14, 15, 15, 16, 17],
            stamina: [0, 0, 0, 6, 8, 8, 11, 13, 15, 17, 18, 20, 22, 24, 25]
        }
    },
    "attributes/nutrition/database/Antioxidants": {
        name: "Antioxidants",
        type: "Nutrition",
        stats: {
            forehand:  [3, 3, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8],
            stamina: [0, 1, 3, 6, 9, 13, 17, 19, 21, 23, 26, 28, 30, 32, 34]
        }
    },
    

    // --- SHOES ---
    "attributes/shoe/database/StarterShoe": {
        name: "Starter Shoe",
        type: "Shoe",
        stats: {
            agility: [1]
        }
    },
    "attributes/shoe/database/Raptor": {
        name: "The Raptor",
        type: "Shoe",
        stats: {
            agility: [1, 4, 7, 10, 15, 20, 24, 27, 30, 34, 37, 40, 44],
            stamina: [3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9]
        }
    },
    "attributes/shoe/database/Piranha": {
        name: "The Piranha",
        type: "Shoe",
        stats: {
            agility: [0, 0, 0, 9, 16, 17, 22, 25, 29, 33, 36, 38, 41],
            stamina: [0, 0, 0, 10, 11, 14, 14, 15, 16, 17, 18, 18, 19]
        }
    },
    "attributes/shoe/database/Shuriken": {
        name: "The Shuriken",
        type: "Shoe",
        stats: {
            agility: [0, 0, 0, 8, 12, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44],
            serve: [0, 0, 0, 11, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
    },
    "attributes/shoe/database/Hunter": {
        name: "The Hunter",
        type: "Shoe",
        stats: {
            agility: [3, 6, 7, 7, 12, 16, 21, 26, 28, 32, 35, 38, 43],
            serve: [2, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8]
        }
    },
    "attributes/shoe/database/Anvil": {
        name: "The Anvil",
        type: "Shoe",
        stats: {
            agility: [0, 0, 7, 10, 13, 19, 25, 27, 30, 33, 36, 40, 43, 46, 48],
            stamina: [0, 0, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11]
        }
    },
    "attributes/shoe/database/Ballistic": {
        name: "The Ballistic",
        type: "Shoe",
        stats: {
            agility: [0, 0, 10, 13, 15, 19, 23, 27, 30, 33, 36, 40, 43, 46, 50],
            serve: [0, 0, 4, 4, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
        }
    },
    "attributes/shoe/database/Hades": {
        name: "The Hades treads",
        type: "Shoe",
        stats: {
            agility: [0, 0, 0, 15, 20, 24, 29, 32, 36, 40, 44, 47, 51, 55, 58]
        }
    },
    "attributes/shoe/database/Feather": {
        name: "The Feather",
        type: "Shoe",
        stats: {
            agility: [0, 0, 0, 15, 19, 23, 28, 30, 33, 39, 43, 46, 49]
        }
    },

    //--RACKET
    "attributes/racket/database/StarterRacket": {
        name: "Starter Racket",
        type: "Racket",
        stats: {
            forehand: [8]
        }
    },
    "attributes/racket/database/Bullseye": {
        name: "The Bullseye",
        type: "Racket",
        stats: {
            forehand: [0, 0, 0, 17, 21, 26, 30, 33, 37, 40, 43, 46, 49, 52, 55]
        }
    },
    "attributes/racket/database/Panther": {
        name: "The Panther",
        type: "Racket",
        stats: {
            forehand: [0, 0, 17, 18, 23, 25, 29, 33, 36, 39, 42, 45, 48]
        }
    },
    "attributes/racket/database/Eagle": {
        name: "The Eagle",
        type: "Racket",
        stats: {
            agility: [2, 2, 2, 3, 3, 3, 5, 6, 6, 7, 7, 7, 8],
            forehand: [2, 3, 5, 7, 11, 15, 22, 24, 26, 29, 31, 34, 36]
        }
    },
    "attributes/racket/database/Samurai": {
        name: "The Samurai",
        type: "Racket",
        stats: {
            agility: [0, 0, 0, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6],
            forehand: [0, 0, 0, 10, 14, 20, 23, 25, 28, 31, 33, 36, 38, 41, 44]
        }
    },
    "attributes/racket/database/Zeus": {
        name: "Zeus",
        type: "Racket",
        stats: {
            agility: [0, 0, 0, 7, 7, 7, 7, 8, 9, 9, 10, 10, 11, 12, 12],
            forehand: [0, 0, 0, 6, 10, 14, 18, 21, 23, 25, 27, 29, 32, 34, 36]
        }
    },
    "attributes/racket/database/Hammer": {
        name: "The Hammer",
        type: "Racket",
        stats: {
            backhand: [0, 0, 0, 6, 9, 9, 9, 9, 9, 10, 10, 11, 12, 12, 13],
            forehand: [0, 0, 0, 18, 21, 22, 27, 30, 32, 35, 38, 41, 44, 47, 50]
        }
    },
    "attributes/racket/database/Outback": {
        name: "The Outback",
        type: "Racket",
        stats: {
            backhand: [0, 0, 0, 0, 15, 18, 20, 21, 25, 26, 29, 32, 34],
            forehand: [0, 0, 0, 0, 11, 12, 13, 14, 16, 16, 17, 18, 20]
        }
    },
    "attributes/racket/database/Patriot": {
        name: "The Patriot",
        type: "Racket",
        stats: {
            backhand: [0, 0, 0, 7, 7, 7, 7, 8, 8, 9, 9, 10, 11],
            forehand: [0, 0, 0, 13, 17, 23, 26, 29, 32, 34, 37, 39, 43]
        }
    },


    //-- GRIP
    "attributes/grip/database/StarterGrip": {
        name: "Starter Grip",
        type: "Grip",
        stats: {
            backhand: [8]
        }
    },
    "attributes/grip/database/Titan": {
        name: "The Titan",
        type: "Grip",
        stats: {
            backhand: [0, 0, 0, 17, 21, 26, 30, 33, 37, 40, 43, 46, 49, 52, 55]
        }
    },
    "attributes/grip/database/Machete": {
        name: "The Machete",
        type: "Grip",
        stats: {
            backhand: [0, 0, 17, 18, 20, 26, 29, 32, 36, 39, 42, 45, 48]
        }
    },
    "attributes/grip/database/Warrior": {
        name: "The Warrior",
        type: "Grip",
        stats: {
            volley: [2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7],
            backhand: [3, 4, 7, 9, 15, 18, 21, 23, 27, 30, 33, 36, 38]
        }
    },
    "attributes/grip/database/Katana": {
        name: "The Katana",
        type: "Grip",
        stats: {
            volley: [0, 0, 0, 4, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10],
            backhand: [0, 0, 0, 15, 18, 18, 23, 25, 28, 31, 33, 36, 38, 40, 44]
        }
    },
    "attributes/grip/database/TacticalGrip": {
        name: "Tactical Grip",
        type: "Grip",
        stats: {
            volley: [0, 0, 0, 9, 10, 12, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            backhand: [0, 0, 0, 12, 14, 14, 18, 21, 23, 25, 27, 29, 32, 34, 36]
        }
    },
    "attributes/grip/database/Forge": {
        name: "The Forge",
        type: "Grip",
        stats: {
            forehand: [0, 0, 0, 6, 9, 9, 9, 9, 9, 10, 10, 11, 12, 12, 13],
            backhand: [0, 0, 0, 18, 21, 22, 27, 30, 32, 35, 38, 41, 44, 47, 50]
        }
    },
    "attributes/grip/database/Talon": {
        name: "The Talon",
        type: "Grip",
        stats: {
            forehand: [0, 0, 0, 7, 7, 7, 7, 8, 8, 9, 9, 10, 11],
            backhand: [0, 0, 0, 13, 17, 23, 26, 29, 32, 35, 37, 39, 43]
        }
    },
    "attributes/grip/database/Cobra": {
        name: "The Cobra",
        type: "Grip",
        stats: {
            forehand: [0, 0, 0, 12, 12, 12, 13, 14, 15, 17, 17, 18, 20],
            backhand: [0, 0, 0, 8, 15, 17, 20, 22, 23, 27, 29, 32, 35]
        }
    },

    //-- WORKOUT
    "attributes/workout/database/StarterTraining": {
        name: "Starter Training",
        type: "Workout",
        stats: {
            serve: [6]
        }
    },
    "attributes/workout/database/Sprint": {
        name: "Sprint",
        type: "Workout",
        stats: {
            serve: [0, 0, 0, 14, 19, 23, 28, 31, 34, 36, 40, 43, 46]
        }
    },
    "attributes/workout/database/Lunges": {
        name: "Lunges",
        type: "Workout",
        stats: {
            serve: [0, 0, 0, 15, 20, 24, 29, 32, 35, 39, 42, 45, 48, 51, 54]
        }
    },
    "attributes/workout/database/Plyometrics": {
        name: "Plyometrics",
        type: "Workout",
        stats: {
            backhand: [3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 7],
            serve: [1, 3, 4, 8, 12, 19, 21, 24, 26, 29, 31, 34, 36]
        }
    },
    "attributes/workout/database/MountainClimber": {
        name: "Mountain Climber",
        type: "Workout",
        stats: {
            backhand: [0, 0, 3, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8],
            serve: [11, 13, 14, 16, 21, 23, 25, 28, 30, 33, 35, 38, 40]
        }
    },
    "attributes/workout/database/ResistanceBand": {
        name: "Resistance Band",
        type: "Workout",
        stats: {
            backhand: [0, 0, 0, 8, 9, 10, 10, 11, 12, 13, 14, 15, 15, 16, 17],
            serve: [0, 0, 0, 9, 11, 13, 15, 17, 20, 22, 24, 26, 28, 30, 32]
        }
    },
    "attributes/workout/database/Endurance": {
        name: "Endurance",
        type: "Workout",
        stats: {
            stamina: [3, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9],
            serve: [1, 3, 4, 6, 9, 13, 18, 21, 23, 27, 29, 31, 33]
        }
    },
    "attributes/workout/database/WeightLifting": {
        name: "Weight Lifting",
        type: "Workout",
        stats: {
            stamina: [3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11],
            serve: [4, 6, 7, 8, 11, 16, 21, 23, 25, 25, 30, 33, 35, 38, 40]
        }
    },
    "attributes/workout/database/Powerlifting": {
        name: "Powerlifting",
        type: "Workout",
        stats: {
            stamina: [0, 0, 0, 12, 12, 13, 13, 14, 15, 16, 17, 18, 20],
            serve: [0, 0, 0, 6, 10, 13, 17, 19, 21, 23, 26, 29, 31]
        }
    },


    //-- WRISTBAND
    "attributes/wristband/database/StarterBand": {
        name: "Starter Band",
        type: "Wristband",
        stats: {
            volley: [5]
        }
    },
    "attributes/wristband/database/Tomahawk": {
        name: "The Tomahawk",
        type: "Wristband",
        stats: {
            volley: [0, 0, 0, 13, 20, 21, 26, 29, 32, 34, 38, 41, 44]
        }
    },
    "attributes/wristband/database/Gladiator": {
        name: "The Gladiator",
        type: "Wristband",
        stats: {
            volley: [0, 0, 0, 14, 18, 23, 27, 30, 33, 36, 39, 43, 46, 49, 52]
        }
    },
    "attributes/wristband/database/JollyRoger": {
        name: "Jolly Roger",
        type: "Wristband",
        stats: {
            serve: [0, 0, 0, 10, 10, 12, 12, 13, 14, 15, 16, 17, 18],
            volley: [0, 0, 0, 2, 8, 9, 14, 16, 18, 19, 22, 24, 26]
        }
    },
    "attributes/wristband/database/Macaw": {
        name: "The Macaw",
        type: "Wristband",
        stats: {
            serve: [3, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 7, 8],
            volley: [0, 2, 3, 7, 11, 15, 19, 22, 24, 27, 29, 32, 38]
        }
    },
    "attributes/wristband/database/Shield": {
        name: "The Shield",
        type: "Wristband",
        stats: {
            serve: [0, 0, 5, 5, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10],
            volley: [0, 0, 3, 6, 10, 14, 19, 21, 24, 26, 28, 31, 33, 36, 38]
        }
    },
    "attributes/wristband/database/Koi": {
        name: "The Koi",
        type: "Wristband",
        stats: {
            agility: [0, 0, 0, 7, 7, 7, 10, 10, 11, 12, 12, 12, 13, 14, 14],
            volley: [0, 0, 0, 2, 5, 9, 14, 16, 18, 20, 22, 24, 26, 28, 30]
        }
    },
    "attributes/wristband/database/Kodiak": {
        name: "The Kodiak",
        type: "Wristband",
        stats: {
            agility: [0, 0, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6],
            volley: [0, 0, 9, 12, 14, 17, 19, 21, 24, 26, 28, 31, 33, 36, 38]
        }
    },
    "attributes/wristband/database/Rocket": {
        name: "The Rocket",
        type: "Wristband",
        stats: {
            agility: [2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 7, 7, 8],
            volley: [0, 1, 3, 12, 14, 17, 19, 22, 24, 27, 29, 32, 34]
        }
    }

};