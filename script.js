function captura() {



// Capturando os elementos
const h1Element = document.querySelector('h1');
const linkElement = document.querySelector('a');
const ulElement = document.querySelector('ul');
const olElement = document.querySelector('ol');

// Adicionando conteúdo textual com innerText
h1Element.innerText = 'Bem-vindo ao Meu Projeto!';
linkElement.innerText = 'Clique aqui para acessar nosso site!';

// Adicionando itens à lista não ordenada (ul) com innerHTML
ulElement.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Adicionando itens com links na lista ordenada (ol) com innerHTML
olElement.innerHTML = `
  <li><a href="https://www.site1.com">Link para o site 1</a></li>
  <li><a href="https://www.site2.com">Link para o site 2</a></li>
  <li><a href="https://www.site3.com">Link para o site 3</a></li>
`;

}

captura()
