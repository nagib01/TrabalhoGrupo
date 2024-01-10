function calcular(){
    var total = 0;

    $('.total').each(function(){
        var price = parseFloat($(this).closest('tr').find('.price').val()) || 0;
        var quantidade = parseFloat($(this).closest('tr').find('.qtd').val()) || 0;
        var subtotal = price * quantidade || 0;

        total += subtotal;

        $(this).val(subtotal.toFixed(2));
    });
    $('#total').text(total.toFixed(2));
}

function totalLinhas() {
    var totalLinhas = $('#table tbody tr').length;
    alert('Total de Linhas:' + totalLinhas);
}

$(document).ready(function(){
    $('.btn-primary').on('click', function(){
        calcular();
    });
});