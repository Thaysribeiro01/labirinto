// váriaveis do código 
var x=320
var y=150
var opcao = 1
var tela = 0
var xi =35
var yi=35
var r
var p
var z
var sortear
var px=0
var py=0
var casperguntas = [ ]
var casrespostas = [ ]
var perguntas = [ ]
var respostas = [ ]
var labirinto = [ ] 
var vidas =5
var pontos = 0


// matriz principal e vetores perguntas e respostas 
labirinto = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','#','n','v','v','#','v','v','v','v','v','v','v','v','v','#','m','v','V','v','v','#'], 
['#','v','#','#','#','V','#','v','#','v','#','#','#','v','#','#','#','#','v','#','v','#','#'],
['#','v','#','v','v','p','#','v','#','n','#','v','#','v','u','v','v','v','v','#','v','v','#'], 
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','#','#','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','u','v','v','v','v','#','v','#','v','v','v','v','#','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#','v','#','#'],
['#','v','#','v','#','v','#','v','#','v','v','n','v','v','#','v','#','v','v','#','v','v','#'],
['#','v','v','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','v','#','v','v','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','v','v','v','#','v','v','#','#','p','#'],
['#','k','v','v','v','v','#','v','#','v','#','v','#','v','#','#','#','#','v','#','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','m','#','v','#','v','v','#'],
['#','v','v','v','v','v','v','m','#','v','#','v','#','v','V','#','v','#','v','#','e','#','#'],
['#','v','#','#','#','#','#','#','#','v','#','v','#','#','v','#','v','#','v','#','c','v','#'],
['#','V','V','V','v','V','v','p','#','k','#','v','u','#','v','V','v','#','k','#','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
];
perguntas = ['Caminhando ao fim da tarde, uma senhora contou 20 casas em uma rua à sua direita. No regresso, ela contou 20 casas à sua esquerda. Quantas casas ela viu no total?','Uma mulher irá ter um bebê. Se ele for menino, ficará faltando apenas um filho para que o número de meninos seja igual ao de filhas. No entanto, se o bebê for uma menina, o número de filhas da mulher será o dobro do número de meninos. Quantos filhos ela tem e qual é o sexo deles?','Há um pato entre dois patos, um pato atrás de um pato e um pato na frente de outro pato. De quantos patos estamos falando?','No meu jardim existe 3 pés de alface, 1 de pepino e 5 de cenoura. Quantos pés eu tenho no total?','No táxi que entrei havia 8 passageiros. Pouco depois, 3 pessoas desceram e duas entraram. Quantas pessoas há no táxi?','Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?','Um pequeno caminhão pode carregar 50 sacos de areia ou 400 tijolos. Se foram colocados no caminhão 32 sacos de areia, quantos tijolos pode ainda ele carregar?','Há 7 passarinhos em um galho de árvore. Um menino atira em um deles, quantos passarinhos sobraram no galho?','Quando eu tinha 8 anos, a minha irmã tinha a metade da minha idade. Agora que tenho 55 anos, com quantos anos minha irmã está?','Na tarde de terça-feira João teve a brilhante ideia de ir caçar. Na quinta, caçou 2 coelhos e na cesta, levou-os para casa, preparando e comendo os coelhos com os amigos no dia seguinte. Em que dia da semana João comeu os coelhos com os seus amigos?','Em qual alternativa há três oitos, três zero? a) 88830 b) 3830 c) 888000 d) 383000','Maria comprou um vaso de flores por 20 reais e o vendeu por 25 reais. Arrependida da venda, comprou o mesmo vaso por 35 reais, mas logo decidiu vendê-lo por 40 reais. No final, quanto ela lucrou?','Ana teve 5 filhas. A primeira chama-se Segunda,A segunda chama-se Terça,A terceira chama-se Quarta,A quarta chama-se Quinta,Qual é o nome da quinta.','Se Alice entrou 5 vezes, quantas vezes ela saiu?','Qual o número da sequência 3, 13, 30, 31, 32 ... ?','O que é que todos tem 2, você tem 1 e eu não tenho nenhum?','Quatro amigos se reuniram. Carlos tem a metade da idade de Matheus mais 2 anos. Henrique tem 8 anos. Matheus tem a idade de Henrique mais a metade de sua idade. Paulo tem a metade da idade de Carlos mais a metade da idade de Henrique. Qual dos amigos é o mais velho?','Uma casa tem quatro cantos, cada canto tem um gato, cada gato vê três gatos. Quantos gatos há na casa?','O que quanto mais curto for, mais rápido é?','Num aquário viviam sete peixes. Dois morreram afogados. Quantos ficaram?','Qual palavra de 7 letras que, se tirarmos 5, ficam 11?'] 
respostas = ['20','8','3','2','9','12','144','0','51','quarta feira','a','10','qual','4','33','letra o','matheus','4','o tempo','7','abacaxi']

