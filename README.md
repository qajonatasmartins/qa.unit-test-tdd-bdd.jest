# qa.unit-test-tdd-bdd.jest

Chapter QA - Teste unitário

Teste unitário - Explicar base CTFL https://bcr.bstqb.org.br/docs/syllabus_ctfl_4.0br.pdf PG 29

TDD - Explicar base CTFL-AT https://bcr.bstqb.org.br/docs/syllabus_ctfl_at_1.0br.pdf PG 33/34

```
Verificação de Maioridade

RNF0 - Se o baladeiro é maior de idade, deve liberar a entrada e retornar a mensagem de 'É maior de idade e está liberado para consumir bebida alcoolica'

RNF1 - Se o baladeiro é menor de idade, deve liberar a entrada e retornar a mensagem de 'É menor de idade e não pode beber bebida alcoolica'

```

Fluxo do TDD

- Escreve o teste primeiro, ele deve falhar (RED)
- Escreve o mínimo de código possível para o teste passar (GREEN)
- Refatora o teste (Refactor)

1. Crie o arquivo de teste
2. Crie um método que só retorna true para idade 19
3. Refatora o código para ficar melhor
4. Inicia o processo novamente seguindo os requisitos.

BDD = Explicar base CTFL-AT https://bcr.bstqb.org.br/docs/syllabus_ctfl_at_1.0br.pdf PG 34

Como (papel), eu quero (ação) e para (por quê).

Configs do cucumber-js [cucumber-js](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md)

```
Feature: Verificação de Maioridade

Como um sistema de entretenimento
Quero verificar se o baladeiro é maior ou menor de idade
Para evitar processos por venda ilegal de bebidas alcoolicas a menores de idade


Cenário: Validar baladeiro menor de idade

Dado que o segurança solicita a identidade do baladeiro
Quando ele informa a data de nascimento do baladeiro menor de idade
Então o sistema deve retornar a mensagem 'É menor de idade e não pode beber bebida alcoolica'

Cenário: Validar baladeiro maior de idade

Dado que o segurança solicita a identidade do baladeiro
Quando ele informa a data de nascimento do baladeiro maior de idade
Então o sistema deve retornar a mensagem 'É maior de idade e está liberado para consumir bebida alcoolica'

```

Projeto

1. `npm init -y`
2. `npm install typescript -D`
3. `npm install jest -D`
4. `npm install ts-jest -D`
5. `npm install @types/jest`
6. `npx ts-jest config:init`
7. Cria a pasta src
8. Cria a pasta tests
9. Add no package.json o script com comando `jest`
10. Add no package.json o script com comando `jest --watchAll`

```typescript

  /**
   * Método para calcular a idade de uma pessoa com base na data de nascimento
   * @param dataNascimento - Formato ISO 8601. Ex.: '1990-12-20'
   * @returns - Idade em anos
   */
  public calcularIdade(dataNascimento: string): number {
    const idadeEmMilissegundos =
      Date.now() - new Date(dataNascimento).getTime();
    const idadeEmAnos = new Date(idadeEmMilissegundos).getUTCFullYear() - 1970;
    return idadeEmAnos;
  }
```
