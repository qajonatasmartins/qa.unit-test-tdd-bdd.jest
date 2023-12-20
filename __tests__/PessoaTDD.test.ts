// RNF0 - Se o baladeiro é maior de idade, deve liberar a
// entrada e retornar a mensagem de
// 'É maior de idade e está liberado para consumir bebida alcoolica'

// RNF1 - Se o baladeiro é menor de idade,
// deve liberar a entrada e retornar a mensagem de
// 'É menor de idade e não pode beber bebida alcoolica'

import Pessoa from "../src/Pessoa";

describe("PessoaTest - TDD", () => {
  test("Verificar se o baladeiro é maior de idade", () => {
    // Triple A
    // Arrange (Prepara/Massa de dados)
    const pessoa = new Pessoa();
    // Act (Ação)
    const ehMaiorDeIDade = pessoa.ehMaiorDeIDade(19);
    // Assert (Asserção)
    expect(ehMaiorDeIDade).toBe(true);
  });

  test("Verificar se o baladeiro é igual a 18", () => {
    // Triple A
    // Arrange (Prepara/Massa de dados)
    const pessoa = new Pessoa();
    // Act (Ação)
    const ehMaiorDeIDade = pessoa.ehMaiorDeIDade(18);
    // Assert (Asserção)
    expect(ehMaiorDeIDade).toBe(true);
  });

  test("Verificar se o baladeiro é menor de idade", () => {
    // Triple A
    // Arrange (Prepara/Massa de dados)
    const pessoa = new Pessoa();
    // Act (Ação)
    const ehMaiorDeIDade = pessoa.ehMaiorDeIDade(17);
    // Assert (Asserção)
    expect(ehMaiorDeIDade).toBe(false);
  });
});
