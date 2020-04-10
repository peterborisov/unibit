//Using IIFE against init function
(() => {
    let content = document.querySelector('.content'),
        h3 = content.querySelectorAll("h3"),
        toggleBtn = document.getElementById('toggleBtn'),
        colorBtn = document.getElementById('colorBtn');

    let objArr = [
        { "text": 'Why should I read this book?' },
        { "text": 'How to read this book' },
        { "text": 'Sources of this book' },
        { "text": 'Glossary' },
        { "text": 'Conventions' }
    ]

    //Create paragraphs via array of objects and set content text
    for (obj of objArr) {
        let p = document.createElement('p');
        p.innerText = obj.text;
        content.appendChild(p);
    }

    //Set inner text to existing h3 
    for (el of h3) {
        el.innerText = `Text for h3 with ${el.id}`
    }

    //Show/hide content
    toggleBtn.onclick = () =>{
        content.classList.toggle('hide');
    };

    //Change color to all h3 tags
    colorBtn.onclick = () =>{
        for (let h of h3) {
            h.classList.toggle('changeColor');
        }
    };
}
)();
