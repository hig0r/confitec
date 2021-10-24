import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios$ = this.usuariosService.obter();
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade'];

  constructor(private usuariosService: UsuariosService) {
  }

  ngOnInit(): void {
  }

}