casperguntas = ['Fábio foi sozinho até a padaria no centro da cidade. Durante o percurso, encontrou duas garotas passeando com três cachorros, que estavam brincando com dois gatos, que, por sua vez, tinham dois donos. Quantos seres no total foram com Fábio até a padaria? (Apenas números)','Se uma borboleta vive cinco dias e a cada dia ela voa quatro metros, quantos metros ela terá percorrido em uma semana?(apenas números)']
casrespostas = ['0','20']

// tamanho do canvas
function setup() {
  createCanvas(800,560);
}
// associação das telas
function draw() {
background(0,100,10);
  if(tela==0)  
    menu();
  if(tela==1)
    image(ini,0,0)
  if(tela==2)
    instrucoes();
  if(tela==3)
    creditos();
  if(tela==4){
    fase();
    if(vidas<=0){
      tela=6
    }
  }  
  if(tela==5)
    image(fim,0,0);
  if(tela==6){
    image(game,0,0)
  }
}
// Tela de menu principal 

function menu(){
image(img,0,0)
fill(199,21,133)
rect(x, y, 168,50,50,50)
fill(0,0,0)
textSize(45)
textSize(30);
text("Jogar",355,180);
text("Instruções",335,280);
text("Créditos",350,380);

}
// local de carregamento de todas as imagens
function preload() {
  img=loadImage ("capa.jpeg")
  ins=loadImage ("Instruções do jogo do racíocinio (2).png")
  cre=loadImage ("creditos.jpeg")
  tij=loadImage ("forma-geometrica-quadrada-preta.png")
  ini=loadImage ("Inserir um título (2).png")
  ma= loadImage("maca-mordida.png")
  monster=loadImage("monstro (1).png")
  pe=loadImage("garrafas-plasticas.png")
  mel=loadImage("minhoca.png")
  ki=loadImage("queijo.png")
  uva=loadImage("espinha-de-peixe.png")
  cas=loadImage("caverna.png") 
  fim=loadImage("Inserir um título (3).png")
  game=loadImage("Inserir um título (1).png")
  por=loadImage("pedra.png")
} 
// criação da função que vai definir toda a fase do jogo 
function fase(){
// cor de fundo do labirinto
  background(0,128,0)

// posicionamento das figuras no labitinto 
  for ( i = 0; i < labirinto.length; i= i+1  ) { 
    for ( j = 0; j < labirinto[0].length; j= j+1 ) {
      if ( labirinto[i][j] == '#' ) {
        image(tij, j*35,i*35,35,35); 
      }
      if ( labirinto[i][j] == 'm' ){
        image(ma,j*35,i*35,32,32)
      }
      if ( labirinto[i][j] == 'p' ){
        image(pe,j*35,i*35,32,32)
      }
      if ( labirinto[i][j] == 'n' ){
        image(mel,j*35,i*35,32,32)
      }
      if ( labirinto[i][j] == 'k' ){
        image(ki,j*35,i*35,32,32)
      }
      if ( labirinto[i][j] == 'u' ){
        image(uva,j*35,i*35,32,32)
      }
      if ( labirinto[i][j] == 'c' ){
        image(cas,j*35,i*35,68,60)
      }
      if ( labirinto[i][j] == 'e' ){
        image(por,j*35,i*35,32,32)
      }
    }
  }
// criação do personagem 
image(monster,xi,yi,32,32)
// movimento do personagem e detecção de colisões 
if(keyIsDown(DOWN_ARROW)) {
  if(labirinto[(yi+35)/35][xi/35] !== "#" && labirinto[(yi+35)/35][xi/35] !== "e" ){
    yi=yi+35;
  }
}
if(keyIsDown(UP_ARROW)) {
  if(labirinto[(yi-35)/35][xi/35] !== "#" && labirinto[(yi-35)/35][xi/35] !== "e"){
    yi=yi-35;
   }
}
if(keyIsDown(LEFT_ARROW)) {
  if(labirinto[yi/35][(xi-35)/35] !== "#" && labirinto[yi/35][(xi-35)/35] !== "e" ){
    xi=xi-35;
  }
}
if(keyIsDown(RIGHT_ARROW)) {
  if(labirinto[yi/35][(xi+35)/35] !== "#" && labirinto[yi/35][(xi+35)/35] !== "e" ){
    xi=xi+35;
  }
}
// Sorteio das perguntas no jogo 
    px = Math.floor(xi/35)
    py = Math.floor(yi/35)
    if(labirinto[py][px] == "p" || labirinto[py][px] == "u" || labirinto[py][px] == "m" || labirinto[py][px] == "k" || labirinto[py][px] == "n" ){
     sortear = (Math.random() * perguntas.length);
      p = perguntas[(sortear) | 0];
      r = respostas[(sortear) | 0];
        z = prompt(p);
        if(z == r){
          alert("ah não!! Você acertou.");
          perguntas.splice(sortear,1);
          respostas.splice(sortear,1);
          labirinto[py].splice([px],1,'v');
            pontos = pontos + 1
            return true; 
        
        }
          else {
            vidas=vidas-1
            return false;
          }
      }
// condição para entrar na caverna  
    if(pontos>=15) {
       labirinto[12].splice([20],1,'v');
   }
//sorteio para a ultima pergunta a ser feita 
   if(labirinto[py][px] == "c"){
   sortear = (Math.random() * casperguntas.length);
    p = casperguntas[(sortear) | 0];
    r = casrespostas[(sortear) | 0];
      z = prompt(p);
      if(z == r){
        tela=5
        casperguntas.splice(sortear,1);
        casrespostas.splice(sortear,1);
        labirinto[py].splice([px],1,'v');
          return true;
      }
        else {
          vidas=vidas - 1
          return false;
          
        }
    } 
// contadores de vidas e lixo 
textSize(25);
strokeWeight(6);
stroke(10);
fill(0,191,255);
text("Lixo: "+ pontos + "       " + "Vidas: "+ vidas, 28, 28)
}

