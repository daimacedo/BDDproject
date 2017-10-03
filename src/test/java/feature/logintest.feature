Feature: Login
Description: Testa o login da aplicação

Scenario: Login Sucessfull with valid credentials
Given User is on home page
When User enters the following credentials
|email         | senha|
|test@email.com|abcabc|
And User clicks on GO button
Then He can visit the practice page
And A message is displayed
