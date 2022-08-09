window.addEventListener('DOMContentLoaded', () =>{
    const h1 = document.getElementById('myhistory');

    h1.innerHTML = '';
    const meta = 'CONHEÇA MINHA HISTÓRIA';

    function escrever(){
        let array = meta.split('').reverse();
        let result = '';
        let interval = setInterval(()=>{if (result.length != array.length) {
            var next = array.pop();
            h1.innerHTML += next;
        } else {clearInterval(interval)}},100);
    }   escrever();
    
//window.scroll(0,0);

});

const skills= [
    '<h3>HTML5</h3> <br> <p>É uma linguagem de marcação utilizada na construção de páginas Web.</p> <br>',
    '<h3>CSS3</h3> <br> <p>É um mecanismo para adicionar estilo a um documento web e estilizar páginas inteiras.</p> <br>',
    '<h3>JavaScript</h3> <br> <p>É uma das linguagens de programação mais usadas no mundo. E, junto com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<h3>ReactJS</h3> <br> <p>O React é uma biblioteca JavaScript para criar interfaces de usuário em páginas web e aplicativos.</p> <br>',
    '<h3>Git</h3> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
    '<h3>Elementor</h3> <br> <p>É um construtor de sites drag-and-drop que constroi sites responsivos e completos em tempo recorde e de maneira fiel.</p> <br>'
];

const secs = [document.getElementById('sec1'),document.getElementById('sec2'),document.getElementById('sec3'),document.getElementById('sec4'),document.getElementById('footer')];

const mobilebtn = document.getElementById('mobilebtn');
const mobilemenu = document.getElementById('mobilelinks');
const linksmobile = document.querySelectorAll('.mobilelinks>a');

const mobileopen = () =>{
    if (mobilemenu.style.left =='-110%') {
        mobilemenu.style.left = '0%';
    } else{
        mobilemenu.style.left = '-110%';
    }
};

linksmobile[0].addEventListener('touchstart', ()=>{
    mobilemenu.style.left = '-110%';
});
linksmobile[1].addEventListener('touchstart', ()=>{
    mobilemenu.style.left = '-110%';
});linksmobile[2].addEventListener('touchstart', ()=>{
    mobilemenu.style.left = '-110%';
});linksmobile[3].addEventListener('touchstart', ()=>{
    mobilemenu.style.left = '-110%';
});linksmobile[4].addEventListener('touchstart', ()=>{
    mobilemenu.style.left = '-110%';
});
window.addEventListener('load',()=>{
    secs[0].style.opacity = '0';
    setInterval(
        secs[0].style.opacity = '1',1000);
});
window.addEventListener('scroll', ()=>{

    let top_of_element0 = secs[0].offsetTop;
    let bottom_of_element0 = secs[0].offsetTop + secs[0].offsetHeight + secs[0].style.marginTop;
    
    let top_of_element1 = secs[1].offsetTop;
    let bottom_of_element1 = secs[1].offsetTop + secs[1].offsetHeight + secs[1].style.marginTop;
    
    let top_of_element2 = secs[2].offsetTop;
    let bottom_of_element2 = secs[2].offsetTop + secs[2].offsetHeight + secs[2].style.marginTop;
    
    let top_of_element3 = secs[3].offsetTop;
    let bottom_of_element3 = secs[3].offsetTop + secs[3].offsetHeight + secs[3].style.marginTop;
    
    let top_of_element4 = secs[4].offsetTop;
    let bottom_of_element4 = secs[4].offsetTop + secs[4].offsetHeight + secs[4].style.marginTop;

    let bottom_of_screen = window.scrollY + window.innerHeight;
    let top_of_screen = window.scrollY;

    if ((bottom_of_screen > top_of_element0) && (top_of_screen < bottom_of_element0)) {
        secs[0].style.opacity = '1';
        secs[0].style.marginLeft = '0';
    } else {
        secs[0].style.opacity = '0';
        secs[0].style.marginLeft = '-100%';
    }
    if ((bottom_of_screen > top_of_element1) && (top_of_screen < bottom_of_element1)) {
        secs[1].style.opacity = '1';
        secs[1].style.marginLeft = '0';
    } else {
        secs[1].style.opacity = '0';
        secs[1].style.marginLeft = '-100%';
    }
    if ((bottom_of_screen > top_of_element2) && (top_of_screen < bottom_of_element2)) {
        secs[2].style.opacity = '1';
        secs[2].style.marginLeft = '0';
    } else {
        secs[2].style.opacity = '0';
        secs[2].style.marginLeft = '-100%';
    }

    if ((bottom_of_screen > top_of_element3) && (top_of_screen < bottom_of_element3)) {
        secs[3].style.opacity = '1';
        secs[3].style.marginLeft = '0';
    } else {
        secs[3].style.opacity = '0';
        secs[3].style.marginLeft = '-100%';
    }

    if ((bottom_of_screen > top_of_element4) && (top_of_screen < bottom_of_element4)) {
        secs[4].style.opacity = '1';
        secs[4].style.marginLeft = '0';
    } else {
        secs[4].style.opacity = '0';
        secs[4].style.marginLeft = '-100%';
    }
const positionSec2 = document.getElementById('sec2').offsetTop;
if (window.scrollY > positionSec2-150) {
    document.getElementById('nav').classList.add('navgolden');
} else {
    document.getElementById('nav').classList.remove('navgolden');
}
});

