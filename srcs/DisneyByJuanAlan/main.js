const nav = document.getElementById("nav");
const button1 = document.getElementById('buttonexp1');
const button2 = document.getElementById('buttonexp2');
const button3 = document.getElementById('buttonexp3');
const button4 = document.getElementById('buttonexp4');
const p1 = document.querySelector('#buttonexp1+p');
const p2 = document.querySelector('#buttonexp2+p');
const p3 = document.querySelector('#buttonexp3+p');
const p4 = document.querySelector('#buttonexp4+p');

document.addEventListener('scroll', ()=>{
    let sec1y = document.getElementById("sec1").offsetTop;
    if (window.scrollY > sec1y) {
    nav.classList.add("navbg");
    } else{
        nav.classList.remove("navbg");
    }
});

function changenv(){
    let sec1y = document.getElementById("sec1").offsetTop;
    window.scroll({
        top: sec1y+1,
        behavior: "smooth"
    });
    if (window.scrollY > sec1y) {
        nav.classList.add("navbg");
        } else{
            nav.classList.remove("navbg");
        }
};

function expand1(){
    if (p1.style.display == "none") {
        p1.style.display = 'block';
        p1.style.opacity = '100%';
        button1.classList.add("btnexp");
    }
    else{
        p1.style.display = 'none';
        button1.classList.remove("btnexp");
    }
}

function expand2(){
    if (p2.style.display == "none") {
        p2.style.display = 'block';
        p2.style.opacity = '100%';
        button2.classList.add("btnexp");
    }
    else{
        p2.style.display = 'none';
        button2.classList.remove("btnexp");
    }
}

function expand3(){
    if (p3.style.display == "none") {
        p3.style.display = 'block';
        p3.style.opacity = '100%';
        button3.classList.add("btnexp");
    }
    else{
        p3.style.display = 'none';
        button3.classList.remove("btnexp");
    }
}

function expand4(){
    if (p4.style.display == "none") {
        p4.style.display = 'block';
        p4.style.opacity = '100%';
        button4.classList.add("btnexp");
    }
    else{
        p4.style.display = 'none';
        button4.classList.remove("btnexp");
    }
}