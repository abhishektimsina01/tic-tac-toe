//in order to check the flag whether the box is filled ot not

var is_X_selected = false;
var is_O_selected = false;
var human1_choice;

//accessing the boxes:
//1
const child1 = document.querySelector(".one");
child1.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child1);
    }
});

//2
const child2 = document.querySelector('.two');
child2.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child2);
    }
});

//3
const child3 = document.querySelector('.three');
child3.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child3);
    }
});

// 4
const child4 = document.querySelector('.four');
child4.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child4);
    }
});  

// 5
const child5 = document.querySelector('.five');
child5.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child5);
    }
});

// 6
const child6 = document.querySelector('.six');
child6.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child6);
    }
});

// 7
const child7 = document.querySelector('.seven');
child7.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child7);
    }
});

// 8
const child8 = document.querySelector('.eight');
child8.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child8);
    }
});

// 9
const child9 = document.querySelector('.nine');
child9.addEventListener('click', function(){
    if(is_O_selected || is_X_selected){
        for_img(child9);
    }
});

const rows = [[child1, child2, child3],
              [child4, child5, child6],
              [child7, child8, child9],
              [child1, child4, child7],
              [child2, child5, child8],
              [child3, child6, child9],
              [child1, child5, child9],
              [child3, child5, child7]];

function play(){
    if(!is_O_selected && !is_X_selected){
    const parent_of_s = document.querySelector(".parent");
    parent_of_s.classList.add("opt_cont");
    parent_of_s.classList.remove("parent");
    }
}

function reset(){
    is_X_selected = is_O_selected = false;
    var child_img = document.createElement('img');
    const boxes = document.querySelectorAll(".child");
    boxes.forEach((val)=>{
        if(`${val.firstElementChild}` == `${child_img}`){
            val.removeChild(val.firstElementChild);
        }
    })
    clear_result();
}

function X(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    human1_choice = "X";
    is_X_selected = true;
    is_O_selected = false;
}

function O(){
    const parent_of_s = document.querySelector(".opt_cont");
    parent_of_s.classList.remove("opt_cont");
    parent_of_s.classList.add("parent");
    human1_choice = "O";
    is_O_selected = true;
    is_X_selected = false;
}

function for_img(x){
    var child_img = document.createElement('img');
    x.appendChild(child_img);
    //player-1
    if(is_X_selected  == true && is_O_selected == false){
        child_img.src = `http://127.0.0.1:5500/X.png`
        is_O_selected = true;
        is_X_selected = false;
    }
    //player-2
    else if(is_X_selected == false && is_O_selected == true){
        child_img.src = `http://127.0.0.1:5500/O.png`;
        is_O_selected = false;
        is_X_selected = true;
    }
    check_for_row();
}

async function check_for_row(){
    var count_X = 0;
    var count_O = 0;
    for(var key1 of rows){
        for(var key2 of key1){
            if(key2.firstElementChild){
                if(`${key2.firstElementChild.src}` == `http://127.0.0.1:5500/X.png`){
                    count_X++;
                }
                else if(`${key2.firstElementChild.src}` == `http://127.0.0.1:5500/O.png`){
                    count_O++;
                }

                //checking for count to be 3
                if(count_X == 3){
                    // console.log("Winner is X");
                    // const result1 = document.querySelector(".result");
                    // result1.classList.add("win_or_loose");
                    // result1.classList.remove("result");
                    await pop_up_res(`http://127.0.0.1:5500/X.png`);

                }
                else if(count_O == 3){
                    // console.log("Winner is 0");
                    // const result1 = document.querySelector(".result");
                    // result1.classList.add("win_or_loose");
                    // result1.classList.remove("result");
                    await pop_up_res(`http://127.0.0.1:5500/O.png`);
                }
            }
        }
        count_O = 0;
        count_X = 0;
    }
}

function clear_result(){
            const result1 = document.querySelector(".win_or_loose");
            result1.classList.remove("win_or_loose");
            result1.classList.add("result");
}

//for pop_up message when result appears
function pop_up_res(x){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const result1 = document.querySelector(".result");
            result1.classList.add("win_or_loose");
            result1.classList.remove("result");
            document.querySelector(".res").src= x;
        },500);
    })
}