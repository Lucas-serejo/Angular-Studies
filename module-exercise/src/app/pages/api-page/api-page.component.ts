import { Component, OnInit, inject } from '@angular/core';
import { WidgetsModule } from '../../widgets/widgets.module';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-api-page',
  imports: [WidgetsModule],
  templateUrl: './api-page.component.html',
  styleUrl: './api-page.component.css'
})
export class ApiPageComponent {
  private userService = inject(UserService);

  apiUserList: any[] = [];

  apiColumns: string[] = ['name','email', 'phone', 'website'];

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.apiUserList = data;
        console.log('User data fetched successfully:', data); 
      },
      error: (error) => console.error('Error fetching user data:', error)
    });
  }
}
