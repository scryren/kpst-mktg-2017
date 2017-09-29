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
	//$('#privacy-statement-checkbox').css('display','show');

	$('#privacy-statement').append('<div id="privacy-statement-checkbox"><input id="legalCheckbox" name="legalCheckbox" type="checkbox" value="on" data-validation="required" data-validation-depends-on="Marketing_Country__c" data-validation-depends-on-value="Canada, Germany, Australia" data-validation-error-msg="You must agree to Kapost&rsquo;s Terms of Service." data-validation-error-msg-container="#email-error-dialog"><span class="privacy-statement">By submitting this form, I acknowledge and agree to the storing and processing of my personal data by Kapost as described in their <a href="https://kapost.com/privacy-policy/" target="_blank">Privacy Policy</a>, as well as Kapost&rsquo;s use of my contact information to communicate with me regarding Kapost&rsquo;s products, services, and events. I may unsubscribe at any time.</span>');

});


/* ==========================================================================
   Show & Make Checkbox Required If... (CASL)
   ========================================================================== */

	var userExpressCountry = [
		"Canada",
		"Germany",
		"Australia"
	];


	function checkForExpressCountry() {

		var selectedExpressCountry;

		for (var i=0; i<userExpressCountry.length; i++) {

			if ($("[name=Marketing_Country__c]").val()==userExpressCountry[i]) {
				selectedExpressCountry = userExpressCountry[i];
			}

			else {}

		}

		//var legalCheckbox = new LiveValidation('legalCheckbox'); legalCheckbox.add( Validate.Acceptance, {failureMessage: "You must agree to Penton's Terms of Service." } );

		var expressOptIn;

 		if (($("[name=Marketing_Country__c]").val() == selectedExpressCountry) && ($("[name=Marketing_Country__c]").val() != null)) {
			$("#privacy-statement-checkbox").css('display','inline');
			$("#legalCheckbox").attr("data-validation", "required");
			expressOptIn = "Required"; //For Warning
		}

		else {
			$("#privacy-statement-checkbox").css('display','none');
			$("#legalCheckbox").attr("data-validation", "");
			expressOptIn = ""; //For Warning
		}

	}

	$(document).ready(checkForExpressCountry);
	$("[name=Marketing_Country__c]").change(checkForExpressCountry);

});
