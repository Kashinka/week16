document.addEventListener("DOMContentLoaded", function(){

    let controls = document.getElementsByClassName('form-control');

    for (let i = 0; i < controls.length; i++) {

        controls[i].onchange = onChangeParameter;

    }

    controls = document.getElementsByClassName('custom-control-input');

    for (let i = 0; i < controls.length; i++) {

        controls[i].onchange = onChangeParameter;

    }
});

function onChangeParameter() {


    document.getElementById('v').value;

    let dv = Number(document.getElementById('v').value);

    let age = Number(document.getElementById('age').value);

    let power = Number(document.getElementById('n').value);

    let brand = document.getElementById('auto').value;
    
    let face = '';

    
    if (document.getElementById('result1').checked) {

        face = 'fl';

    } else if (document.getElementById('result2').checked) {

        face = 'ul';

    }
    
    let prizep = false;

    if (document.getElementById('load').checked) {

        prizep = true;

    }

    let sum = 0;

    sum += dv * 15;

    sum += age * 7;

    sum += power * 11;

    if (brand === 'brand') {

        sum += 1000;

    }
    if (brand === 'ford') {

        sum += 700;

    }

    if (face === 'fl') {

        sum += 100;

    }

    if (face === 'ul') {

        sum += 250;

    }

    if (prizep) {

        sum += 1000;

    }

    document.getElementById('out').innerHTML = JSON.stringify(sum);

}