// duncção para adicionar as imagens do jogo 
function instrucoes(){
  image(ins,0,0)
}
function creditos(){
  image(cre,0,0)
}
// função resete (caso as 5 vidas acabe)
function resert(){
vidas = 5
xi=35
yi=35
pontos = 0
strokeWeight(0);
stroke(0);
labirinto = [ 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['#','v','#','n','v','v','#','v','v','v','v','v','v','v','v','v','#','m','v','V','v','v','#'], 
['#','v','#','#','#','V','#','v','#','v','#','#','#','v','#','#','#','#','v','#','v','#','#'],
['#','v','#','v','v','p','#','v','#','n','#','v','#','v','u','v','v','v','v','#','v','v','#'], 
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','#','#','#','v','#','#','v','#'],
['#','v','#','v','#','v','#','u','v','v','v','v','#','v','#','v','v','v','v','#','v','v','#'],
['#','v','#','v','#','v','#','v','#','#','#','v','#','v','#','v','#','#','v','#','v','#','#'],
['#','v','#','v','#','v','#','v','#','v','v','n','v','v','#','v','#','v','v','#','v','v','#'],
['#','v','v','v','#','v','#','v','#','v','#','#','#','#','#','v','#','v','v','#','v','v','#'], ['#','#','#','#','#','v','#','v','#','v','#','v','v','v','v','v','#','v','v','#','#','p','#'],
['#','k','v','v','v','v','#','v','#','v','#','v','#','v','#','#','#','#','v','#','v','v','#'], 
['#','v','#','#','#','#','#','v','#','v','#','v','#','v','#','#','m','#','v','#','v','v','#'],
['#','v','v','v','v','v','v','m','#','v','#','v','#','v','V','#','v','#','v','#','e','#','#'],
['#','v','#','#','#','#','#','#','#','v','#','v','#','#','v','#','v','#','v','#','c','v','#'],
['#','V','V','V','v','V','v','p','#','k','#','v','u','#','v','V','v','#','k','#','v','v','#'],
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
 
];
perguntas = ['Caminhando ao fim da tarde, uma senhora contou 20 casas em uma rua à sua direita. No regresso, ela contou 20 casas à sua esquerda. Quantas casas ela viu no total?','Uma mulher irá ter um bebê. Se ele for menino, ficará faltando apenas um filho para que o número de meninos seja igual ao de filhas. No entanto, se o bebê for uma menina, o número de filhas da mulher será o dobro do número de meninos. Quantos filhos ela tem e qual é o sexo deles?','Há um pato entre dois patos, um pato atrás de um pato e um pato na frente de outro pato. De quantos patos estamos falando?','No meu jardim existe 3 pés de alface, 1 de pepino e 5 de cenoura. Quantos pés eu tenho no total?','No táxi que entrei havia 8 passageiros. Pouco depois, 3 pessoas desceram e duas entraram. Quantas pessoas há no táxi?','Meu avô tem 5 filhos, cada filho tem 3 filhos. Quantos primos eu tenho?','Um pequeno caminhão pode carregar 50 sacos de areia ou 400 tijolos. Se foram colocados no caminhão 32 sacos de areia, quantos tijolos pode ainda ele carregar?','Há 7 passarinhos em um galho de árvore. Um menino atira em um deles, quantos passarinhos sobraram no galho?','Quando eu tinha 8 anos, a minha irmã tinha a metade da minha idade. Agora que tenho 55 anos, com quantos anos minha irmã está?','Na tarde de terça-feira João teve a brilhante ideia de ir caçar. Na quinta, caçou 2 coelhos e na cesta, levou-os para casa, preparando e comendo os coelhos com os amigos no dia seguinte. Em que dia da semana João comeu os coelhos com os seus amigos?','Em qual alternativa há três oitos, três zero? a) 88830 b) 3830 c) 888000 d) 383000','Maria comprou um vaso de flores por 20 reais e o vendeu por 25 reais. Arrependida da venda, comprou o mesmo vaso por 35 reais, mas logo decidiu vendê-lo por 40 reais. No final, quanto ela lucrou?','Ana teve 5 filhas. A primeira chama-se Segunda,A segunda chama-se Terça,A terceira chama-se Quarta,A quarta chama-se Quinta,Qual é o nome da quinta.','Se Alice entrou 5 vezes, quantas vezes ela saiu?','Qual o número da sequência 3, 13, 30, 31, 32 ... ?','O que é que todos tem 2, você tem 1 e eu não tenho nenhum?','Quatro amigos se reuniram. Carlos tem a metade da idade de Matheus mais 2 anos. Henrique tem 8 anos. Matheus tem a idade de Henrique mais a metade de sua idade. Paulo tem a metade da idade de Carlos mais a metade da idade de Henrique. Qual dos amigos é o mais velho?','Uma casa tem quatro cantos, cada canto tem um gato, cada gato vê três gatos. Quantos gatos há na casa?','O que quanto mais curto for, mais rápido é?','Num aquário viviam sete peixes. Dois morreram afogados. Quantos ficaram?','Qual palavra de 7 letras que, se tirarmos 5, ficam 11?'] 
respostas = ['20','8','3','2','9','12','144','0','51','quarta feira','a','10','qual','4','33','letra o','matheus','4','o tempo','7','abacaxi']
  
casperguntas = ['Fábio foi sozinho até a padaria no centro da cidade. Durante o percurso, encontrou duas garotas passeando com três cachorros, que estavam brincando com dois gatos, que, por sua vez, tinham dois donos. Quantos seres no total foram com Fábio até a padaria? (Apenas números)','Se uma borboleta vive cinco dias e a cada dia ela voa quatro metros, quantos metros ela terá percorrido em uma semana?(apenas números)']
  
casrespostas = ['0','20']
}

//condições de todas as teclas do jogo 
function keyPressed() {
  if(key=="ArrowUp" && y>150){
    y= y-100
    opcao = opcao - 1
  }
  if(key=="ArrowDown" && y<300){
    y= y+100
    opcao = opcao + 1
  }
  if (tela==0){
    if (key=="Enter") {
      tela = opcao
    }
  }
  if (tela==2 || tela==3){
    if(key=="Escape"){
      tela = 0
    }
  }
  if (tela==1){
    if(key=="Control"){
      tela = 4
    }
  }
   if (tela==5){
    if(key=="Escape"){
      resert()
      tela = 0
    }
  }
  if (tela==5){
    if(key=="Enter"){
      resert()
      tela = 4
    }
  }
  if (tela==6){
    resert()
    if(key=="Enter"){
      tela = 4
    }
  }
  if (tela==6){
    resert()
    if(key=="Escape"){
      tela = 0
    }
  }
}