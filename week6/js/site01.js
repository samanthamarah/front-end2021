$(function () {
    init();
})

function init(){

    $('#btnDemo').on('click', function(){

        $('#messagePanel').html('Hello World');
    });

    $('#btnAge').on('click', function(){

        const age = $('#tbAge').val();
        $('#messagePanel').html(`Your age is ${age}`);
    });

    $('#btnAdd').on('click', function(){

        const number1 = $('#tbNum1').val();
        const number2 = $('#tbNum2').val();
        const total = parseInt(number1) + parseInt(number2);
        $('#messagePanel').html(`Your age is ${total}`);
    });

}