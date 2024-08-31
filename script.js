const box = [1,2,3,4,5,6,7,8,9];

function for_cpu(){ 
    console.log("The choice of cou was", cpu_choice);
}

//accessing the boxes
function one(){
    const child1 = document.querySelector('.one');
    let child1_img = document.createElement('img');
    child1.appendChild(child1_img);
    child1_img.src = 'X.png'
}
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
    // clear();
    for_cpu();
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
