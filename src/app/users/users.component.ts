import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SortByAgePipe, SortByExpPipe, SortByFirstNamePipe, SortByLastNamePipe } from '../sort-by.pipe';
export interface User {
  firstName: string;
  lastName: string;
  age: number;
  experienceYears: number;
}
export type SortBy = 'age' | 'experienceYears' | 'firstName' | 'lastName';
export type Direction = 'asc' | 'desc';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule, SortByAgePipe,SortByExpPipe,SortByFirstNamePipe,SortByLastNamePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})


/*ოთხი options რომ იყო, მათზე pipe-ebi ავაწყვე, როგორც წინა ლექციის ბოლოს ახსენე evershop-ის მაგალითზე. მაგრამ რახან რამდენიმე იყო ერთდროულად @switch გამოვიყენე html-ში,რაც არ ვიცი რამედენად კარგი გამოსავალია. საჩვენებლად ორი ფაიფი გავიტანე მარტო html-ში და ორი ისე დავტოვე როგორ თავიდან მქონდა გაკეთებული. იქნებ დამიზუსტო რომელი ვერსია ჯობია სამომავლოდ ჩემი პროექტის ასაწყობად?

კიდე იცი რა მაინტერესებს, ბოლოს წინა ორ დავალებაზე ფიდბექში მეწერა, რომ @For არასწორად ვიყენებდი და თუ პრობლემა არაა, რომ დამიზუსტო რაში მაქ შეცდომა? ზუსტად ვერ ვიჭერ სად მეპარება ხარვეზი. ან იგივე შეცდომას ამ დავალებაშიც ხომ არ ვუშვებ?*/


export class UsersComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  sortBy: SortBy = 'age';
  direction: Direction = 'asc';

  users: User[] = [
    {
      firstName: 'a',
      lastName: 'p',
      age: 6,
      experienceYears: 1,
    },
    {
      firstName: 'b',
      lastName: 'j',
      age: 5,
      experienceYears: 2,
    },
    {
      firstName: 'c',
      lastName: 'cr',
      age: 3,
      experienceYears: 3,
    },
    {
      firstName: 'd',
      lastName: 's',
      age: 9,
      experienceYears: 4,
    },
  ];
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const sortBy = params.get('sortBy') as SortBy;
      const direction = params.get('direction') as Direction | null;
      if (sortBy && direction) {
        this.sortBy = sortBy;
        this.direction = direction;
        console.log(direction);
        console.log(sortBy);
        this.users = this.users.sort((a, b) => {
      //     if (sortBy === 'age') {
      //       return direction === 'asc' ? a.age - b.age : b.age - a.age;
      //     }
      //  else  if (sortBy === 'experienceYears') {
      //       return direction === 'asc'
      //         ? a.experienceYears - b.experienceYears
      //         : b.experienceYears - a.experienceYears;
      //     }
      //   else  
        if (sortBy === 'firstName') {
            return direction === 'asc'
              ? a.firstName.localeCompare(b.firstName)
              : b.firstName.localeCompare(a.firstName);
          }
          else{
            return direction === 'asc'
              ? a.lastName.localeCompare(b.lastName)
              : b.lastName.localeCompare(a.lastName);
          }
        });
      }
    });
  }

  onFormChange() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { sortBy: this.sortBy, direction: this.direction },
    });
  }
}
