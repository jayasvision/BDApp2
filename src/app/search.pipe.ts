import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
       let filter = args;
       return filter ? value.filter(user => user.bloodGroup.indexOf(filter) != -1):value;
    }

}
	