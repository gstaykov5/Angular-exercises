import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private furnitureService: FurnitureService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', [Validators.required]],
      material: ['', [Validators.nullValidator]],
    });
  }

  get f() {
    return this.form.controls;
  }

  createFurniture() {
    this.furnitureService.createFurniture(this.form.value);
    this.router.navigate(['/furniture/all']);
  }
}
