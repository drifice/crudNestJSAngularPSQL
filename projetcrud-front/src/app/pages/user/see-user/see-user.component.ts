import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-see-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './see-user.component.html',
  styleUrl: './see-user.component.css'
})
export class SeeUserComponent implements OnInit {
  allUsers !: Observable<any>;
  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'delete'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allUsers = this.userService.getAllUSer();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe();
  }
}
