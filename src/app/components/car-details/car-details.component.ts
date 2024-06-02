import { Component } from '@angular/core';
import { Car } from '../../common/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
  theCar: Car | undefined;

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCar();
    this.loadScript('../../../assets/js/gallery-slide.js');
  }

  loadScript(src: string): void {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // console.log('Script loaded successfully.');
    };
    document.body.appendChild(script);
  }

  getCar() {
    if (!this.route.snapshot.paramMap.has('id')) {
      return;
    }
    let id: string = this.route.snapshot.paramMap.get('id')!;

    this.carService.getCarById(+id).subscribe((data: any) => {
      this.theCar = data;
    });
  }
}
