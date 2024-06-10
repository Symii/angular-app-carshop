import { Component } from '@angular/core';
import { Car } from '../../common/car';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PhoneScreenComponent } from '../utils/phone-screen/phone-screen.component';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
  theCar: Car | undefined;
  modalRef: BsModalRef | undefined;
  linkCopied: boolean = false;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private clipboardService: ClipboardService
  ) {}

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

  displayPhoneNumber() {
    this.modalRef = this.modalService.show(PhoneScreenComponent);
  }

  copyLink() {
    const linkToCopy: string = window.location.href;
    this.clipboardService.copyFromContent(linkToCopy);
    this.linkCopied = true;
    setTimeout(() => {
      this.linkCopied = false;
    }, 3000);
  }
}
