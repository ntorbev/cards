import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../core/user.service';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styles: [`
    td {
      padding: 5px;
    }

    .total td {
      font-weight: bold;
    }

    .total td:first-child {
      text-align: right;
    }
  `]
})
export class CardDetailsComponent implements OnInit, OnChanges {
  details = [];

  constructor(public userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.userService.selectedCardSubject.subscribe((x: Card[]) => {
      this.details = x;
    });
  }

}
