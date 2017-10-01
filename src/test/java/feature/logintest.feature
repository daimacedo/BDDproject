Feature: Login
Description: Testa o login da aplicação

Scenario: Login Sucessfull with valid credentials
Given User is on home page
When User enters username and password
And User clicks on GO button
Then He can visit the practice page
And A message is displayed

#
#Scenario: LogOut
#When User logOut the application
#Then He can't acess the practice page
