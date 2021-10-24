import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { escolaridades} from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criar-editar-usuario',
  templateUrl: './criar-editar-usuario.component.html',
  styleUrls: ['./criar-editar-usuario.component.scss']
})
export class CriarEditarUsuarioComponent implements OnInit {
  form: FormGroup;
  escolaridades = escolaridades;

  constructor(fb: FormBuilder, private usuariosService: UsuariosService, private snackBar: MatSnackBar) {
    this.form = fb.group({
      nome: '',
      sobrenome: '',
      email: ['', Validators.email],
      dataNascimento: ['', [this.nascimentoValidator, Validators.required]],
      escolaridade: ['', Validators.required]
    });
  }

  get dataNascimento() {
    return this.form.get('dataNascimento')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  ngOnInit(): void {
  }

  enviar() {
    this.usuariosService.novo(this.form.value).subscribe(_ => {
      this.snackBar.open('Usuário criado com sucesso!', 'Ok');
    });
  }

  nascimentoValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    if (control.value > new Date()) return { dataInvalida: true };
    return null;
  }
}
