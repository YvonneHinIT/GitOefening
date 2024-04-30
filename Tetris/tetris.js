"use strict"

addEventListener("keydown", spatie);
addEventListener("keydown", pijltje);

const tetrisBlok1_1 =
[
    ['X','O','O',],
    ['X','X','O',],
    ['O','X','O',]
];

const tetrisBlok1_2 =
[
    ['O','X','X',],
    ['X','X','O',],
    ['O','O','O',]
];

const tetrisBlok1_3 =
[
    ['O','X','O'],
    ['O','X','X'],
    ['O','O','X']
];

const tetrisBlok1_4 =
[
    ['O','O','O'],
    ['O','X','X'],
    ['X','X','O']
];


const tetrisBlok2_1 =
[
    ['X','O','O',],
    ['X','O','O',],
    ['X','X','O',]
];

const tetrisBlok2_2 =
[
    ['X','X','X',],
    ['X','O','O',],
    ['O','O','O',]
];

const tetrisBlok2_3 =
[
    ['O','X','X'],
    ['O','O','X'],
    ['O','O','X']
];

const tetrisBlok2_4 =
[
    ['O','O','O'],
    ['O','O','X'],
    ['X','X','X']
];


const tetrisBlok3_1 =
[
    ['X','O','O','O'],
    ['X','O','O','O'],
    ['X','O','O','O'],
    ['X','O','O','O']
];

const tetrisBlok3_2 =
[
    ['O','O','O','O'],
    ['X','X','X','X'],
    ['O','O','O','O'],
    ['O','O','O','O']
];


const tetrisBlok4_1 =
[
    ['O','X','O'],
    ['X','X','X'],
    ['O','O','O']
];
const tetrisBlok4_2 =
[
    ['O','O','O'],
    ['X','X','X'],
    ['O','X','O']
];

const tetrisBlok5_1 =
[
    ['O','O','X','O','O'],
    ['O','O','X','O','O'],
    ['X','X','X','X','X'],
    ['O','O','X','O','O'],
    ['O','O','X','O','O']
]



const tetrisShape1 = 
[   
    tetrisBlok1_1, 
    tetrisBlok1_2, 
    tetrisBlok1_3, 
    tetrisBlok1_4
];

const tetrisShape2 =
[  
    tetrisBlok2_1,
    tetrisBlok2_2,
    tetrisBlok2_3,
    tetrisBlok2_4
];

const tetrisShape3 =
[
    tetrisBlok3_1,
    tetrisBlok3_2
];

const tetrisShape4 =
[
    tetrisBlok4_1,
    tetrisBlok4_2
];

const tetrisShape5 =
[
    tetrisBlok5_1
];


const tetrisBlok = 
[
    tetrisShape1, 
    tetrisShape2, 
    tetrisShape3, 
    tetrisShape4,
    tetrisShape5
];


const tetrisKleur = 
[ 
    "orange", 
    "purple", 
    "blue",  
    "green", 
    "yellow", 
    "red"
];

//Maakt table en vult kleur blokjes in.
function tetris (tetrisBlok) {
    const tableElement = document.getElementById("table");
    tableElement.remove();

    const tableMake = document.createElement("table");
    tableMake.id = "table";
    const parentTable = document.getElementById("tetris");
    parentTable.appendChild(tableMake);
    
    let count = 0;
   
    for (let shape = 0; shape < tetrisBlok.length; shape++) {
        const tableRow = document.createElement("tr");
        const tableElement = document.getElementById("table");
        tableElement.appendChild(tableRow); 

        console.log(tetrisBlok[shape]);

        for (let blok = 0; blok < tetrisBlok[shape].length; blok++) {
            const tableData = document.createElement("td");
            tableElement.appendChild(tableData);

            const tetrisCell = tableElement.getElementsByTagName("td");
            if ((tetrisBlok[shape][blok]) === 'X') {
                if (tetrisBlokArray == tetrisBlokArray) {
                    tetrisCell[count].style.background = tetrisKleur[tetrisBlokArray];  
                }
            }

            if ((tetrisBlok[shape][blok]) === 'O') {
                tetrisCell[count].style.background = "white";       
            }
            
            count++;           
        }
    }        
};

let tetrisBlokArray = tetrisBlok.length;
let tetrisShapeArray = 0;
 
function spatie (event) {
    
    if (event.key == " ") {
        tetrisBlokArray++;

            if (tetrisBlokArray == tetrisBlok.length ||
                tetrisBlokArray > tetrisBlok.length) {
                    tetrisBlokArray = 0; 
            }

            if (tetrisShapeArray == tetrisBlok[tetrisBlokArray].length ||
                tetrisShapeArray > tetrisBlok[tetrisBlokArray].length) {
                tetrisShapeArray = 0; 
            }

            bigTetris (tetrisBlokArray,tetrisShapeArray);        
    }
};


function pijltje (event) {
    
    if (event.key == "ArrowRight") { 
        tetrisShapeArray++;

        if (tetrisShapeArray == tetrisBlok[tetrisBlokArray].length ||
            tetrisShapeArray > tetrisBlok[tetrisBlokArray].length) {
            tetrisShapeArray = 0;
        }

        bigTetris (tetrisBlokArray,tetrisShapeArray);
        return;
    }

    if (event.key == "ArrowLeft") {
        tetrisShapeArray--;

        if (tetrisShapeArray < 0) {
            tetrisShapeArray = tetrisBlok[tetrisBlokArray].length-1;
        }

        bigTetris (tetrisBlokArray,tetrisShapeArray);
    }
};

function bigTetris (tetrisBlokArray,tetrisShapeArray) {
    console.log("tetrisBlok"+(tetrisBlokArray+1)+"_"+(tetrisShapeArray+1));
    tetris(tetrisBlok[tetrisBlokArray][tetrisShapeArray]);
};