import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  index: number;
  termino = '';

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroe(params.termino);
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx]);
  }

}
