$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DiYLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "Validation of Login Functionality",
  "description": "",
  "id": "validation-of-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 22,
      "value": "# @tag1"
    },
    {
      "line": 23,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 24,
      "value": "# Given I want to write a step with precondition"
    },
    {
      "line": 25,
      "value": "#And some other precondition"
    },
    {
      "line": 26,
      "value": "#When I complete action"
    },
    {
      "line": 27,
      "value": "#And some other action"
    },
    {
      "line": 28,
      "value": "#And yet another action"
    },
    {
      "line": 29,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 30,
      "value": "#And check more outcomes"
    }
  ],
  "line": 33,
  "name": "Log in with valid credential",
  "description": "",
  "id": "validation-of-login-functionality;log-in-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Open the Chrome and Launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter UserName\u003cdiyusername\u003e and Password\u003cdiypassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify the \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "validation-of-login-functionality;log-in-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "diyusername",
        "diypassword",
        "message"
      ],
      "line": 39,
      "id": "validation-of-login-functionality;log-in-with-valid-credential;;1"
    },
    {
      "cells": [
        "\"automation.tester11@mail.com\"",
        "\"Password1\"",
        "\"Welcome\""
      ],
      "line": 40,
      "id": "validation-of-login-functionality;log-in-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "Log in with valid credential",
  "description": "",
  "id": "validation-of-login-functionality;log-in-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Open the Chrome and Launch Application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Enter UserName\"automation.tester11@mail.com\" and Password\"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify the \"Welcome\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Step.open_the_Chrome_and_launch_the_application()"
});
formatter.result({
  "duration": 28543872196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automation.tester11@mail.com",
      "offset": 15
    },
    {
      "val": "Password1",
      "offset": 58
    }
  ],
  "location": "Step.enter_the_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 3223655660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 14
    }
  ],
  "location": "Step.Reset_the_credential(String)"
});
formatter.result({
  "duration": 1689240183,
  "status": "passed"
});
});