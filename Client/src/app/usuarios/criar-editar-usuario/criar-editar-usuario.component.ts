import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { escolaridades } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-criar-editar-usuario',
  templateUrl: './criar-editar-usuario.component.html',
  styleUrls: ['./criar-editar-usuario.component.scss']
})
export class CriarEditarUsuarioComponent implements OnInit {
  form: FormGroup;
  escolaridades = escolaridades;
  id?: number;

  constructor(fb: FormBuilder, private usuariosService: UsuariosService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router) {
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

  get editando() {
    return !!this.id;
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')! || undefined;

    if (this.editando)
      this.usuariosService.obterPorId(this.id!).subscribe(u => {
        this.form.patchValue(u);
      });
  }

  enviar() {
    if (this.editando) {
      this.usuariosService.alterar(this.id!, this.form.value).subscribe(_ => {
        this.snackBar.open('Usuário alterado com sucesso!', 'Ok');
        this.voltar();
      });
    } else {
      this.usuariosService.novo(this.form.value).subscribe(_ => {
        this.snackBar.open('Usuário criado com sucesso!', 'Ok');
        this.voltar();
      });
    }
  }

  nascimentoValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    if (control.value > new Date()) return { dataInvalida: true };
    return null;
  }

  voltar() {
    this.router.navigateByUrl('usuarios');
  }
}
