@tag
Feature: To test the add tariff plan functionality

  Scenario Outline: To verify the success message
    Given The user is in add tariff plan page
    When the user fill in valid tariff plan details "<MonthRent>", "<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<InterCharges>","<SMSCharges>"
    And the user clicks submit button in add tariff plan page
    Then the user should see the success message

    Examples: 
      | MonthRent | FreeLocal | FreeInt | FreeSMS | LocalCharges | InterCharges | SMSCharges |
      |      1000 |       600 |     300 |     350 |          250 |          600 |        400 |

  Scenario Outline: To verify the error message
    Given The user is in add tariff plan page
    When the user fill in invalid tariff plan details "<MonthRent>", "<FreeLocal>","<FreeInt>","<FreeSMS>","<LocalCharges>","<InterCharges>","<SMSCharges>"
    And the user clicks submit button in add tariff plan page
    Then the user should not see the success message

    Examples: 
      | MonthRent | FreeLocal | FreeInt | FreeSMS | LocalCharges | InterCharges | SMSCharges |
      |       600 |       230 |     200 |     633 |          500 |              |        250 |
