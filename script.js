//in order to check the flag whether the box is filled ot not

var is_selected = false;
var human1_choice;

//accessing the boxes:
//1
const child1 = document.querySelector(".one");
child1.addEventListener('click', function(){
    if(is_selected){
        for_img(child1);
    }
});

//2
const child2 = document.querySelector('.two');
child2.addEventListener('click', function(){
    if(is_selected){
        for_img(child2);
    }
});

//3
const child3 = document.querySelector('.three');
child3.addEventListener('click', function(){
    if(is_selected){
        for_img(child3);
    }
});

// 4
const child4 = document.querySelector('.four');
child4.addEventListener('click', function(){
    if(is_selected){
        for_img(child4);
    }
});  

// 5
const child5 = document.querySelector('.five');
child5.addEventListener('click', function(){
    if(is_selected){
        for_img(child5);
    }
});

// 6
const child6 = document.querySelector('.six');
child6.addEventListener('click', function(){
    if(is_selected){
        for_img(child6);
    }
});

// 7
const child7 = document.querySelector('.seven');
child7.addEventListener('click', function(){
    if(is_selected){
        for_img(child7);
    }
});

// 8
const child8 = document.querySelector('.eight');
child8.addEventListener('click', function(){
    if(is_selected){
        for_img(child8);
    }
});

// 9
const child9 = document.querySelector('.nine');
child9.addEventListener('click', function(){
    if(is_selected){
        for_img(child9);
    }
});

function clear(){
    is_selected = false;
    choice = undefined;
}

function play(){
    if(!is_selected){
    const parent_of_s = document.querySelector(".parent");
    parent_of_s.classList.add("opt_cont");
    parent_of_s.classList.remove("parent");
    }
}

function reset(){
    is_selected = false;
    var child_img = document.createElement('img');
    const boxes = document.querySelectorAll(".child");
    boxes.forEach((val)=>{
        if(`${val.firstElementChild}` == `${child_img}`){
            val.removeChild(val.firstElementChild);
        }
    })
}

function X(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    human1_choice = "X";
    is_selected = true;
}

function O(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    human1_choice = "O";
    is_selected = true;
}

function for_img(x){
    var child_img = document.createElement('img');
    x.appendChild(child_img);
    child_img.src = `http://127.0.0.1:5500/${human1_choice}.png`
    console.log(child_img);
}
