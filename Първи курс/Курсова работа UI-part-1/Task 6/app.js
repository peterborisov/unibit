function init() {
    let addLi = document.getElementById('addLiBtn');
    let list = document.getElementById('list');
    let count = 1;
    let showParent = document.getElementById('showParentBtn');
    let parentEl = document.getElementById('parentEl');
    let pauseBtn = document.getElementById('pauseBtn');

    let createLi = () => {
        let li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML = count;
        count++;
    }

    let getParent = () => {
        let parent = list.parentNode.nodeName;
        let childEl = list.childNodes.length;
        parentEl.innerHTML = `Parent element is ${parent} and have ${childEl} elements(1 'ul' and ${childEl - 1} 'li')`;
    }

    let pauseEl = () => {
        list.lastChild.innerHTML = `Pause`;
    }

    addLi.onclick = () => { createLi() }
    showParent.onclick = () => { getParent() }
    pauseBtn.onclick = () => { pauseEl() }
}

init();