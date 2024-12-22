const height = document.querySelector('#first1');
height.addEventListener('click',()=>{
    const number = document.getElementById('first');
    const first = Number(number.value);
    const second = first/100;

    const number2 = document.getElementById('second');
    const second_num = Number(number2.value);

    const result = second_num/(second*second);

    let bmi = "";
    if(result<18.5){
        bmi="Under weight";
    }
    else if(result<24.9){
        bmi="Normal weight";
    }
    else if(result<29.9){
        bmi = "Over Weight";
    }
    else{
        bmi = "Obese";
    }
    const re = document.getElementById('result');
    re.innerHTML=`Your BMI is ${result.toFixed(2)} and it is ${bmi}`;  
})

const hello = document.querySelector('#sec');
hello.addEventListener('click',()=>{
    const number = document.getElementById('first');
    const number2 = document.getElementById('second');
    const re = document.getElementById('result');
    number.value="";
    number2.value="";
    re.innerHTML="";

})