const options = ["X" ,"O"];


//accessing the boxes
const child1 = document.querySelector('.one');
const child2 = document.querySelector('.two');
const child3 = document.querySelector('.three');
const child4 = document.querySelector('.four');
const child5 = document.querySelector('.five');
const child6 = document.querySelector('.six');
const child7 = document.querySelector('.seven');
const child8 = document.querySelector('.eight');
const child9 = document.querySelector('.nine');

function clear(){
    choice = undefined;
    
}

function play(){
    const parent_of_s = document.querySelector(".parent");
    parent_of_s.classList.add("opt_cont");
    parent_of_s.classList.remove("parent");
    clear();
}

function X(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    var choice = "X";
    console.log("you choose X");
}

function O(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    var choice = "O";
    console.log("you choose O");
}

