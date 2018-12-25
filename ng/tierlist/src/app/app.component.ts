import { Component } from '@angular/core';
import { DataService } from "./services/data.service";

import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tierlist';
  private loading: boolean = true;

  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.getDb().subscribe(() => this.loading = false);
  }
}
