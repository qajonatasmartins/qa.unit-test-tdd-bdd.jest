// RNF0 - Se o baladeiro é maior de idade, deve liberar a
// entrada e retornar a mensagem de
// 'É maior de idade e está liberado para consumir bebida alcoolica'

// RNF1 - Se o baladeiro é menor de idade,
// deve liberar a entrada e retornar a mensagem de
// 'É menor de idade e não pode beber bebida alcoolica'

import Pessoa from "../src/Pessoa";

describe("PessoaTest - BDD", () => {
  let ehMaiorDeIDade: any, pessoa: any;

  it("Dado que o segurança solicita a identidade do baladeiro", () => {
    // Triple A
    // Arrange (Prepara/Massa de dados)
    pessoa = new Pessoa();
  });

  it("Quando ele informa a data de nascimento do baladeiro menor de idade", () => {
    // Act (Ação)
    ehMaiorDeIDade = pessoa.ehMaiorDeIDade(17);
  });

  it("Então o sistema deve retornar a mensagem 'É menor de idade e não pode beber bebida alcoolica'", () => {
    // Assert (Asserção)
    expect(ehMaiorDeIDade).toBe(false);
  });
});
