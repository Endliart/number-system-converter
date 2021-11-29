const decimal = document.getElementById('decimal');
const binary = document.getElementById('binary');
const check = document.getElementById('scales');
const check2 = document.getElementById('scales2');

decimal.value = 0;
binary.value = 0;


document.getElementById('calculation').addEventListener('click', () => {
    
    if (check.checked){
        binary.value =  dec2bin(decimal.value);
        
    }
        else if (check2.checked) {
            binary.value = dec2hexadecimal(decimal.value);       } 
        })

function dec2bin(decimal){
    if (decimal > 0) {
        const number = parseInt(decimal);
        return number.toString(2);
    }
}

function dec2hexadecimal(decimal){
    if (decimal > 0) {
        const hexadecimal = parseInt(decimal);
        return hexadecimal.toString(16);
    }
}
