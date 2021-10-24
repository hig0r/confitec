import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CriarEditarUsuarioComponent } from './criar-editar-usuario/criar-editar-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UsuariosComponent } from './usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { EscolaridadePipe } from './escolaridade.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'novo', component: CriarEditarUsuarioComponent },
  { path: ':id/editar', component: CriarEditarUsuarioComponent }
];

@NgModule({
  declarations: [
    CriarEditarUsuarioComponent,
    UsuariosComponent,
    EscolaridadePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class UsuariosModule {
}
