import { Component } from '@angular/core';
import { ModalimagePage } from '../modalimage/modalimage.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageSrc:any[]=[
    {
      "src":"https://www.xda-developers.com/files/2017/07/Google-Photos-Feature-Image-with-Shadow-Blue-Grey.png"
    },
    {
      "src":"https://www.xda-developers.com/files/2017/07/Google-Photos-Feature-Image-with-Shadow-Blue-Grey.png"
    },
    {
      "src":"https://www.xda-developers.com/files/2017/07/Google-Photos-Feature-Image-with-Shadow-Blue-Grey.png"
    }
  ];

  sliderOpts = {
    zoom: false,
    slidesPerView: 1,
    centeredSlides: true,
  };

  constructor(private modalController: ModalController) { }


  openPreview(img){
    this.modalController.create({
      component: ModalimagePage,
      componentProps: {
        img: img
      }
    }).then(modal => modal.present());
  }

}
