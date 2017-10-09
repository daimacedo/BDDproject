$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "Description: Testa o login da aplicação",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Sucessfull with valid credentials",
  "description": "",
  "id": "login;login-sucessfull-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cemail\u003e\" and \"\u003csenha\u003e\"",
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
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login;login-sucessfull-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "senha"
      ],
      "line": 12,
      "id": "login;login-sucessfull-with-valid-credentials;;1"
    },
    {
      "cells": [
        "test@email.com",
        "abcabc"
      ],
      "line": 13,
      "id": "login;login-sucessfull-with-valid-credentials;;2"
    },
    {
      "cells": [
        "test@email.com",
        "abcabc"
      ],
      "line": 14,
      "id": "login;login-sucessfull-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login Sucessfull with valid credentials",
  "description": "",
  "id": "login;login-sucessfull-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"test@email.com\" and \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 8543938894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 17
    },
    {
      "val": "abcabc",
      "offset": 38
    }
  ],
  "location": "TestingSteps.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 279859358,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_clicks_on_GO_button()"
});
formatter.result({
  "duration": 253643872,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 5674821051,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.a_message_is_displayed()"
});
formatter.result({
  "duration": 386164202,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Sucessfull with valid credentials",
  "description": "",
  "id": "login;login-sucessfull-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"test@email.com\" and \"abcabc\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 7530542369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@email.com",
      "offset": 17
    },
    {
      "val": "abcabc",
      "offset": 38
    }
  ],
  "location": "TestingSteps.user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 254250612,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_clicks_on_GO_button()"
});
formatter.result({
  "duration": 254208328,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 5726893819,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.a_message_is_displayed()"
});
formatter.result({
  "duration": 347483949,
  "status": "passed"
});
});