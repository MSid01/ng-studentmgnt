// StudentController.js
angular.module("studentApp").controller("StudentController", StudentController);

StudentController.$inject["StudentService"];

function StudentController(StudentService) {
  var vm = this;
  vm.students = StudentService.getStudents();
  vm.orderBy = orderBy;
  vm.deleteStudent = deleteStudent;
  vm.showStatus = false;
  vm.doShow = doShow;

  vm.addStudent = addStudent;
  vm.editStudent = editStudent;

  vm.editorEnabled = [];
  vm.enableEditor = enableEditor;
  vm.disableEditor = disableEditor;

  function orderBy(myOrder) {
    vm.ordering = myOrder;
  }

  function deleteStudent(id) {
    StudentService.deleteStudent(id);
  }

  function doShow() {
    vm.showStatus = true;
  }

  function addStudent() {
    var maxId = StudentService.maxId();
    vm.student = {
      id: maxId + 1,
      name: vm.sname,
      address: vm.saddress,
      branch: vm.sbranch,
      mobile: vm.smobile,
    };
    StudentService.addStudent(vm.student);
  }

  function editStudent(
    $index,
    editId,
    editName,
    editAddress,
    editBranch,
    editMobile
  ) {
    vm.student = {
      id: editId,
      name: editName,
      address: editAddress,
      branch: editBranch,
      mobile: editMobile,
    };
    StudentService.editStudent(vm.student);
    vm.disableEditor($index);
  }

  function enableEditor(index) {
    vm.editorEnabled[index] = true;
  }

  function disableEditor(index) {
    vm.editorEnabled[index] = false;
  }
}
