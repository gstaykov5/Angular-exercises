import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Furniture from 'src/app/models/model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  furniture: Furniture;
  
  constructor(private route: ActivatedRoute, private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      let id = data.id;
      this.furnitureService.getDetails(id).subscribe((data) => {
        this.furniture = data;
      })
    })
  }

}
