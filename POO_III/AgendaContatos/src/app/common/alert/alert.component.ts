import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent  implements OnInit {
  private alertController : AlertController;
  constructor() {
    this.alertController = new AlertController();
  }

  ngOnInit() {

  }

  public async presentAlert(subHeader : string, message : string, buttons : Array<any>) {
    let exc = false;
    const alert = await this.alertController.create({
      header: 'Agenda de contatos',
      subHeader: subHeader,
      message: message,
      buttons: buttons
      /*buttons: buttons.map(buttonText => ({
        text : buttonText,
        handler: (data) =>{
          if(buttonText === "Excluir"){
            exc = true;
          }
        }
      }))*/,
    });

    await alert.present();
    return exc;
  }

}
