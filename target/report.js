$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/org/ibm/test/Cucumber1/AddTariff.feature");
formatter.feature({
  "name": "To test the add tariff plan functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify the success message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in valid tariff plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLocal\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocalCharges\u003e\",\"\u003cInterCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLocal",
        "FreeInt",
        "FreeSMS",
        "LocalCharges",
        "InterCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "1000",
        "600",
        "300",
        "350",
        "250",
        "600",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the success message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in valid tariff plan details \"1000\", \"600\",\"300\",\"350\",\"250\",\"600\",\"400\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_valid_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.the_user_clicks_submit_button_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user fill in invalid tariff plan details \"\u003cMonthRent\u003e\", \"\u003cFreeLocal\u003e\",\"\u003cFreeInt\u003e\",\"\u003cFreeSMS\u003e\",\"\u003cLocalCharges\u003e\",\"\u003cInterCharges\u003e\",\"\u003cSMSCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "the user should not see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "FreeLocal",
        "FreeInt",
        "FreeSMS",
        "LocalCharges",
        "InterCharges",
        "SMSCharges"
      ]
    },
    {
      "cells": [
        "600",
        "230",
        "200",
        "633",
        "500",
        "",
        "250"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the error message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill in invalid tariff plan details \"600\", \"230\",\"200\",\"633\",\"500\",\"\",\"250\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_invalid_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks submit button in add tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffSteps.the_user_clicks_submit_button_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should not see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_not_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});