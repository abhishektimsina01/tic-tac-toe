const options = ["X's" ,"O's"];
function ask_for_option(){
    choice  = prompt("do u want to choose X or O");
    if(choice == "X"){
        image = ''
    }
}
function start(){
    ask_for_option();
}

//for child one image
const child1_img = document.querySelector('one');
child1_img.src = `${image}.jpg`
