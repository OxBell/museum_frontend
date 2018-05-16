import { Component, OnInit } from '@angular/core';
import { GalleriesService } from './galleries.service';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {

  private galleriesObs$: Observable<any>;
  galleriesList;
  private isLoading = true;
  private showForm = false;

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

  showAddForm() {
    this.showForm = true;
  }

  hideAddForm() {
    this.showForm = false;
  }

  onSubmit(form: NgForm) {
    const gallerie = {user_id: 14, name: form.value.name, description: form.value.description,
    api_token: 'lDB0cSAW83LqB49MmmP3m2QVeQOGDZxgR0GRp0MX7hXQkRZsmbXEg57L3kIo'};
    this.galleriesService.addOne(gallerie).subscribe( res => {
      this.isLoading = true;
      this.hideAddForm();
      this.getAllGaleries();
    });
  }

}
