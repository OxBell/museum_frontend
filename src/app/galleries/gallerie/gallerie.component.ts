import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { GalleriesService } from '../galleries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit {


  private gallerieObs$: Observable<any>;
  private gallerie;
  private isLoading = true;
  private found = false;

  constructor(
    private router: Router,
    private galleriesService: GalleriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.gallerieObs$ = this.galleriesService.get(params['id']);
      this.gallerieObs$.subscribe( res => {
        this.gallerie = res.json();
        this.isLoading = false;
        this.found = true;
      }, err => {
        console.log(err);
        this.isLoading = false;
      });
    });
  }

}
