import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserInterface } from '../../interfaces/user-interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
   
    this.fetchUsers(1);
    this.fetchPagination();
  }

  fetchUsers(page) {
   
    this.userService.fetchUsers(page).subscribe(dataResp => {
     this.userList = dataResp;
     console.log(dataResp);
     this.pagesCount = dataResp.total_pages;
    });
  }
  fetchPagination() {
   
    this.userService.fetchPaginationInfo().subscribe(dataResp => {
     this.pagesCount = dataResp.total_pages;
    });
  }

  pageChanged(event: PageEvent): void {
    console.log(event.pageIndex);
    let page: number = event.pageIndex + 1;
    this.fetchUsers(page)
    this.fetchPagination();
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
