const options = ["X's" ,"O's"];

function start(){
    
    ask_for_option();
}

function play(){
    console.log("Playing bitch");
}



//for selection
function popup(){

}

const child1 = document.querySelector('.one');
const child2 = document.querySelector('.two');
const child3 = document.querySelector('.three');
const child4 = document.querySelector('.four');
const child5 = document.querySelector('.five');
const child6 = document.querySelector('.six');
const child7 = document.querySelector('.seven');
const child8 = document.querySelector('.eight');
const child9 = document.querySelector('.nine');

function for_user(){

}

function show(){
    const s = document.querySelector(".option");
    s.classList.toggle("option_show");
    const parent_of_s = s.parentElement;
    parent_of_s.classList.toggle("opt_cont");
}

function X(){
    const s = document.querySelector(".option");
    s.classList.remove("option_show");
    const parent_of_s = s.parentElement;
    parent_of_s.classList.remove("opt_cont");
}

function O(){
    const s = document.querySelector(".option");
    s.classList.remove("option_show");
    const parent_of_s = s.parentElement;
    parent_of_s.classList.remove("opt_cont");
}

function close(){
            // const s = document.querySelector(".option_show");
            // s.style.display = none;
    console.log("clicked");
}

