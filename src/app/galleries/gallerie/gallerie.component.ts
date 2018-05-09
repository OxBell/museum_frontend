import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriesService } from '../galleries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {


  private gallerieObs$: Observable<any>;
  private gallerie;
  private isLoading = true;
  constructor(
    private galleriesService: GalleriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.gallerieObs$ = this.galleriesService.get(params['id']);
      this.gallerieObs$.subscribe( res => {
        this.gallerie = res.json();
        this.isLoading = false;
      });
    });
  }

}
