$( document ).ready(function(){

    $('.form-control').change(onChangeParameter);

    $('.custom-control-input').change(onChangeParameter);

});

function onChangeParameter() {

    let dv = Number($('#v').val());

    let age = Number($('#age').val());

    let power = Number($('#n').val());

    let brand = $('#auto').val();
    
    let face = '';

    if ($('#p1').prop('checked')) {

        face = 'fl';

    } else if ($('#p2').prop('checked')) {

        face = 'ul';

    }
    
    let prizep = false;

    if ($('#load').prop('checked')) {

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

    $('#out').html(sum);
}