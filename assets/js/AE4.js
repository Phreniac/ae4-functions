//funciones

//funcion simple

// function sumUp(num1, num2){
//     //validacion num1 y num2 tiene que ser numero
//     console.log('suma: ', num1 + num2);
//     return num1 + num2;
// };
// function myFunction (){
//     let text = null;
//     let num_one = 20;
//     let num_two = 40;

//     //llamar a una validacion
//     let result = sumUp(num_one, num_two);
//     // if(validation(text1)){
//     //     text = text1;
//     // }
//     //hacer algo mas con la variable ya validada

//     console.log('resultado:', result);
// };
// //llamar a la funcion
// myFunction();
// sumUp(20, 20);
function addition(num1, num2){
    // validacion num1 y num2 tiene que ser numero
    console.log('suma: ', num1 + num2);
    return (num1 + num2);
};
function subtraction(num1, num2){
    // validacion num1 y num2 tiene que ser numero
    console.log('suma: ', num1 - num2);
    return (num1 - num2);
};

function validateNumber(num){
    let is_num = isNaN(num);
    console.log('is num', is_num);
    return is_num;
}
function myFunction (type_operation){
    const num1 = document.getElementById('num_1');
    const num2 = document.getElementById('num_2');
    const show_result = document.getElementById('result_operation');
    let result = 0;
    let val1 = parseInt(num1.value);
    let val2 = parseInt(num2.value);
    //validacion de numero
    if(validateNumber(val1) || validateNumber(val2)){
        alert('Ingresa valores numericos');
        return;
    }
    if(type_operation == 'addition'){
        result = addition(val1, val2);
    }
    if(type_operation == 'subtraction'){
        result = subtraction(val1, val2);
    }
    show_result.innerHTML = result;
    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('val1:', val1);
    console.log('val2:', val2);
    console.log('result:', result);
};

const mySecondFunction = function (arg){
    console.log('funcion 2', arg);
};

const myThirdFunction = (arg) => {
    console.log('funcion 2', arg);
};
mySecondFunction('test');