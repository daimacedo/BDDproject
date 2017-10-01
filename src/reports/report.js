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
  "duration": 22286652481,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 310568881,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.user_clicks_on_GO_button()"
});
formatter.result({
  "duration": 2250052636,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.he_can_visit_the_practice_page()"
});
formatter.result({
  "duration": 515014718,
  "status": "passed"
});
formatter.match({
  "location": "TestingSteps.a_message_is_displayed()"
});
formatter.result({
  "duration": 495851603,
  "error_message": "java.lang.NoSuchMethodError: com.google.common.util.concurrent.SimpleTimeLimiter.create(Ljava/util/concurrent/ExecutorService;)Lcom/google/common/util/concurrent/SimpleTimeLimiter;\n\tat org.openqa.selenium.net.UrlChecker.\u003cinit\u003e(UrlChecker.java:64)\n\tat org.openqa.selenium.remote.service.DriverService.stop(DriverService.java:213)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:94)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:703)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:542)\n\tat base.SetUpTest.TearDown(SetUpTest.java:37)\n\tat stepdefinition.TestingSteps.a_message_is_displayed(TestingSteps.java:59)\n\tat ✽.And A message is displayed(logintest.feature:9)\n",
  "status": "failed"
});
});