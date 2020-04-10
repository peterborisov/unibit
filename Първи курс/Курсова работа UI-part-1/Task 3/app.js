let init = () => {
    let images = {
        "0": "url(./assets/1.png)",
        "1": "url(./assets/2.jpg)",
        "2": "url(./assets/3.jpg)",
        "3": "url(./assets/1.png)",
        "4": "url(./assets/2.jpg)"
    }

    let image = document.getElementsByClassName('image')[0];
    let switcher = document.getElementsByClassName('switcher');
    Object.entries(switcher).map((object) => {
        object[1].onclick = () => {
            image.style.backgroundImage = images[object[0]];
        }
    });
};

init();