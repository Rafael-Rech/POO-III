import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { alertController } from '@ionic/core';
import { AlertComponent } from 'src/app/common/alert/alert.component';
import Contato from 'src/app/model/entities/Contato';
import { ContatoService } from 'src/app/model/services/contato.service';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  contato : Contato;
  nome : string;
  telefone : string;
  email : string;
  genero : number;
  edicao : boolean = false;
  alertComponent : AlertComponent;

  constructor(
    private actRoute : ActivatedRoute,
    private contatoService : ContatoService,
    private router : Router,
    private firebaseService : FirebaseService
  ) {
    this.alertComponent = new AlertComponent();
  }

  ngOnInit() {
    this.contato = history.state.contato;
    if(this.contato){
      this.nome = this.contato.nome;
      this.telefone = this.contato.telefone;
      this.email = this.contato.email;
      this.genero = this.contato.genero;
    } else {
      console.log("sem contato");
    }
  }

  public voltarParaHome(){
    this.nome = "";
    this.telefone = "";
    this.email = "";
    this.genero = undefined;
    this.router.navigate(['/home']);
  }

  habilitar(){
    this.edicao = ((this.edicao)? false : true);
  }

  async excluir(){
    console.log("Excluindo");
    this.firebaseService.excluir(this.contato)
    .then(()=>{this.router.navigate(['/home'])})
    .catch(err => this.alertComponent.presentAlert("Erro ao excluir contato", err, [{text: 'OK'}]));
    this.router.navigate(['/home']);
  }

  async confirmarExclusao(){
    //Alert de confirmação
    this.alertComponent.presentAlert("Você tem certeza?", "Esta ação é irreversível!",
     [{text: 'Cancelar'},
      { text: 'Excluir',
        handler: ()=>{
          this.excluir();
        }}])
    .catch(err => this.alertComponent.presentAlert("Erro ao excluir contato", err, [{text : 'OK'}]));
  }

  salvar(){
    //Alert de validação
    if(!this.nome || !this.telefone){
      this.alertComponent.presentAlert('Erro ao atualizar', 'Os campos nome e telefone são obrigatórios', [{text : 'Ok'}]);
    } else {
      let novo : Contato = new Contato(this.nome, this.telefone);
      novo.email = this.email;
      novo.genero = this.genero;
      this.firebaseService.editar(this.contato.id, novo);
      this.router.navigate(['/home']);
    }
  }
}
