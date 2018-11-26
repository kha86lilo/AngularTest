import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  selectedSide = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService ) {
    this.swService = swService;
    this.activatedRoute = activatedRoute;
   }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parm) => {
          this.characters = this.swService.getCharacters(parm.side);
          this.selectedSide = parm.side;
      }
    );
    this.subscription = this.swService.characterChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.selectedSide);
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
