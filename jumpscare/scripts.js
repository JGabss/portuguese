
var app = document.getElementById('app');

audio = document.getElementById("audio")


var typewriter = new Typewriter(app, {
    loop: false,
    delay: 150
});

typewriter.typeString('Era o me')
.start();

setTimeout(() => {
    app.innerHTML = "<img src='../imgs/OIP.jpeg' alt=''>"
}, 1800)

app.style.marginTop = "5%";

setTimeout(() => {
    window.location.pathname = "C:/Users/joseg/OneDrive/Documentos/IFPB/port/index.html"
}, 5000) 