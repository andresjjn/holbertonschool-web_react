"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeBreak = function () {
        return 'Getting a coffe break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary <= 500) {
        return new Teacher();
    }
    else
        return new Director();
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee.workFromHome() === 'Working from home' ? true : false;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    console.log(isDirector(employee)
        ? employee.workDirectorTasks()
        : employee.workTeacherTasks());
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    console.log(todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
    return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
exports.teachClass = teachClass;
teachClass('Math');
teachClass('History');
