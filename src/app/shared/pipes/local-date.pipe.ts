import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
  standalone: true
})
export class LocalDatePipe implements PipeTransform {

  transform(date : any): Date {
    if(!date) return date
    date = new Date(date);
    let localOffset = date.getTimezoneOffset() * 60000;
    let localTime = date.getTime();
    date = localTime + localOffset;
    date = new Date(date);
    return date;
  }

}
