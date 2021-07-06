let screen = document.getElementById('screen');
let result=document.getElementById('calc')
buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '×') {
            buttonText = '*';
            screen.value += buttonText;
        }
        else if (buttonText == 'C') {
            result.innerHTML="";
            screen.value = "";
        }
        else if (buttonText == '=') {
            result.innerHTML=screen.value;
            screen.value = eval(screen.value);
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screen.value += buttonText;
        }
        else if (buttonText == '+') {
            buttonText = '+';
            screen.value += buttonText;
        }
        else if (buttonText == '−') {
            buttonText = '-';
            screen.value += buttonText;
        }
        else if (buttonText == '⋅') {
            buttonText='.';
            screen.value+=buttonText;
        }
        else {
            screen.value += buttonText;
        }

    })
}