import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeMoney'
})
export class TipeMoneyPipe implements PipeTransform {

  transform(value: number, tipo: string): string {
    if(tipo=='usd'){
      return '$ '+value
    }else if(tipo=='eur'){
      return '€ '+value
    } 
    else{
      return ''
    }
  }

}
