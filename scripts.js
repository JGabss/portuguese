function Validation (value) {
    let num = questions[number_question][2]
    console.log(value)
    console.log(num)
    
    if (value == num) {
        window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/acerto/acerto.html"
        sessionStorage.setItem("number_question", `${parseInt(number_question) + 1}`)
    } else {
        sessionStorage.setItem("lifes", `${parseInt(lifes) - 1}`)
        window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/jumpscare/jumpscare.html"
    }

}

const questions = {
    "1": ["casar-se jovem com uma garota que possui caráter adequado ao seu?", ["SIM", "NÃO", "SOMENTE NO FUTURO"], 0],

    "2": ["'Era o meu preferido e companheiro. Só eu lhe dava de comer e ele me acompanhava por toda a parte da casa, por onde eu andasse'. De quem o protagonista está falando?", ["Do cachorro amigável", "Do gato chamado Plutão","Do macaquinho"], 1],

    "3": ["Certa noite, de volta a casa, bastante embriagado, de uma das tascas dos subúrbios, supus que o gato evitava minha presença. O que fazer?", ["Pegar o gato", "Deixa-lo em paz", "fazer carinho"], 0],

    "4": ["Você está disposto a cometer um pecado mortal que condenará sua alma?", ["Não", "Sim", "Deus me livre"], 1],
    "5": ["voltar na casa para ver os escombros?",  ["Outro dia", "Sim", "Não"], 1],
    "6": ["Em uma noite, ele saiu e avistou, em cima de barris, um gato preto e grande, tão grande quanto Plutão.", ["Ignora-lo", "Chuta-lo", "Leva-lo para casa"], 2],
    "7": ['"Certo dia ela me acompanhou, para alguma tarefa doméstica, até a adega do velho prédio que nossa pobreza nos compelira a ter de habitar. O gato desceu os degraus seguindo-me e quase me lançou ao chão." O que fazer ?', ["Prender o gato na coleira",  "Continuar andando", "Dar golpe fatal"], 2],
    "8": ["como enterrar um corpo?", ["Parti-lo em pedaços e queimar", "empareda-lo", "enterrar no jardim"], 1],
    "9": ["falar com os policiais antes deles irem embora ?", ["Não, Sim, Oferecer um café"], 0]

};

var lifes = sessionStorage.getItem("lifes")
if (lifes == null) {
    lifes = 2
    sessionStorage.setItem("lifes", 2)
} else if (lifes == 0) {
    window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/endgame.html"
}

var cats = document.getElementById("cats")
imgs = ''
for (var i = 0; i < parseInt(lifes); i++) {
    imgs += '<img src="imgs/gato-preto.png" alt="" width="51.2" height="51.2"></img>'
}

cats.innerHTML = imgs

var text = document.getElementById("question")
var buttonClick1 = document.getElementById("buttom-sub1")
var buttonClick2 = document.getElementById("buttom-sub2")
var buttonClick3 = document.getElementById("buttom-sub3")
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

var number_question = sessionStorage.getItem("number_question");

if (number_question == null) {
    number_question = "1"
}
try {
    text.innerHTML = questions[number_question][0]
} catch (e) {
    window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/endgame.html"
}

a1.innerHTML = questions[number_question][1][0]
a2.innerHTML = questions[number_question][1][1]
a3.innerHTML = questions[number_question][1][2]

buttonClick1.addEventListener("click", () => {
    Validation(buttonClick1.value)
})

buttonClick2.addEventListener("click", () => {
    Validation(buttonClick2.value)
})

buttonClick3.addEventListener("click", () => {
    Validation(buttonClick3.value)
})

