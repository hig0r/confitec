import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {
  }

  obter() {
    return this.http.get<Usuario[]>('/api/usuarios');
  }

  novo(usuario: any) {
    return this.http.post<Usuario>('/api/usuarios', usuario);
  }

  excluir(id: number) {
    return this.http.delete(`/api/usuarios/${id}`);
  }
}