const itemsrc1 = () =>{
    window.open("srcs/PrevisãodoTempo/index.html");
};

const itemsrc2 = () =>{
    window.open("srcs/DisneyByJuanAlan/index.html");
};

const itemsrc3 = () =>{
    window.open("srcs/Form/index.html");
};

const css = () =>{
    document.getElementById('cssICON').style.transform = 'scale(1.1)';
    document.querySelector('#cssICON>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[1];
    setTimeout(() => {
        document.getElementById('cssICON').style.transform = 'scale(1)';
        document.querySelector('#cssICON>img').style.filter = 'grayscale(80%)';
      }, 1000);
};

const elementor = () =>{
    document.getElementById('Elementor').style.transform = 'scale(1.1)';
    document.querySelector('#Elementor>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[5];
    setTimeout(() => {
        document.getElementById('Elementor').style.transform = 'scale(1)';
        document.querySelector('#Elementor>img').style.filter = 'grayscale(80%)';
      }, 1000);
};

const html = () =>{
    document.getElementById('htmlICON').style.transform = 'scale(1.1)';
    document.querySelector('#htmlICON>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[0];
    setTimeout(() => {
        document.getElementById('htmlICON').style.transform = 'scale(1)';
        document.querySelector('#htmlICON>img').style.filter = 'grayscale(80%)';

      }, 1000);
};


const react = () =>{
    document.getElementById('reactICON').style.transform = 'scale(1.1)';
    document.querySelector('#reactICON>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[3];
    setTimeout(() => {
        document.getElementById('reactICON').style.transform = 'scale(1)';
        document.querySelector('#reactICON>img').style.filter = 'grayscale(80%)';
    
      }, 1000);
};

const git = () =>{
    document.getElementById('GitICON').style.transform = 'scale(1.1)';
    document.querySelector('#GitICON>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[4];
    setTimeout(() => {
        document.getElementById('GitICON').style.transform = 'scale(1)';
        document.querySelector('#GitICON>img').style.filter = 'grayscale(80%)';
      }, 1000);
};

const java = () =>{
    document.getElementById('javaICON').style.transform = 'scale(1.1)';
    document.querySelector('#javaICON>img').style.filter = 'grayscale(0%)';
    document.getElementById('texthsc2').innerHTML = skills[2];
    setTimeout(() => {
        document.getElementById('javaICON').style.transform = 'scale(1)';
        document.querySelector('#javaICON>img').style.filter = 'grayscale(80%)';

  }, 1000);
};
