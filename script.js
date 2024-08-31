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

function play(){
    const parent_of_s = document.querySelector(".parent");
    parent_of_s.classList.add("opt_cont");
    parent_of_s.classList.remove("parent");
}

function X(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
}

function O(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
}

