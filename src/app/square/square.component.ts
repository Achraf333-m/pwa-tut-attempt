import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="btn">{{ value }}</button>
  `,
  styles: [`.btn {
    width: 100%;
    height: 100%;
    font-size: 44px
  }`]
})
export class SquareComponent {
  @Input() value!: 'X'|'o'
}
