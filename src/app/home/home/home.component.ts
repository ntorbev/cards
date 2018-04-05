import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cardConfig = [];
  users: User[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSelect(user: User) {
    this.cardConfig.length = 0;
    this.userService.cards.forEach((card: Card) => {
      if (card.status === user.EmploymentStatus || user.AnnualIncome.substring(1) > card.status.substring(1) || card.status === 'all') {
        this.cardConfig.push(card);
      }
    });
  }
}

