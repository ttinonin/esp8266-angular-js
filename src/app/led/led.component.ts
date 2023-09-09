import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent {
  status: String = "DESLIGADO"

  constructor(private http: HttpClient) {
    
  }

  setStatus(status: String) {
    this.status = status
  }

  ligaLed() {
    this.http.get(`${"http://localhost:3000"}/ligar-led`)
      .subscribe((res) => this.setStatus("LIGADO"));
  }

  desligaLed() {
    this.http.get(`${"http://localhost:3000"}/desligar-led`)
      .subscribe((res) => this.setStatus("DESLIGADO"));
  }
}
