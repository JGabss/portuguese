function Validation (value) {
    let num = questions[number_question][2]
    console.log(value)
    console.log(num)
    
    if (value == num) {
        window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/acerto/acerto.html"
    } else {
        sessionStorage.setItem("lifes", `${parseInt(lifes) - 1}`)
        window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/jumpscare/jumpscare.html"
    }

    sessionStorage.setItem("number_question", `${parseInt(number_question) + 1}`)
}

const questions = {
    "1": ["casar-se jovem com uma garota que possui caráter adequado ao seu?", ["SIM", "NÃO", "SOMENTE NO FUTURO"], 0],

    "2": ["Era o meu preferido e companheiro. Só eu lhe dava de comer e ele me acompanhava por toda a parte da casa, por onde eu andasse. De quem o protagonista está falando?", ["Do cachorro amigável", "Do gato chamado Plutão","Do macaquinho"], 1],

    "3": ["Certa noite, de volta a casa, bastante embriagado, de uma das tascas dos subúrbios, supus que o gato evitava minha presença. O que fazer?", ["Pegar o gato", "Deixa-lo em paz", "fazer carinho"], 0]
};

var lifes = sessionStorage.getItem("lifes")
if (lifes == null) {
    lifes = 3
    sessionStorage.setItem("lifes", 3)
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

text.innerHTML = questions[number_question][0]

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

