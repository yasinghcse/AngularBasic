var module = angular.module("toDoApp",[]);
module.controller("toDoCtrl",toDoCtrl);

function toDoCtrl() {
	this.taskList = [];
	this.addTask = function(task){
		this.taskList.push(task);	
		this.inputTask="";	
	}
	this.removeTask=function(task){
		var index = this.taskList.lastIndexOf(task);
		this.taskList.splice(index,1);
	}
	this.updateTask=function(index,task){
		this.taskList.splice(index,1,task);
	}
	this.editMe=false;
	this.editTask= function(){
		this.editMe=true;
	}
	this.doneTask= function(){
		this.editMe=false;
	}
}