import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure : false
})
export class SortPipe implements PipeTransform {
  transform(ary:number[],args?:any): any {
    return ary.sort((a:number,b:number)=>b-a);
  }
}

