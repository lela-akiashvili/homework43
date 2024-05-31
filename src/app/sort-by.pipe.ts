import { Pipe, PipeTransform } from '@angular/core';
import { User,Direction } from './users/users.component';

@Pipe({
  name: 'sortByAge',
  standalone: true
})
export class SortByAgePipe implements PipeTransform {

  transform(users: User[], direction:Direction = 'asc'): User[] {
    return users.sort((a, b) => {
        return direction === 'asc' ? a.age - b.age : b.age - a.age;
      })
  }

}
@Pipe({
  name: 'sortByExp',
  standalone: true
})
export class SortByExpPipe implements PipeTransform {

  transform(users: User[], direction:Direction = 'asc'): User[] {
    return users.sort((a, b) => {
        return direction === 'asc' ? a.experienceYears - b.experienceYears : b.experienceYears - a.experienceYears;
      })
  }

}
@Pipe({
  name: 'sortByFirstName',
  standalone: true
})
export class SortByFirstNamePipe implements PipeTransform {

  transform(users: User[], direction:Direction = 'asc'): User[] {
    return users.sort((a, b) => {
      return direction === 'asc'
      ? a.firstName.localeCompare(b.firstName)
      : b.firstName.localeCompare(a.firstName);
      })
  }

}@Pipe({
  name: 'sortByLastName',
  standalone: true
})
export class SortByLastNamePipe implements PipeTransform {

  transform(users: User[], direction:Direction = 'asc'): User[] {
    return users.sort((a, b) => {
      return direction === 'asc'
      ? a.firstName.localeCompare(b.firstName)
      : b.firstName.localeCompare(a.firstName);
      })
  }

}