export interface DirectorInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeBreak(): string {
    return 'Getting a coffe break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary <= 500) {
    return new Teacher();
  } else return new Director();
}

export function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return employee.workFromHome() === 'Working from home' ? true : false;
}

export function executeWork(
  employee: DirectorInterface | TeacherInterface
): void {
  console.log(
    isDirector(employee)
      ? employee.workDirectorTasks()
      : employee.workTeacherTasks()
  );
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  console.log(todayClass === 'Math' ? 'Teaching Math' : 'Teaching History');
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
