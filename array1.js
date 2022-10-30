let elements = [];

$(document).ready(    
    function(){
        $('#submit').click(
            function() {
                let x = Number($('#x').val());
                let y = Number($('#y').val());
                let z = Number($('#z').val());

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
                    sum+=elements[i];
                }

                $('#elements').html(JSON.stringify(elements));
                $('#sum').html(sum);
            }
        );
    }
);