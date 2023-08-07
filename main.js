$(document).ready(function(){

$("#bt-cadastro").click(function(){
            
    const conteudo = $('#id_input').val();
    const mostrar = (`<li>${conteudo}</li>`);
    $('ul').append(mostrar);
    $('#id_input').val('');
    
});
});