document.getElementById('bt1').addEventListener('click', function() {
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);    
    document.getElementById('output').value = input1 + input2;
});