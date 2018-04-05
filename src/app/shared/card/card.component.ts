import { Component, Input, Renderer2 } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
    li.selected {
      background-color: red;
    }`]
})
export class CardComponent {
  @Input() config = [];

  constructor(private userService: UserService, private render: Renderer2) {
  }

  onSelect(card: any, cardItem: Card) {
    if (card.target.classList.contains('selected')) {
      this.render.removeClass(card.target, 'selected');
      this.userService.selectedCards = [null, cardItem];
    } else {
      this.render.addClass(card.target, 'selected');
      this.userService.selectedCards = [cardItem];
    }
  }
}
