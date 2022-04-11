var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
  //460  =>  largura do espaço do jogo - largura do jato
  else if (e.key == "ArrowRight" && left <= 460) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 = tecla de espaço
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          //Condição para verificar se o inimigo e o disparo estão na mesma posição.
          //Se sim, então temos que destruir o inimigo.

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //removendo o inimigo
            //placar
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Impede que o disparo se mova para fora da gamebox
      if (bulletbottom >= 500) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //disparo no topo do jato/alien.
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generaterocks = setInterval(() => {
  var rock = document.createElement("div");
  rock.classList.add("rocks");
  //Basta pegar a esquerda do inimigo para colocá-lo em posição aleatória.
  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //gerar valor entre 0 a 450 onde 450 => largura do espaço do jogo - largura do jato
  rock.style.left = Math.floor(Math.random() * 450) + "px";

  board.appendChild(rock);
}, 1000);

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("rocks");

  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      //aumenta o topo de cada peça, para que as peças possam se mover para baixo.
      var rock = rocks[i]; //pegando as peças
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );
      //475 => boardheight - rockheight + 25
      if (rocktop >= 475) {
        alert("Game Over");
        clearInterval(moverocks);
        window.location.reload();
      }

      rock.style.top = rocktop + 25 + "px";
    }
  }
}, 450);