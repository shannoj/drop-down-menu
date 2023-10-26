dropdownButton = document.getElementById('dropdown-button');
menu = document.getElementById('menu');
let droppedState = false;

dropdownButton.addEventListener('click', function(){
    if (!droppedState){
        menu.style.height = '500px';
        dropdownButton.innerHTML = 'x';
        droppedState = !droppedState;
        menu.style.flexDirection = 'column';
        menu.style.justifyContent = 'flex-start'
    } else if (droppedState){
        menu.style.height = '75px';
        dropdownButton.innerHTML = '+';
        droppedState = !droppedState;
        menu.style.flexDirection = 'horizontal';
        menu.style.justifyContent = 'space-between';
    }
})