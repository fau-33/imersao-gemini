function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";

  // Itera sobre cada resultado da pesquisa
  for (let dado of dados) {
    // Cria o HTML para um item de resultado
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.title}</a> </h2>
        <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
    `;
  }

  // Insere o HTML gerado na seção
  section.innerHTML = resultados;
}