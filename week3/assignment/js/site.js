function Calculate(){
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);

    let result = input1 + input2;

    document.getElementById("result").value = result;
}