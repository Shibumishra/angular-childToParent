import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'partentToChild';

  persons: any[] = [
    { name: 'Darwish', age: 30, country: 'France' },
    { name: 'Khaled', age: 27, country: 'Egypt' },
    { name: 'Jaco', age: 45, country: 'Canada' },
    { name: 'Malek', age: 6, country: 'Canada' },
    { name: 'Esraa', age: 25, country: 'Egypt' },
    { name: 'Sarah', age: 30, country: 'Uk' },

  ];

  Arr = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
}
