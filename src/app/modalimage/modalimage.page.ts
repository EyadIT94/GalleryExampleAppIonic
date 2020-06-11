import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalimage',
  templateUrl: './modalimage.page.html',
  styleUrls: ['./modalimage.page.scss'],
})
export class ModalimagePage implements OnInit {

  img:any;

  @ViewChild('slider', {read: ElementRef}) slider: ElementRef;

  sliderOpts ={
    zoom: {
      maxRatio: 3
    }
  }

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean){
    let zoom = this.slider.nativeElement.swiper.zoom;
    if(zoomIn){
      zoom.in();
      console.log("zoomin");
      
    }
    else{
      zoom.out();
      console.log("zoomout");
    }
  }

  close(){
    this.modalController.dismiss();
  }

}
