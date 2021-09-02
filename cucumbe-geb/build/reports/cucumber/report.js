$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/l/disk0/jferraz/TesteCI\u0026T/TesteAPIAutomatizado/cucumbe-geb/src/cucumber/resources/features/Serviços/realizaOperacoes.feature");
formatter.feature({
  "name": "Consultar CEP via API",
  "description": "  Eu como usuário desejo testar operações: Consulta para algumas funcionalidades",
  "keyword": "Funcionalidade"
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
  "name": "que o usuario passe um CEP com formato inválido na url",
  "keyword": "Dado "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:24"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/TesteCI\u0026T/TesteAPIAutomatizado/cucumbe-geb/build/reports/cucumber/Consulta CEP formato Inválido-02-09-2021 08-27-37.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "a ação \u0027get\u0027 do webservice for executado na operação \u0027IniciarConsultaAPI001\u0027 no path \u0027ws/131855AB/json/\u0027",
  "keyword": "Quando "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:29"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/TesteCI\u0026T/TesteAPIAutomatizado/cucumbe-geb/build/reports/cucumber/Consulta CEP formato Inválido-02-09-2021 08-27-38.png");
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "deve obter a seguinte resposta: statuscode \u0027400\u0027",
  "keyword": "Então "
});
formatter.match({
  "location": "apiRestConsultaCep-steps.groovy:39"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/TesteCI\u0026T/TesteAPIAutomatizado/cucumbe-geb/build/reports/cucumber/Consulta CEP formato Inválido-02-09-2021 08-27-38.png");
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
  "location": "apiRestConsultaCep-steps.groovy:86"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("Screenshot anexo /l/disk0/jferraz/TesteCI\u0026T/TesteAPIAutomatizado/cucumbe-geb/build/reports/cucumber/Consulta CEP formato Inválido-02-09-2021 08-27-38.png");
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});