import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-error-interceptor-check',
  templateUrl: './error-interceptor-check.component.html',
  styleUrls: ['./error-interceptor-check.component.css'],
})
export class ErrorInterceptorCheckComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      console.log('result !', result);
    });
  }
}
