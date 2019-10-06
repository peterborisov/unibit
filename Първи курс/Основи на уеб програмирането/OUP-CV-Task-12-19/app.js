let title = document.getElementsByClassName('title');

function animatedTitle(){
    this.style.background = 'lightgray';
    this.style.color = 'black';
    this.style.boxShadow = '10px 20px 30px blue';
    this.style.padding = '0 40%';
}

title[0].addEventListener('click', animatedTitle)
