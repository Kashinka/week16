document.addEventListener("DOMContentLoaded", function(){

    let array1 = ['js', 'css', 'html'];

    let first = array1[0];

    document.getElementById('result1').innerHTML = first;


    let array2 =  [0, 1, false, 2, undefined, '', 3, null];

    array2 = array2.filter(function(element) {

        if (typeof element !== 'number') {

            return false;

        }

        if (element === 0) {

            return false;

        }

        return true;

    });

    document.getElementById('result2').innerHTML = JSON.stringify(array2);

    let array3 = [[1,2], [1,2,3], [1,2,3,4]];

    for (let i = 0; i < array3.length; i++) {

        const element = array3[i];
        
        if (element.length > 3) {

            document.getElementById('result3').innerHTML = JSON.stringify(i);

            break;
        }
    }
});

