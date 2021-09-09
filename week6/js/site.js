$(function () {
    init();
})

function init(){

    $('#btnDemo').on('click', function(){

        $('#messagePanel').html('Hello World');
    });
}