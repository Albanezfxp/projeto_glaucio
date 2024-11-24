Unidades de Medida Relativas
Porcentagens (%): Usadas para largura, altura e margens que se adaptam ao tamanho do elemento pai.
em e rem: Unidades baseadas no tamanho da fonte. Ideais para espaçamentos e tamanhos de texto.
vw e vh: Percentuais relativos à largura e altura do viewport.
Exemplo:

css
.container {
  width: 80%; /* Adapta à largura do elemento pai */
  font-size: 1.5rem; /* Baseada no tamanho da fonte raiz */
}

Media Queries
Permitem aplicar estilos específicos para diferentes tamanhos de tela. São declaradas no CSS com @media.

Exemplo:

css
/* Estilos para telas pequenas */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }

  .menu {
    display: none;
  }
}

Flexbox e Grid Layout
Flexbox:
Para criar layouts flexíveis e alinhados:

css
.container {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  flex-wrap: wrap; /* Permite quebrar linhas */
}

Grid Layout:
Para layouts mais complexos com linhas e colunas:

css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 20px; /* Espaço entre itens */
}


Imagens e Vídeos Responsivos
Use propriedades como max-width e height: auto:

css
img, video {
  max-width: 100%; /* Nunca ultrapassa o tamanho do elemento pai */
  height: auto;
}


Tipografia Adaptativa
Escale fontes com unidades relativas:

css
html {
  font-size: 16px; /* Base para rem */
}

@media (max-width: 768px) {
  html {
    font-size: 14px; /* Reduz o tamanho em telas menores */
  }
}


Frameworks Responsivos
Para acelerar o desenvolvimento, considere usar frameworks como:

Bootstrap: Inclui classes pré-definidas para layouts responsivos.
Tailwind CSS: Utiliza utilitários para estilos personalizados.


Testando Responsividade
Use as ferramentas de desenvolvedor do navegador (F12) e selecione o modo responsivo.
Teste em dispositivos reais e em plataformas como:
Google Chrome DevTools
Responsively App


Indicações de Vídeos

Curso em Vídeo - HTML5 e CSS3 - Módulo Responsividade: YouTube - Curso em Vídeo
https://www.youtube.com/@cursoemvideo

Origamid - CSS Grid e Flexbox para Layouts Responsivos: Canal Origamid no YouTube
https://www.youtube.com/@origamid

Hora de Codar - Responsividade com CSS na Prática: Canal Hora de Codar
https://www.youtube.com/@horadecodar

Rocketseat - Responsividade com CSS Moderno: Canal Rocketseat
https://www.youtube.com/@rocketseat

Mayk Brito - Como criar um site responsivo do zero: Canal Mayk Brito
https://www.youtube.com/@maykbrito
