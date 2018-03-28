import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { carro } from '../../modelos/carro';
import {  HttpErrorResponse } from '@angular/common/http';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {

   public carros: carro[];

  constructor(public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private _CarroServiceProvider: CarrosServiceProvider ) {}

    ionViewDidLoad() {
      let loading = this._loadingCtrl.create({
        content: 'Carregando carros...'
       });

       loading.present();


     this._CarroServiceProvider.lista()
           .subscribe(
             (carro) => {
              this.carros = carro;

              loading.dismiss();
             },
             (err: HttpErrorResponse) => {
               console.log(err);

               loading.dismiss();

               this._alertCtrl.create({
                title: 'Falha na conexão',
                subTitle: 'Não possível carregar a lista de carros. Tente novamente mais tarde!',
                buttons: [
                  { text: 'Ok' }
                ]
               }).present();
             }
           );
    }
}
