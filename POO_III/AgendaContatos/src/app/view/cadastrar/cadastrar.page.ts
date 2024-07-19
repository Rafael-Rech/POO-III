import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/common/alert/alert.component';
import Contato from 'src/app/model/entities/Contato';
import { FirebaseService } from 'src/app/model/services/firebase.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  formCadastrar : FormGroup;
  isSubmitted : boolean;
  alertComponent : AlertComponent;

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],
    });
    this.alertComponent = new AlertComponent();
  }

  private reset(){
    this.formCadastrar.value['nome'] = "";
    this.formCadastrar.value['telefone'] = "";
    this.formCadastrar.value['email'] = "";
    this.formCadastrar.value['genero'] = undefined;
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      this.alertComponent.presentAlert('Erro ao cadastrar', 'Todos os campos são obrigatórios', [{text: 'Ok'}]);
      return false;
    } else {
      if(Number.isNaN(parseInt(this.formCadastrar.value['telefone']))){
        this.alertComponent.presentAlert('Erro ao cadastrar', 'Insira um número de telefone válido', [{text: 'Ok'}]);
        return false; 
      }
      this.cadastrar();
      return true;
    }
  }

  public cadastrar(){
    let contato : Contato = new Contato(this.formCadastrar.value['nome'], this.formCadastrar.value['telefone']);
    contato.email = this.formCadastrar.value['email'];
    contato.genero =  this.formCadastrar.value['genero'];
    this.firebaseService.cadastrar(contato).then(()=>{
      this.router.navigate(['/home']);
    }).catch((err) => {
      this.alertComponent.presentAlert('Erro ao cadastrar', 'Erro no Firebase', [{text: 'Ok'}]);
      console.error(err);
    });
    this.reset();
  }

  public voltarParaHome(){
    this.reset();
    this.router.navigate(['/home']);
  }

}
