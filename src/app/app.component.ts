import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-samples';
  currentRoute: string = '';

  constructor(private router: Router){
    
    router.events.subscribe((event: any) => 
           {
              if (event.url) {
                this.currentRoute = event.url;
              }
           });
    }
}
