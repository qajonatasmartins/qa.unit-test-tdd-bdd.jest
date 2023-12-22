const assert = require("assert");
const { When, Then, Given } = require("@cucumber/cucumber");
const { Pessoa } = require("../../src/Pessoa");

Given("que o segurança solicita a identidade do baladeiro", function () {
  this.whatIHeard = new Pessoa();
});

When(
  "ele informa a data de nascimento do baladeiro menor de idade",
  function () {
    this.whatIHeard = new Pessoa().ehMaiorDeIDade(17);
    // return this.whatIHeard;
  }
);

Then(
  "o sistema deve retornar a mensagem {string}",
  function (expectedResponse) {
    assert.equal(this.whatIHeard, false);
  }
);
