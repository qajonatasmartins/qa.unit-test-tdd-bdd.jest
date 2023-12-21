export default class Pessoa {
  // Tecnica de caixa-branca - cobertura de condição
  // Tecnica de caixa-preta - Analise de valor limite
  // CT = 17
  // CT = 18
  // CT = 19
  ehMaiorDeIDade(idade) {
    return idade >= 18;
  }
}
