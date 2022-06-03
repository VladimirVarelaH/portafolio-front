const my_span = document.getElementById('span');
        
async function write(str){
    my_span.innerHTML="";

    sub_span = document.createElement('span');
    sub_span.innerText = '_';
    sub_span.id = 'sub_span';

    my_span.appendChild(sub_span);

    // console.log(sub_span)
    for(let i=0;i<str.length;i++){
        // console.log(str[i]);
        my_span.removeChild(sub_span)
        // console.log(my_span);
        // my_span.innerHTML=my_span.innerHTML.slice(0,my_span.innerHTML.length-1);
        my_span.innerText+=str[i];
        my_span.appendChild(sub_span);
        await new Promise(r => setTimeout(r,150));
    }

    // return('Done')
    // console.log('Working');

}
async function writeFromArray(){
    const arr = ['Backend-Developer', 'Frontend-Developer', 'FullStack-Developer'];
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i]);
        await write(arr[i]);
        // my_span.innerHTML=my_span.innerHTML.slice(0,my_span.innerHTML.length-1);
        await new Promise(r => setTimeout(r,350));
    }
    sub_span.className='spann'
}

writeFromArray();


let card = document.getElementById('first').getBoundingClientRect();
let head = document.getElementById('hhh');
head.style.marginLeft=card.x+'px';

const child = [...head.childNodes][1];
child.style.top = (head.offsetHeight/2)+2+'px';
child.style.left = 0;

window.addEventListener('resize', function(){
    card = document.getElementById('first').getBoundingClientRect();
    
    head.style.marginLeft=card.x+'px';
});

let title=document.getElementById('title');
let insput = document.getElementById('first_2').getBoundingClientRect();
title.style.marginLeft=insput.x+'px';

const child_2 = [...title.childNodes][1];
child_2.style.top = (title.offsetHeight/2)+2+'px';
child_2.style.left = 0;

window.addEventListener('resize', function(){
    insput = document.getElementById('first_2').getBoundingClientRect();
    
    title.style.marginLeft=insput.x+'px';
});