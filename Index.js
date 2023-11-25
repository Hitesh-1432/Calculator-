var result = document.getElementById('result');

function display(number){
    result.value += number;
}

function calculate(){
    final_number = result.value;
    final_result = eval(final_number);
    result.value = final_result;
}

function clearScreen(){
    result.value = '';
}

function deleteOne(){
    result.value = result.value.slice(0,-1);
}
