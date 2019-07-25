package org.ibm.test.Cucumber1;

import cucumber.api.java.en.Given;

public class HomePageSteps {

	@Given("the user in add customer page")
	public void x() {
		HomePage h = new HomePage();
		h.getLnk_addCustomer().click();
	}
		
		@Given("The user is in add tariff plan page")
		public void the_user_is_in_add_tariff_plan_page() {
			HomePage h = new HomePage();
			h.getLnk_addTariffPlan().click();
		}
	}
