$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/src/cucumber/resources/features/Serviços/realizaOperacoes.feature");
formatter.feature({
  "name": "Consultar CEP via API",
  "description": "  Eu como usuário desejo testar operações: Consulta para algumas funcionalidades",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Consulta CEP válido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@BuscarCepValido"
    },
    {
      "name": "@TesteAutomatizado"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario passe um CEP válido na url",
  "keyword": "Dado "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:14"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP válido-01-09-2021 10-23-53.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "a ação \u0027get\u0027 do webservice for executado na operação \u0027IniciarConsultaAPI001\u0027 no path \u0027ws/13185526/json/\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:19"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP válido-01-09-2021 10-23-54.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "deve obter a seguinte resposta: statuscode \u0027200\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:29"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP válido-01-09-2021 10-23-54.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "os campos e valores seguintes como resposta de sucesso:",
  "rows": [
    {
      "cells": [
        "campo",
        "valor"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:34"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP válido-01-09-2021 10-23-55.png");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Consulta CEP Inválido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@BuscarCepInexistente"
    },
    {
      "name": "@TesteAutomatizado"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario passe um CEP válido na url",
  "keyword": "Dado "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:14"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP Inválido-01-09-2021 10-23-56.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "a ação \u0027get\u0027 do webservice for executado na operação \u0027IniciarConsultaAPI001\u0027 no path \u0027ws/13185525/json/\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:19"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP Inválido-01-09-2021 10-23-56.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "deve obter a seguinte resposta: statuscode \u0027200\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:29"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP Inválido-01-09-2021 10-23-56.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "os campos e valores seguintes como resposta",
  "rows": [
    {
      "cells": [
        "campo",
        "valor"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:76"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP Inválido-01-09-2021 10-23-57.png");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Consulta CEP formato Inválido",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@BuscarCepFormatoInvalido"
    },
    {
      "name": "@TesteAutomatizado"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario passe um CEP válido na url",
  "keyword": "Dado "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:14"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP formato Inválido-01-09-2021 10-23-58.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "a ação \u0027get\u0027 do webservice for executado na operação \u0027IniciarConsultaAPI001\u0027 no path \u0027ws/131855AB/json/\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:19"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP formato Inválido-01-09-2021 10-23-59.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "deve obter a seguinte resposta: statuscode \u0027400\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:29"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP formato Inválido-01-09-2021 10-23-59.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "os campos e valores seguintes como resposta",
  "rows": [
    {
      "cells": [
        "campo",
        "valor"
      ]
    }
  ],
  "keyword": "E "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:76"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/Testes/TesteAPIAutomatizado/cucumber-geb/build/reports/cucumber/Consulta CEP formato Inválido-01-09-2021 10-23-59.png");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});