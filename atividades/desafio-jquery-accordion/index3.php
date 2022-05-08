<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Desafio JQuery Accordion</title>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script>
    $( function() {
    $( "#accordion" ).accordion();
    } );
  </script>

  <style>
    h1{
      font-family: sans-serif;
    }

    p{
      font-family: sans-serif;
      font-size: 18px;
    }
  </style>
</head>
<body>

<h1>Desafio JQuery Accordion</h1>
<p>Desafio da aula prática do curso Primeiros passos para desenvolvimento web da DIO._ (Digital Innovation One)</p>

<div id="accordion">
        <h3>PHP</h3>
        <div>
         <p>
         PHP (um acrônimo recursivo para "PHP: Hypertext Preprocessor", originalmente Personal Home Page) 
         é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.
         <a href="https://pt.wikipedia.org/wiki/PHP">Wikipedia</a>
        </p>
  </div>
        <h3>Java Script</h3>
        <div>
        <p>
        JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.
        <a href="https://pt.wikipedia.org/wiki/JavaScript">Wikipedia</a>
        </p>
  </div>
  <h3>jQuery</h3>
  <div>
    <p>
    jQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente. Usada por cerca de 74.4% dos 10 mil sites mais visitados do mundo, jQuery é a mais popular das bibliotecas JavaScript.
    <a href="https://pt.wikipedia.org/wiki/JQuery">Wikipedia</a>
    </p>
  </div>
</div>
      
</body>
</html>