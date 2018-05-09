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

  constructor(
    private galleriesService: GalleriesService
  ) { }

  ngOnInit() {
    this.galleriesObs$ = this.galleriesService.getAll();
    this.galleriesObs$.subscribe( res => {
      this.galleriesList = res.json();
    });
  }

  getOneGallerie() {
    this.galleriesService.get(1);
  }



}
