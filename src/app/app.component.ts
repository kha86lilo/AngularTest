import { StarWarsService } from './star-wars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Star Wars App';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }
  ngOnInit(): void {
    this.swService.fetchCharachters();
  }
}
