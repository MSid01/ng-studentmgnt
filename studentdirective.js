var app = angular.module("studentApp");

	app.directive("studentSearch", studentSearch);
	app.directive("studentDisplay", studentDisplay);
	app.directive("addStudent", addStudent);

function studentSearch(){
	return {
		templateUrl: "studentsearch.htm"
	};
}

function studentDisplay(){
	return {
		templateUrl: "studentdisplay.htm"
	};
}

function addStudent(){
	return {
		templateUrl: "addStudent.htm"
	};
}
