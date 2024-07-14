import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Car {
  name: string;
  mileage: string;
  price: number;
  fuel: string;
  transmission: string;
  year: number;
  engine: string;
  max_power: string;
  torque: string;
  seats: number;
}

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
})
export class CompareComponent implements OnInit {
  compareList: Car[] = [];

  carFeatures = [
    { title: 'Mileage', key: 'mileage' },
    { title: 'Price', key: 'price' },
    { title: 'Fuel', key: 'fuel' },
    { title: 'Transmission', key: 'transmission' },
    { title: 'Year', key: 'year' },
    { title: 'Engine', key: 'engine' },
    { title: 'Max Power', key: 'max_power' },
    { title: 'Torque', key: 'torque' },
    { title: 'Seats', key: 'seats' },
  ];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.compareList = navigation.extras.state['compareList'];
    }
  }

  ngOnInit(): void {
    if (!this.compareList.length) {
      this.router.navigate(['/results']);
    }
  }
}
