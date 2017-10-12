/*
* Version: 1
* Last Updated: 9/27/2017
* Author: Kapost
* URL: http://www.kapost.com
* Summary: Displays Job Role based on
* the Job Function selected by the user.
*/

/* ==========================================================================
   Job Function
   ========================================================================== */

//Create the function populateJobFunction
function populateJobFunction() {

alert("populateJobFunction ran");

	//Create the variable optionsJobFunction to equal the following
	var optionsJobFunction = document.kapostmktoform.Job_Function__c;

	//Set optionsJobFunction to be empty
	optionsJobFunction.options.length = 0;

	//Populate	the select ID called "Job_Function__c" with the following options
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Department...', '');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Accounting');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Administration');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Customer Service');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Engineering');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Finance');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Human Resources');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Information Technology');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Legal');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Marketing');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Product');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Purchasing');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Research and Development');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Sales');
	optionsJobFunction.options[optionsJobFunction.options.length] = new Option('Other');
}

/* ==========================================================================
   Job Role
   ========================================================================== */

//Create the function populateJobRole with an argument called "o"
function populateJobRole(o) {

	//var jobFunctionToken = "{{lead.Job Role}}";

	//Create the variable optionsJobRole to equal the following
	var optionsJobRole = document.kapostmktoform.Job_Role__c;

	//Set optionsJobRole to be empty
	optionsJobRole.options.length = 0;

	//Hide the <div> called "BTS" if the Business Type Primary is any of the following
		if (o !== "Marketing" || o !== "Sales" || o !== "Finance" || o !== "Accounting" || o !== "Purchasing")	{
			document.getElementById('JR').style.display = "None";
			//optionsJobRole.options[optionsJobRole.options.length] = new Option('Other'); //Adds "Other"
			//document.getElementById("Job_Role__c").value = 'Other'; //Selects "Other"
	}


	//Populatethe select ID called "Job_Role__c" with the following options	if the Job Function (aka Department) equals what "o" equals
	if (o == "Marketing") {
		document.getElementById('JR').style.display = "";
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Job Role...', '');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Business Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Content Marketer');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Copywriter');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Corporate Communications');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Creative');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Demand Generation');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Editor');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Event Management');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Field Marketing');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Intern');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Marketing Analyst');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Marketing Automation');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Marketing Leadership');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Marketing Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Product Marketer');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Project Manager');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Public Relations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Sales Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('SEO');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Social');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Other');

		document.getElementById("Job_Role__c").value = "";
	}

	if (o == "Sales") {
		document.getElementById('JR').style.display = "";
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Job Role...', '');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Business Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Demand Generation');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Sales Leadership');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Sales Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Sales Representative');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Other');

		document.getElementById("Job_Role__c").value = "";
	}


	if (o == "Accounting" || o == "Finance" || o == "Purchasing") {
		document.getElementById('JR').style.display = "";
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Job Role...', '');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Accounts Payable');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Business Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Marketing Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Procurement');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Sales Operations');
		optionsJobRole.options[optionsJobRole.options.length] = new Option('Other');

		document.getElementById("Job_Role__c").value = "";
	}


}

/* ==========================================================================
   Execute
   ========================================================================== */
	 $(document).ready(function () {

		 //Populate the select ID called "Job_Function__c" with the options from the external file
		 populateJobFunction(document.kapostmktoform.Job_Function__c.options[document.kapostmktoform.Job_Function__c.selectedIndex].value);
	 })
