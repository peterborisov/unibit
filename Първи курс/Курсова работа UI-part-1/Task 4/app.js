function init() {
    //DOM elements
    //String
    let stringInput = document.getElementById('stringInput'),
        searchBtn = document.getElementById('searchBtn'),
        searchStr = document.getElementById('searchStr'),
        replaceBtn = document.getElementById('replaceBtn'),
        replaceStr = document.getElementById('replaceStr'),
        replaceStrWith = document.getElementById('replaceStrWith'),
        sortBtn = document.getElementById('sortBtn');
    //Array
    let arrInput = document.getElementById('arrInput'),
        arrAdd = document.getElementById('arrAdd'),
        arrAddBtn = document.getElementById('arrAddBtn'),
        arrRemoveInp = document.getElementById('arrRemoveInp'),
        arrRemoveBtn = document.getElementById('arrRemoveBtn'),
        removeDublicatedBtn = document.getElementById('removeDublicatedBtn');

    //Expresions
    let searchString = () => {
        let a = stringInput.value.split(/[^A-Za-z]/);
        let count = 0;
        a.forEach(el => {
            if (el === searchStr.value) {
                count++;
            }
        });

        document.getElementById("searchResult").innerHTML = `String "${searchStr.value}" is in text ${count} times`;
    }

    let replaceString = () => {
        let regex = new RegExp(replaceStr.value, 'g');
        let newString = stringInput.value.toString().replace(regex, replaceStrWith.value);
        stringInput.value = newString;
        document.getElementById("replaceResult").innerHTML = newString;
    }

    let sorting = () => {
        let radios = document.getElementsByName('sort');
        let asc = stringInput.value.split(' ').sort((a, b) => a.localeCompare(b)).join(' ');
        let des = stringInput.value.split(' ').sort((a, b) => b.localeCompare(a)).join(' ');

        if (radios[0].checked) {
            stringInput.value = asc;
        } else if (radios[1].checked) {
            stringInput.value = des;
        }
    }

    let arrPush = () => {
        let splitedValue = arrInput.value.split(',');
        let newStr = arrAdd.value;
        splitedValue.push(newStr);
        arrInput.value = splitedValue;
    }

    let arrRemove = () => {
        let splitedValue = arrInput.value.split(',');
        let valueToRemove = arrRemoveInp.value;
        const newArr = splitedValue.filter(item => item !== valueToRemove)
        arrInput.value = newArr;
    }

    let removeDublicatedEl = () => {
        let splitedValue = arrInput.value.split(',');
        let set = new Set(splitedValue);
        arrInput.value = Array.from(set);
    }

    //Event Listeners
    searchBtn.onclick = () => { searchString() }
    replaceBtn.onclick = () => { replaceString() }
    sortBtn.onclick = () => { sorting() }
    arrAddBtn.onclick = () => { arrPush() }
    arrRemoveBtn.onclick = () => { arrRemove() }
    removeDublicatedBtn.onclick = () => { removeDublicatedEl() }
}

init();