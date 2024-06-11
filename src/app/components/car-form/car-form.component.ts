import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarFormService } from '../../services/car-form.service';
import { AnnouanceService } from '../../services/annouance.service';
import { Router } from '@angular/router';
import { Customer } from '../../common/customer';
import { CarEngine } from '../../common/car-engine';
import { Car } from '../../common/car';
import { AnnouanceCar } from '../../common/annouance-car';
import { Annouance } from '../../common/annouance';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css',
})
export class CarFormComponent {
  productionYears: number[] = [];
  checkoutFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carFormService: CarFormService,
    private annouanceService: AnnouanceService,
    private router: Router
  ) {
    this.checkoutFormGroup = this.formBuilder.group({
      mainFeatures: this.formBuilder.group({
        damaged: new FormControl('', [Validators.required]),
        imported: new FormControl('', [Validators.required]),
      }),
      basic: this.formBuilder.group({
        vin: new FormControl('', [
          Validators.required,
          Validators.minLength(17),
          Validators.maxLength(17),
        ]),
        mileage: new FormControl('', [
          Validators.required,
          Validators.min(0),
          Validators.max(999999),
        ]),
        registrationNumber: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      }),
      technical: this.formBuilder.group({
        productionYear: new FormControl('', [Validators.required]),
        brand: new FormControl('', [Validators.required]),
        model: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        fuelType: new FormControl('', [Validators.required]),
        horsePower: new FormControl('', [
          Validators.required,
          Validators.pattern('^([1-9][0-9]{2,3})$'),
        ]),
        capacity: new FormControl('', [
          Validators.required,
          Validators.pattern('^([1-9][0-9]{3})$'),
        ]),
        gearType: new FormControl('', [Validators.required]),
        bodyType: new FormControl('', [Validators.required]),
        color: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
      }),
      other: this.formBuilder.group({
        image: new FormControl('', [Validators.required]),
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(40),
        ]),
        price: new FormControl('', [Validators.required, Validators.min(1000)]),
      }),
    });
  }

  ngOnInit(): void {
    this.carFormService.getCarYears().subscribe((data) => {
      this.productionYears = data;
    });
  }

  onSubmit() {
    console.log('Handling the submit button');
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      window.scrollTo(0, 0);
      return;
    }

    let customer: Customer = new Customer(
      1,
      'Michał',
      'Nowak',
      'michal@gmail.com'
    );
    const technical = this.checkoutFormGroup.controls['technical'].value;
    const other = this.checkoutFormGroup.controls['other'].value;
    const mainFeatures = this.checkoutFormGroup.controls['mainFeatures'].value;

    const horsePower = technical.horsePower;
    const capacity = technical.capacity;
    const fuelType = technical.fuelType;
    let carEngine: CarEngine = new CarEngine(
      '2.0 TDI',
      horsePower,
      capacity,
      fuelType,
      new Date()
    );
    const brand = technical.brand;
    const model = technical.model;
    const yearProduced = technical.yearProduced;
    const mileage = technical.mileage;
    const gearType = technical.gearType;
    const price = other.price;
    const color = other.color;
    const description = other.description;
    const damaged = mainFeatures.damaged;

    let car: AnnouanceCar = new AnnouanceCar(
      brand,
      model,
      price,
      yearProduced,
      mileage,
      gearType,
      color,
      damaged,
      description
    );
    let annouance: Annouance = new Annouance(carEngine, customer, car);

    this.annouanceService.addAnnouance(annouance).subscribe({
      next: (response) => {
        this.router.navigateByUrl(response.annouanceLink);
        scrollTo(0, 0);
      },
      error: (err) => {
        console.log(`Error: ${err.message}`);
      },
    });
  }
  get damaged() {
    return this.checkoutFormGroup.get('mainFeatures.damaged');
  }
  get imported() {
    return this.checkoutFormGroup.get('mainFeatures.imported');
  }

  get vin() {
    return this.checkoutFormGroup.get('basic.vin');
  }
  get mileage() {
    return this.checkoutFormGroup.get('basic.mileage');
  }
  get registrationNumber() {
    return this.checkoutFormGroup.get('basic.registrationNumber');
  }

  get productionYear() {
    return this.checkoutFormGroup.get('technical.productionYear');
  }
  get brand() {
    return this.checkoutFormGroup.get('technical.brand');
  }
  get model() {
    return this.checkoutFormGroup.get('technical.model');
  }
  get fuelType() {
    return this.checkoutFormGroup.get('technical.fuelType');
  }
  get horsePower() {
    return this.checkoutFormGroup.get('technical.horsePower');
  }
  get capacity() {
    return this.checkoutFormGroup.get('technical.capacity');
  }
  get gearType() {
    return this.checkoutFormGroup.get('technical.gearType');
  }
  get bodyType() {
    return this.checkoutFormGroup.get('technical.bodyType');
  }
  get color() {
    return this.checkoutFormGroup.get('technical.color');
  }

  get image() {
    return this.checkoutFormGroup.get('other.image');
  }
  get title() {
    return this.checkoutFormGroup.get('other.title');
  }
  get description() {
    return this.checkoutFormGroup.get('other.description');
  }
  get price() {
    return this.checkoutFormGroup.get('other.price');
  }
}
