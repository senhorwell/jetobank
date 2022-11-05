import {Component, ElementRef, ViewChild} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('gfg')
  gfg!: ElementRef;

  onSubmit(method: any){
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const cnpj = (<HTMLInputElement>document.getElementById('cnpj')).value;
    const location = (<HTMLInputElement>document.getElementById('location')).value;
    const know = (<HTMLInputElement>document.getElementById('know')).value;

    window.open("https://api.whatsapp.com/send?phone=5543999514569&text=*Nome*%3A%20" + name + 
    "%0A*Telefone*%3A%20" + phone 
    + "%0A*Email*%3A%20" + email 
    + "%0A*CNPJ*%3A%20" + cnpj 
    + "%0A*Cidade/Estado*%3A%20" + location 
    + "%0A*Por onde conheceu a Jeto*%3A%20" + know, '_blank');
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 9
      }
    },
  }
  customFeedback: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
  }
}
