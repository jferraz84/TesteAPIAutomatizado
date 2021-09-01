#language:pt

#Esta classe contém a descrição dos cenários de testes elencados para a Navegação de um site de consulta de CEP.
# 
# author: Henrique dos Santos Ferraz, Jorge - jferrazjorge@gmail.com

Funcionalidade: Consultar CEP via API
  Eu como usuário desejo testar operações: Consulta para algumas funcionalidades

  @BuscarCepValido @TesteAutomatizado
  Cenário: Consulta CEP válido
  Dado que o usuario passe um CEP válido na url
  Quando a ação 'get' do webservice for executado na operação 'IniciarConsultaAPI001' no path 'ws/13185526/json/' 
  Então deve obter a seguinte resposta: statuscode '200'
  E os campos e valores seguintes como resposta de sucesso:
  |campo               |valor                            |


  @BuscarCepInexistente @TesteAutomatizado
  Cenário: Consulta CEP Inválido
  Dado que o usuario passe um CEP válido na url
  Quando a ação 'get' do webservice for executado na operação 'IniciarConsultaAPI001' no path 'ws/13185525/json/' 
  Então deve obter a seguinte resposta: statuscode '200'
  E os campos e valores seguintes como resposta
  |campo               |valor                            |


  @BuscarCepFormatoInvalido @TesteAutomatizado
  Cenário: Consulta CEP formato Inválido
  Dado que o usuario passe um CEP válido na url
  Quando a ação 'get' do webservice for executado na operação 'IniciarConsultaAPI001' no path 'ws/131855AB/json/' 
  Então deve obter a seguinte resposta: statuscode '400'
  E os campos e valores seguintes como resposta
  |campo               |valor                            |
  