let coins = 10345500;

setInterval(function() {
    let elem = document.getElementById('embed-acs');
    coins +=  Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
    elem.textContent = coins + " Ac's em estoque!";
}, 1000);
