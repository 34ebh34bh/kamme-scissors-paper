const random = Math.floor(Math.random() * 100) + 1;

let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');

let out1 = document.getElementById('out1');
let out2 = document.getElementById('out2');

btn1.onclick = function() {
    const random = Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 30) {
        out1.innerHTML = "Ножницы";
        out1.style.color = 'red';
    } else if (random > 40) {
        out1.innerHTML = "Камень";
        out1.style.color = 'green';
    } else {
        out1.innerHTML = "Бумага";
        out1.style.color = 'blue'
    }
}

btn2.onclick = function() {
    const random = Math.floor(Math.random() * 100);
    console.log(random);
    if(random < 30) {
        out2.innerHTML = "Ножницы";
        out2.style.color = 'red';
    } else if (random > 30) {
        out2.innerHTML = "Камень";
        out2.style.color = 'green';
    } else {
        out2.innerHTML = "Бумага";
        out2.style.color = 'blue'
    }
}
