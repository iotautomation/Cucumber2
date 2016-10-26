$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStep.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 7847002802,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1848186872,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 303275495,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 91153,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStep.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 2665109529,
  "status": "passed"
});
formatter.match({
  "location": "TestStep.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 41659,
  "status": "passed"
});
});