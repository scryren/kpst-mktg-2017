/*
* Version: 1
* Last Updated: 7/19/2017
* Author: Kapost
* URL: http://kapost.com
* Summary: Adds Privacy Policy Statement and Checkbox,
* as well as the requirements for the Privacy Policy
* Statement Checkbox
*/

/* ==========================================================================
   Privacy Policy Statement
   ========================================================================== */

$(document).ready(function () {
	$('#privacy-statement-checkbox').css('display','hide');

	$('#privacy-statement').append('<div id="privacy-statement-checkbox"><input id="legalCheckbox" name="legalCheckbox" type="checkbox" value="on"></div><span class="privacy-statement">By submitting this form, I acknowledge and agree to the storing and processing of my personal data by Kapost as described in their <a href="https://kapost.com/privacy-policy/" target="_blank">Privacy Policy</a>, as well as Kapost&rsquo;s use of my contact information to communicate with me regarding Kapost&rsquo;s products, services, and events.</span>');


/* ==========================================================================
   Show & Make Checkbox Required If... (CASL)
   ========================================================================== */

	var listOfCanadianProvinces = [
		"AB", //Alberta
		"BC", //British Columbia
		"MB", //Manitoba
		"NB", //New Brunswick
		"NL", //Newfoundland and Labrador
		"NT", //Northwest Territories
		"NS", //Nova Scotia
		"NU", //Nunavut
		"ON", //Ontario
		"PE", //Prince Edward Island
		"QC", //Quebec
		"SK", //Saskatchewan
		"YT"  //Yukon
	];


	function checkForCanadian() {

		var selectedCanadianProvince;

		for (var i=0; i<listOfCanadianProvinces.length; i++) {

			if ($("[name=stateOrProvince]").val()==listOfCanadianProvinces[i]) {
				selectedCanadianProvince = listOfCanadianProvinces[i];
			}

			else {}

		}

		var legalCheckbox = new LiveValidation('legalCheckbox'); legalCheckbox.add( Validate.Acceptance, {failureMessage: "You must agree to Penton's Terms of Service." } );

		if ($("[name=country]").val() == "Canada") {
			$("#privacy-statement-checkbox").css('display','inline');
			legalCheckbox.enable()
		}

		else if (($("[name=stateOrProvince]").val() == selectedCanadianProvince) && ($("[name=stateOrProvince]").val() != null)) {
			$("#privacy-statement-checkbox").css('display','inline');
			legalCheckbox.enable()
		}

		else {
			$("#privacy-statement-checkbox").css('display','none');
			legalCheckbox.disable()
		}

	}

	$(document).ready(checkForCanadian);
	$("[name=stateOrProvince], [name=country]").change(checkForCanadian);

});
