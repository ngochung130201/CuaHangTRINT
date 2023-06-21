import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
    transform(value: number): string {
        // Check if value is null or undefined
        if (value == null) {
            return '';
        }

        // Format the price
        const formattedPrice = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return formattedPrice + 'đ';
    }
}
