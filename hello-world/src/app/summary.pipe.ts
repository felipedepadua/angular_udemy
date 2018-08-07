import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?: number){
        if(!value)
            return null;

        // if we dont have the value, we will use 50 as default
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }

}