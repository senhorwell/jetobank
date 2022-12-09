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

    window.open("https://api.whatsapp.com/send?phone=5543999514569&text=*Nome*%3A%20" + name + 
    "%0A*Telefone*%3A%20" + phone 
    + "%0A*Email*%3A%20" + email, '_blank');
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
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
  }
  customOportunities: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
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
