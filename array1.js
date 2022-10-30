let elements = [];

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById('submit').onclick = function() {
            
            let x = Number(document.getElementById('x').value);

            let y = Number(document.getElementById('y').value);

            let z = Number(document.getElementById('z').value);

            elements.push(x);

            elements.push(y);

            elements.push(z);

            let h = elements.sort(

                function(a, b) {

                    return a - b;

                }

            );

            let sum = Number(0);

            for (let i=0;i<elements.length;i++) {

                sum += elements[i];

            }

            document.getElementById('elements').innerHTML = JSON.stringify(elements);

            document.getElementById('sum').innerHTML = JSON.stringify(sum);
            
        };

});