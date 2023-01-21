const context = [
    "Casou-se ainda moço, Observando suas predileções pelos animais domésticos, não perdia ela a oportunidade de procurar os das espécies mais agradáveis. Tínhamos pássaros, peixes dourados, um lindo cão, coelhos, um macaquinho e um gato.",

    "Este era um belo animal, notavelmente grande, todo preto e de uma sagacidade de espantar.",
    
    "Pegou o gato, arrancou o olho do mesmo. Daí em diante o animal começou a evitar o dono. Um espírito de perversidade e estupidez, junto com a sensação de que não precisava ter feito aquilo, tomou de conta do protagonista.",
    "Enforcou o gato e, por consequência de seu ato, sua casa pegou fogo na noite do acontecido, levando toda a fortuna do personagem.",

    "Enforcou o gato e, por consequência de seu ato, sua casa pegou fogo na noite do acontecido, levando toda a fortuna do personagem.",
    
    "tem uma multidão em volta de uma parede que permaneceu de pé, essa parede era frágil e fina, mas nela contia uma imagem perfeitamente formado da corda em volta do pescoço de um gato. Nesse momento, o personagem faz uma relação de causa e efeito. Esse fato ficou o atormentando durante meses, e fez com que ele sentisse um sentimento parecido com remorso, além de sentir falta do gato.",

    `O gato se familiarizou rápido com a mulher. "De minha parte, depressa comecei a sentir despertar-se em mim antipatia 
    contra ele. Isto era, precisamente, o reverso do que eu tinha previsto, mas -
    não sei como ou por que sua evidente amizade por mim antes me desgostava 
    e aborrecia. Lenta e gradativamente esses sentimentos de desgosto e 
    aborrecimento se transformaram na amargura do ódio. Evitava o animal; certa 
    sensação de vergonha e a lembrança de minha antiga crueldade impediam-me 
    de maltratá-lo fisicamente.
    ele ficou puto com o gato novo, pois descobriu que ele também foi privado de 
    um dos olhos, assim com plutão. Ele não estava conseguindo nem dormir, isso 
    fez o sentimento de ódio crescer e tomar totalmente de conta do protagonista`,

    `Golpe detido pela esposa, fazendo com que o protagonista desse um golpe de 
    machado na cabeça da mulher, matando-a imediatamente.`,

    `Depois disso, o gato sumiu e ele dormiu tranquilo, coisa que não conseguia 
    fazer desde que o mesmo tinha chegado em sua casa. Após 4 dias, chegaram 
    policiais lá e, quando iam saindo sem encontrar nada...`,

    `após isso, o protagonista se gaba da qualidade das paredes e dá um soco, logo 
    depois, ouve-se um grunhido da parede, os policiais derrubaram aquela parte 
    e lá estava a mulher morta com resquícios de sangue e o gato estava com ela. 
    Por fim, o assassino do gato preto foi preso.`
]

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 50
});

var number_question = parseInt(sessionStorage.getItem("number_question"))
typewriter.typeString(context[number_question - 2])
.start();


