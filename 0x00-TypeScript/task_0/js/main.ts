interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Juan',
  lastName: 'Rodriguez',
  age: 22,
  location: 'Medellin',
};

const student2: Student = {
  firstName: 'Erika',
  lastName: 'Rodriguez',
  age: 18,
  location: 'Medellin',
};

const studentsList: Array<Student> = [student1, student2];
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = document.createElement('thead');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');
const row: HTMLTableRowElement = tableHead.insertRow(0);
const rowCell1: HTMLTableCellElement = row.insertCell(0);
const rowCell2: HTMLTableCellElement = row.insertCell(1);

rowCell1.innerHTML = 'firstName';
rowCell2.innerHTML = 'location';

table.append(tableHead);

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = tableBody.insertRow(0);
  const cell1: HTMLTableCellElement = row.insertCell(0);
  const cell2: HTMLTableCellElement = row.insertCell(1);

  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

table.append(tableBody);
body.append(table);
