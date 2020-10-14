Feature: Validar Login

    Scenario: Preencher login e senha
        Given acesse a plataforma Crefisa PJ
        When eu localizo o botao acessar com o usuario
        And Coloco usuario e senha valido
        Then Clico no botao Avancar    