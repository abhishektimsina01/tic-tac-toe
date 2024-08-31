//in order to check the flag whether the box is filled ot not
const box = [1,2,3,4,5,6,7,8,9];

var is_selected = false;
function for_cpu(human1_choice){ 
    if(human1_choice == "X"){
        var cpu_choice = "O";
        console.log(`you choose ${cpu_choice}.jpg`);
    }
    else{
        var cpu_choice = "X";
        console.log(`you choose ${cpu_choice}.jpg`);
    }
}

//accessing the boxes:
const child1 = document.querySelector('.one');
child1.addEventListener('click', for_img)

const child2 = document.querySelector('.two');
child2.addEventListener('click', for_img);

const child3 = document.querySelector('.three');
child3.addEventListener('click', for_img);

const child4 = document.querySelector('.four');
child4.addEventListener('click', for_img);  

const child5 = document.querySelector('.five');
child5.addEventListener('click', for_img);

const child6 = document.querySelector('.six');
child6.addEventListener('click', for_img);

const child7 = document.querySelector('.seven');
child7.addEventListener('click', for_img);

const child8 = document.querySelector('.eight');
child8.addEventListener('click', for_img);

const child9 = document.querySelector('.nine');
child9.addEventListener('click', for_img);

function clear(){
    is_selected = false;
    choice = undefined;
}

function play(){
    const parent_of_s = document.querySelector(".parent");
    parent_of_s.classList.add("opt_cont");
    parent_of_s.classList.remove("parent");
    clear();
    console.log(is_selected);   
}

function X(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    var human1_choice = "X";
    var is_selected = true;
    console.log(is_selected);
    console.log(`you choose ${human1_choice}.jpg`);
    for_cpu();
}

function O(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    var human1_choice = "O";
    var is_selected = true;
    for_cpu(human1_choice);
    console.log(`you choose ${human1_choice}.jpg`);
}

function for_img(){
    // var child_img = document.createElement('img');
    // x.appendChild(child_img);
    // y.src = `${human1_choice}.jpg`
    console.log("clicked");  
}
