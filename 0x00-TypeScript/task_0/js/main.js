var student1 = {
    firstName: 'Juan',
    lastName: 'Rodriguez',
    age: 22,
    location: 'Medellin'
};
var student2 = {
    firstName: 'Erika',
    lastName: 'Rodriguez',
    age: 18,
    location: 'Medellin'
};
var studentsList = [student1, student2];
var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody = document.createElement('tbody');
var row = tableHead.insertRow(0);
var rowCell1 = row.insertCell(0);
var rowCell2 = row.insertCell(1);
rowCell1.innerHTML = 'firstName';
rowCell2.innerHTML = 'location';
table.append(tableHead);
studentsList.forEach(function (student) {
    var row = tableBody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
table.append(tableBody);
body.append(table);
