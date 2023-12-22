Feature: Verificação de Maioridade

  Scenario: Validar baladeiro menor de idade
    Given que o segurança solicita a identidade do baladeiro
    When ele informa a data de nascimento do baladeiro menor de idade
    Then o sistema deve retornar a mensagem "É menor de idade e não pode beber bebida alcoolica"