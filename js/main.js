var raca = "meioorc";
var furia = 0;
var ataque_selvagem = 0;
var item_cinto = 0;

// ==Atributos==
var agilidade = 12;
var astucia = 4;
var espirito = 8;
var forca = 8;
var vigor = 8;

// ==Perícias==
var lutar = 10;
var persuadir = 0;
var intimidar = 0;

// ==Bônus==
var bonus_forca = 0;
var bonus_resistencia = 0;
var bonus_aparar = 0;
var bonus_ataque = 0;
var bonus_dano = 0;
var bonus_lutar = 0;
var bonus_persuadir = 0;
var bonus_intimidar = 0;

if (raca == "meioorc") {
    bonus_resistencia = bonus_resistencia+1;
    bonus_persuadir = bonus_persuadir-2;
    forca = forca+2;
    intimidar = intimidar+2;
};

if (item_cinto > 0) {
    forca = forca+2;
}

if (furia > 0) {
    forca = forca+2;
    ataque_selvagem = 1;
};

if (ataque_selvagem > 0) {
    var selvagem =  document.getElementById("selvagem");
    selvagem.textContent = " selvagem";
    bonus_ataque = bonus_ataque+2;
    bonus_dano = bonus_dano+2;
    bonus_aparar = bonus_aparar-2;
}

if (forca > 12) {
    bonus_forca = bonus_forca+(forca-12);
    forca = 12
    bonus_dano = bonus_dano+bonus_forca;
};

var resistencia = (vigor/2)+2+bonus_resistencia;

var aparar = (lutar/2)+2+bonus_aparar;



var console_forca = document.getElementById("forca");
var console_bonus_forca = document.getElementById("bonus_forca");
var console_resistencia = document.getElementById("resistencia");
var console_aparar = document.getElementById("aparar");
var console_lutar = document.getElementById("lutar");
var console_bonus_lutar = document.getElementById("bonus_lutar");
var console_dano = document.getElementById("dano");


console_forca.textContent = forca;
console_bonus_forca.textContent = bonus_forca;
console_lutar.textContent = lutar;
console_bonus_lutar.textContent = bonus_lutar;
console_resistencia.textContent = resistencia;
console_aparar.textContent = aparar;
console_dano.textContent = `${forca}D + ${bonus_dano}`

