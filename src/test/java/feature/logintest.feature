Feature: Login
Description: Testa o login da aplicação

Scenario Outline: Login Sucessfull with valid credentials
Given User is on home page
When User enters the "<email>" and "<senha>"
And User clicks on GO button
Then He can visit the practice page
And A message is displayed

Examples:
|email         | senha|
|test@email.com|abcabc|
|test@email.com|abcabc|