import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( usuario: User ): string {
    return `${ usuario.urlfoto }`;
  }

}
