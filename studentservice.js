angular
	.module("studentApp")
	.factory("StudentService", StudentService)

function StudentService(){
	var oStudent = {};
	oStudent.getStudents = getStudents;
	oStudent.addStudent = addStudent;
	oStudent.editStudent = editStudent;
	oStudent.deleteStudent = deleteStudent;
	oStudent.maxId = maxId;

	var students = [{
		id: 1,
		name: 'Resma',
		address: 'Samakhusi',
		class: 1,
		mobile: '9840-123456' 
	},
	{
		id: 2,
		name: 'Nabin',
		address: 'Biratnagar',
		class: 8,
		mobile: '9840-343536' 
	},
	{
		id: 3,
		name: 'Asha',
		address: 'Baneshwor',
		class: 6,
		mobile: '9865-124324'
	},
	{
		id: 4,
		name: 'Ayush',
		address: 'Dhumbarahi',
		class: 7,
		mobile: '9840-129474'
	},
	{
		id: 5,
		name: 'Arjun',
		address: 'Dang',
		class: 10,
		mobile: '9841-124385' 
	}];

	function getStudents(){
		return students;
	}

	function addStudent(student){
		students.push(student);
	}

	function editStudent(student){
		debugger;
		for(var i = 0; i< students.length; i++){
			if(students[i].id == student.id){
				students[i].name = student.name;
				students[i].address = student.address;
				students[i].class = student.class;
				students[i].mobile = student.mobile;
				break;
			}
		}
	}

	function deleteStudent(sid){
		for(var i = 0; i< students.length; i++){
			if(students[i].id == sid){
				var deleteUser = students[i].name;
				var isconfirm = confirm("Are you sure to delete " + deleteUser);
				if(isconfirm){
					students.splice(i, 1);
					alert(deleteUser +" has been deleted successfully");
				}
				break;
			}
		}
	}

	function maxId(){
		// var max = Math.max(...students.id);
		var max = 0;
		for(var i = 0; i< students.length; i++){
			if(students[i].id > max){
				max = students[i].id;
			}
		}
		return max;
	}

	return oStudent;
}