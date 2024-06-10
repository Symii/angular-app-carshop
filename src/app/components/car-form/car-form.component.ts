import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CarFormService } from '../../services/car-form.service';

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
    private carFormService: CarFormService
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
          Validators.max(999999)
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
    }
    window.scrollTo(0, 0);
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
