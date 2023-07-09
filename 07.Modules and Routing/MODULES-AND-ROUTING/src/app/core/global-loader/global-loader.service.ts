import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  isHidden = true;

  showLoder() {
    this.isHidden = false;
  }

  hideLoader() {
    this.isHidden = true;
  }
}
