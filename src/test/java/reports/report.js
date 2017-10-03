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
  "name": "User enters the following credentials",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ],
      "line": 7
    },
    {
      "cells": [
        "test@email.com",
        "abcabc"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on GO button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "He can visit the practice page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "A message is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TestingSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 9489882318,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_enters_the_following_credentials(DataTable)"
});
formatter.result({
  "duration": 381094097,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_clicks_on_GO_button()"
});
formatter.result({
  "duration": 256861187,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 5779563891,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.a_message_is_displayed()"
});
formatter.result({
  "duration": 558480302,
  "status": "passed"
});
});