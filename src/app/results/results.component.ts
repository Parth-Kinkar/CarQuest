import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { Router } from '@angular/router';

interface Car {
  name: string;
  mileage: string;
  price: number;
  fuel: string;
  transmission: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  filteredCars: Car[] = [];
  allCars: Car[] = [];
  selectedCar: any = null;
  compareList: Car[] = [];
  maxCompare = 3;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const name = params['name'] || '';
      const fuel = params['fuel'] || '';
      const price = params['price'] || '';
      const transmission = params['transmission'] || '';

      this.http.get<Car[]>('http://localhost:3000/car').subscribe((cars) => {
        this.allCars = cars;
        this.filterCars(name, fuel, price, transmission);
      });
    });
  }

  openDialog(car: any) {
    const modalRef = this.modalService.open(CarDetailsComponent);
    modalRef.componentInstance.car = car;
  }

  addToCompare(car: Car): void {
    if (this.compareList.length < this.maxCompare) {
      this.compareList.push(car);
    } else {
      alert(`You can compare a maximum of ${this.maxCompare} cars.`);
    }
  }

  compareCars(): void {
    this.router.navigate(['/compare'], {
      state: { compareList: this.compareList },
    });
  }

  filterCars(
    name: string,
    fuel: string,
    price: string,
    transmission: string
  ): void {
    this.filteredCars = this.allCars;

    if (name) {
      this.filteredCars = this.filteredCars.filter((car) =>
        car.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    if (fuel) {
      this.filteredCars = this.filteredCars.filter(
        (car) => car.fuel.toLowerCase() === fuel.toLowerCase()
      );
    }
    if (price) {
      const [minPrice, maxPrice] = price
        .split('-')
        .map((price) => parseFloat(price));
      this.filteredCars = this.filteredCars.filter(
        (car) => car.price >= minPrice && car.price <= maxPrice
      );
    }
    if (transmission) {
      this.filteredCars = this.filteredCars.filter(
        (car) => car.transmission.toLowerCase() === transmission.toLowerCase()
      );
    }
  }
}
