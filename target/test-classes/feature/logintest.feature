Feature: Login
Description: Testa o login da aplicação

Scenario: Login Sucessfull with valid credentials
Given User is on home page
When User enters "test@email.com" and "abcabc"
And User clicks on GO button
Then He can visit the practice page
And A message is displayed
