const descricao = $("#descricaoImagem");
const titulo = $("#title");
const imagem = $("#imagem");
//const botao = $("#botaoEnviaData");
const video = $("#video");
const chave = 'W9B28XjCqYfGaLBKfX4iaXezkfeylrT8zv4n0roZ';

var dia=[];
var mes=[];
var ano=[];

$("#botaoEnviaData").click(function(event){
    event.preventDefault();
    const date = $("#date").val();
    console.log(date);

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${date}`,
        
        success: function(resposta){
            descricao.text(resposta.explanation);
            titulo.text(resposta.title);

            if(resposta.media_type == 'image'){
                imagem.show();
                imagem.attr("src", resposta.url);
                video.hide();
            }else{
                video.show();
                video.attr("src", resposta.url);
                imagem.hide();
            }
        }
    });
});
