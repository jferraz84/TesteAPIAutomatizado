import pages.*

import static cucumber.api.groovy.PT.*
import groovy.json.JsonOutput
import cucumber.api.PendingException
import restassuredclient.*

def restClient = new RestAssuredClient();
def restParameters = [:]
def retorno
def value


Dado(/que o usuario passe um CEP válido na url/) {  ->
   restParameters.url = browser.getBaseUrl()
   Thread.sleep(1000)
}

Dado(/que o usuario passe um CEP inválido na url/) {  ->
   restParameters.url = browser.getBaseUrl()
   Thread.sleep(1000)
}

Dado(/que o usuario passe um CEP com formato inválido na url/) {  ->
   restParameters.url = browser.getBaseUrl()
   Thread.sleep(1000)
}

Quando(/a ação {string} do webservice for executado na operação {string} no path {string}/) { String acao, String operacao, String path ->
    //Passa os parâmetros
    restParameters.ação = acao
    restParameters.operação = operacao
    restParameters.path = path

    //Executa a chamada do serviço
    retorno = restClient.send(restParameters)
}

Então(/deve obter a seguinte resposta: statuscode {string}/) { String expectedStatusCode ->
   def statusCode = retorno.response.statusCode().toString()
   assert statusCode == expectedStatusCode
}

Então(/os campos e valores seguintes como resposta de sucesso:/) { io.cucumber.datatable.DataTable dataTable ->
   // Converte a tabela de dados para uma lista contendo chave/valor dos atributos e valores de retorno da chamada.
    List<Map<String, String>> list = dataTable.asMaps(String.class, String.class)

    // Itera a lista para verificar se os resultados esperados foram atingidos.
    list.eachWithIndex { item, index -> 
        if (list.get(index).get("campo") == "cep") {
            assert retorno.response.path("cep") != null
        }
        if (list.get(index).get("campo") == "logradouro") {
            assert retorno.response.path("logradouro") != null
        }
        if (list.get(index).get("campo") == "complemento") {
            assert retorno.response.path("complemento") != null
        }
        if (list.get(index).get("campo") == "bairro") {
            assert retorno.response.path("bairro") != null
        }
        if (list.get(index).get("campo") == "localidade") {
            assert retorno.response.path("localidade") != null
        }
        if (list.get(index).get("campo") == "uf") {
            assert retorno.response.path("uf") != null
        }
        if (list.get(index).get("campo") == "ibge") {
            assert retorno.response.path("ibge") != null
        }
        if (list.get(index).get("campo") == "gia") {
            assert retorno.response.path("gia") != null
        }
        if (list.get(index).get("campo") == "complemento") {
            assert retorno.response.path("complemento") != null
        }
        if (list.get(index).get("campo") == "siafi") {
            assert retorno.response.path("siafi") != null
        }

    }

  
}

Então(/os campos e valores seguintes como resposta/) { io.cucumber.datatable.DataTable dataTable ->
    // Converte a tabela de dados para uma lista contendo chave/valor dos atributos e valores de retorno da chamada.
    List<Map<String, String>> list = dataTable.asMaps(String.class, String.class)
        //println list
       //println response.getBody()

    // Itera a lista para verificar se os resultados esperados foram atingidos.
    list.eachWithIndex { item, index -> 
        if (list.get(index).get("campo") == "erro") {
            assert retorno.response.path("erro") != null
        }
    }    
}