import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade', 'acoes'];

  constructor(private usuariosService: UsuariosService, private snackBar: MatSnackBar) {
    this.getUsuarios();
  }

  ngOnInit(): void {
  }

  excluir(usuario: Usuario) {
    this.usuariosService.excluir(usuario.id).subscribe(_ => {
      this.getUsuarios();
      this.snackBar.open('Excluido com sucesso!', 'Ok');
    });
  }

  getUsuarios() {
    this.usuarios$ = this.usuariosService.obter();
  }
}
