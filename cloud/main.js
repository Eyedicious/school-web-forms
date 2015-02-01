
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("makeFormulier", function(request, response){
	console.log("Yay!");
	response.success();
});

Parse.Cloud.define("makeCategory", function(request, response){
	var Category = Parse.Object.extend("category");
	var category = new Category();
	response.success(category);
});

Parse.Cloud.define("saveFormulier", function(request, response){

});

Parse.Cloud.define("getFormulier", function(request, response){

});

Parse.Cloud.define("getFormuliers", function(request, response){

});