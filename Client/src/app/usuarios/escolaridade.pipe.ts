import { Pipe, PipeTransform } from '@angular/core';
import { Escolaridade, escolaridades, escolaridadesNomes } from './usuario.model';

@Pipe({
  name: 'escolaridade'
})
export class EscolaridadePipe implements PipeTransform {

  transform(value: Escolaridade, ...args: unknown[]): string {
    return escolaridadesNomes[escolaridades.indexOf(value)];
  }

}
