package restassuredclient

import io.restassured.RestAssured.*
import static io.restassured.RestAssured.given
import io.restassured.http.ContentType
import io.restassured.response.Response
import java.nio.charset.StandardCharsets
import groovy.util.Node



import ws.Payloads

@Mixin(Payloads)
class RestAssuredClient{

    def send(parameters){
        def response
        String action = parameters.ação

        def operation = populatePayload(parameters.operação, parameters)
        def payload = operation

        println "parameters ${parameters}"
        println "payload ${payload}"
        println "http://${parameters.url}/${parameters.path}"
        println "========================"
        println "|Retonro Da Requisição:|"
        println "========================"


        //escolhe a ação e faz a chamada do serviço
        switch (action) {
                        case "get":  response = given()
                                    .header("Content-Type", "application/json")
                                    .contentType("application/json")
                                    .body(payload)
                                    .when()  
                                    .get("http://${parameters.url}/${parameters.path}")
                                    .then().body(); break;
                        case "post": response = given()
                                    .header("Content-Type", "application/json")
                                    .contentType("application/json")
                                    .body(payload)
                                    .when()  
                                    .post("http://${parameters.url}/${parameters.path}")
                                    .then().body(); break;
                        case "put": response = given()
                                    .header("Content-Type", "application/json")
                                    .contentType("application/json")
                                    .body(payload)
                                    .when println "========================"()  
                                    .put("http://${parameters.url}/${parameters.path}")
                                    .then().body(); break;
                        case "delete": response = given()
                                    .header("Content-Type", "application/json")
                                    .contentType("application/json")
                                    .body(payload)
                                    .when()  
                                    .delete("http://${parameters.url}/${parameters.path}")
                                    .then().body(); break;
                        default:     response = given()
                                    .header("Content-Type", "application/json")
                                    .contentType("application/json")
                                    .body(payload)
                                    .when()  
                                    .get("http://${parameters.url}/${parameters.path}")
                                    .then();
        }

       response
  } 

  // Define as credenciais URL e porta no GebConfig ou as credenciais informadas na declaração do cenário
  def getCredenciais(String valorCredencial, String tipoCredencial, String urlSistema) {
    // TODO: programar aqui o System.setProperty("geb.build.baseUrl", "${baseUrl}")
    //String credentials = ''
        def splitUrl = urlSistema.split('/')
        def portaserv = splitUrl[2].split(':')

          if (tipoCredencial == 'url') {
            credentials = portaserv[0]
          }
          if (tipoCredencial == 'porta') {
            credentials = portaserv[1]
          }

    return credentials
  }

  //Pega o nome do objeto do path do webserice
  def getObjPath(String path){
    def splitpath = path.split('/');
  return splitpath[splitpath.size()-1]
  }

}