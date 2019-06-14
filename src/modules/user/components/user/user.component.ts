import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/user-interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.userService.fetchUserById(userId).subscribe((user: UserInterface) => {
      this.user = user;
    });
  }
}
