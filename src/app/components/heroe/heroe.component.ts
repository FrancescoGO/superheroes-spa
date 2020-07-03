import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  rutaImagenCasa = '';

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute) {

                this.activatedRoute.params.subscribe(params => {
                  this.heroe = this.heroesService.getHeroe(params.id);
                });

                }

  ngOnInit() {

  }

}
