function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  // se o campoPesquisa for uma string vazia
  if(!campoPesquisa){
    section.innerHTML = "<p>Nenhum atleta encontrado!Você precisa digitar nome de um atleta ou esporte!</p>"
    return;
  }
  //campoPesquisa = campoPesquisa.toLoweCase();

  // Verifica se dados está definido e não está vazio
  if (dados && dados.length > 0) {
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      // Cria um novo elemento
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
        `;
      }
    }

    if(!resultados) {
      resultados = "<p>Nenhum atleta encontrado!</p>";
    }

    // Insere o HTML gerado na seção
    section.innerHTML = resultados;
  } 
}