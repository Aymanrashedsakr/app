import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Interfaces/Icategory';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-Catergoris',
  templateUrl: './Catergoris.component.html',
  styleUrls: ['./Catergoris.component.css']
})
export class CatergorisComponent implements OnInit {

  constructor(private _CategoriesService:CategoriesService) { }
  lodingscreen=false
  allCategories: Icategory[] = [];

  ngOnInit() {
    this.lodingscreen=true
    this._CategoriesService.GetAllCategories().subscribe ({
      next: (response) => {
        console.log(response);
        this.allCategories = response.data;
        this.lodingscreen=false
      },
      error: (error) => {
        console.log(error);
        this.lodingscreen=false
      }
    });
  }

}
