import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent {
  @Input() car: any;
  ngOnInit() {
    console.log('Car details:', this.car);
  }
  constructor(public activeModal: NgbActiveModal) {}
}
