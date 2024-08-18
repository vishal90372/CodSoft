const input = document.getElementById('input-box');
const buttonNode = document.querySelectorAll('button');
const arrayOfbutton = Array.from(buttonNode);
let inputContent = '';
arrayOfbutton.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML == 'AC'){
            inputContent = '';
            input.value = inputContent;
        }else if(event.target.innerHTML == 'DEL'){
            inputContent = inputContent.substring(0,inputContent.length-1);
            input.value = inputContent;
        }else if(event.target.innerHTML == '='){
            inputContent = eval(inputContent);
            input.value = inputContent;
        }else{
            inputContent += event.target.innerHTML;
            input.value = inputContent;
        }
    })
})