$( document ).ready(function() {
    let btn = document.querySelector('#btn'),
        out = document.querySelector('#out'),
        weight =document.querySelector('#weight'),
        vol = document.querySelector('#vol'),
        voll = document.querySelector('#voll'),
        length = document.querySelector('#length')
        load = document.querySelector('#load'),
        del = document.querySelector('#del'),
        frag = document.querySelector('#frag'),
        range = document.querySelector('#range'),
        weight = document.querySelector('#weight'),
        length = document.querySelector('#length'),
        voll = document.querySelector('#voll'),
        vol = document.querySelector('#vol'),
        kg = 5.5,
        kub = 3500,
        km = 2;
    
    
    $('.minpl,.custom-control-input,.custom-range,.form-control,.form-control').click(function() {
    /*Находим input*/
    $input = $(this).parent().find('.mtr');
    let qty = Number($input.val());
    /*Передаем функции подсчета, обновления*/
    if (isNaN(qty)) qty = 0;
    /*
    if ($(this).hasClass('plus')) {
        if (qty == 0) {
        qty = $input.data('min');
        } else {
        qty += $input.data('step');
        }
    } else {
        qty -= $input.data('step');
    }
        let min = $input.data('min');
        if (qty >= min)  {
            $input.val(qty).trigger('input');
        } else {
        $input.val(0).trigger('input');
    }*/
    updateCalc($input);
    });
    function updateCalc($input) {
    {
    if (load.checked){ 
        load.value = 10000; }
            else 
            {
        load.value = 0;
        }
        if (del.checked){ 
        del.value = -70000; }
            else 
            {
        del.value = 0;
        }
        if (frag.checked){ 
        frag.value = 300; }
            else 
            {
        frag.value = 0;
        }
        if (fragg.checked){ 
        fragg.value = 400; }
            else 
            {
        fragg.value = 0;
        }
        if (load1.checked){ 
        load1.value = 50000; }
            else 
            {
        load1.value = 0;
        }
        if (del1.checked){ 
        del1.value = 0; }
            else 
            {
        del1.value = 0;
        }
        if (frag1.checked){ 
        frag1.value = 300; }
            else 
            {
        frag1.value = 0;
        }
        if (p1.checked){ 
        p1.value = 10000; }
            else 
            {
        p1.value = 0;
        }
        if (p2.checked){ 
        p2.value = -70000; }
            else 
            {
        p2.value = 0;
        }
    
    let sum = ((((Number(weight.value) * Number(length.value))+(((2 * Number(weight.value))+(2 * Number(length.value))) * Number(vol.value))) *
    Number(voll.value) +
    Number(load.value) + Number(del.value) + Number(frag.value) + Number(fragg.value) + 
    Number(load1.value) + Number(del1.value) + Number(frag1.value) + Number(p1.value) + Number(p2.value);
    out.innerHTML = sum;
    }
    }
    });