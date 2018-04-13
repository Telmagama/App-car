import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { carro } from '../../modelos/carro';


@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {

   public carro: carro;
   public acessorios = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {

        this.carro = this.navParams.get('carroSelecionado');
        this.acessorios = [

          { nome:'Freio ABS',preco: 800 },
          { nome: 'Ar-condicionado', preço: 1000 },
          { nome: 'MP3 Player', preco : 500}
        ];
        }
  }


