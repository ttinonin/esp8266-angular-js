import { Component } from '@angular/core';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent {
  status: String = "DESLIGADO"

  setStatus(status: String) {
    this.status = status
  }
}
