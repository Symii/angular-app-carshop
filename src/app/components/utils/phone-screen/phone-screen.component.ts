import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-phone-screen',
  templateUrl: './phone-screen.component.html',
  styleUrl: './phone-screen.component.css',
})
export class PhoneScreenComponent {
  phoneNumber = '123456789';
  copied = false;

  constructor(
    public bsModalRef: BsModalRef,
    private clipboardService: ClipboardService
  ) {}

  copyPhoneNumber() {
    this.clipboardService.copyFromContent(this.phoneNumber);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
      this.closeModal();
    }, 3000); // 3000 = 3 sekundy
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}
