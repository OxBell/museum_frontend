import { Component, OnInit } from '@angular/core';
import { GalleriesService } from './galleries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  private galleriesObs$: Observable<any>;
  galleriesList;
  private isLoading = true;

  constructor(
    private galleriesService: GalleriesService
  ) { }

  ngOnInit() {
    this.getAllGaleries();
  }

  getAllGaleries() {
    this.galleriesObs$ = this.galleriesService.getAll();
    this.galleriesObs$.subscribe( res => {
      this.galleriesList = res.json();
      this.isLoading = false;
    });
  }

  getOneGallerie() {
    this.galleriesService.get(1);
  }

  addGallerie() {
    const gallerie = {user_id: 14, name: 'gallerie test1', description: 'description test gallerie 1',
    api_token: 'lDB0cSAW83LqB49MmmP3m2QVeQOGDZxgR0GRp0MX7hXQkRZsmbXEg57L3kIo'};
    this.galleriesService.addOne(gallerie).subscribe( res => {
      this.isLoading = true;
      this.getAllGaleries();
    });
  }

}
