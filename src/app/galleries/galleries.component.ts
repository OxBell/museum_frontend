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
      console.log(this.galleriesList, res.json());
      this.isLoading = false;
    });
  }

  getOneGallerie() {
    this.galleriesService.get(1);
  }

  addGallerie() {
    console.log('add gallerie component');
    const gallerie = {user_id: 11, name: 'gallerie test 6', description: 'description test gallerie 6',
    api_token: 'Gc9upKk2jvtgGSwQiAzvX6i4fmVNsPMNDbX8Gtirp6Tm6our4lh4l7sGM6rD'};
    this.galleriesService.addOne(gallerie);
    this.getAllGaleries();
  }

}
