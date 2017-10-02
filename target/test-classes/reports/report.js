$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "Description: Testa o login da aplicação",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Sucessfull with valid credentials",
  "description": "",
  "id": "login;login-sucessfull-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks on GO button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TestingSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 29658309765,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 274810069,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_clicks_on_GO_button()"
});
formatter.result({
  "duration": 265112411,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 5329905038,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.a_message_is_displayed()"
});
formatter.result({
  "duration": 56045307,
  "error_message": "java.lang.AssertionError: \nExpecting:\n \u003c\"Lets Kode it\"\u003e\nto end with:\n \u003c\"Practice Page\"\u003e\n\n\tat stepdefinition.TestingSteps.a_message_is_displayed(TestingSteps.java:56)\n\tat ✽.And A message is displayed(logintest.feature:9)\n",
  "status": "failed"
});
});