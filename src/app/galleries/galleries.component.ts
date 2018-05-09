import { Component, OnInit } from '@angular/core';
import { GalleriesService } from './galleries.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.css']
})
export class GalleriesComponent implements OnInit {

  private galleriesObs$: Observable<any>;
  galleriesList;
  private isLoading = true;

  constructor(
    private galleriesService: GalleriesService
  ) { }

  ngOnInit() {
    this.galleriesObs$ = this.galleriesService.getAll();
    this.galleriesObs$.subscribe( res => {
      this.galleriesList = res.json();
      this.isLoading = false;
    });
  }

  getOneGallerie() {
    this.galleriesService.get(1);
  }



}
