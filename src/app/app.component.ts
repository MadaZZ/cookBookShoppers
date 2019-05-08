import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookBookShoppers';
  loadedType = 'recipe';
  
  onNavigate(type: string){
    this.loadedType = type;
  }

}
