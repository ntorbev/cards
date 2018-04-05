import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  selectedCardSubject = new Subject();
  cardCreditSum: number;

  private _selectedCards: Card[] = [];

  get selectedCards(): Card[] {
    return this._selectedCards;
  }

  set selectedCards(value: Card[]) {
    value[0] ? this._selectedCards.push(value[0]) : this._selectedCards.splice(this._selectedCards.indexOf(value[1], 1));
    this.cardCreditSum = 0;
    if (this.selectedCards.length > 1) {
      this.selectedCards.forEach((x: Card) => {
        this.cardCreditSum += +x.CreditAvailable.substring(1);
      });
    }
    this.selectedCardSubject.next(this.selectedCards);
  }

  private _users: User[] = [{
    Title: 'Mr',
    FirstName: 'Ollie',
    LastName: 'Murphree',
    DateOfBirth: '01/07/1970',
    AnnualIncome: '£34000',
    EmploymentStatus: 'Full Time Employment',
    HouseNumber: '700',
    Postcode: 'BS14 9PR',
  }, {
    Title: 'Miss',
    FirstName: 'Elizabeth',
    LastName: 'Edmundson',
    DateOfBirth: '29/06/1984',
    AnnualIncome: '£17000',
    EmploymentStatus: 'Student',
    HouseNumber: '177',
    Postcode: 'PH12 8UW'
  }, {
    Title: 'Mr',
    FirstName: 'Trevor',
    LastName: 'Rieck',
    DateOfBirth: '07/09/1990',
    AnnualIncome: '£15000',
    EmploymentStatus: 'Part Time Employed',
    HouseNumber: '343',
    Postcode: 'TS25 2NF'
  }];

  get users(): User[] {
    return this._users;
  }

  private _cards: Card[] = [{
    title: 'Student Life Card',
    status: 'Student',
    Apr: '18.9%',
    BalanceTransferOfferDuration: '0 months',
    PurchaseOfferDuration: '6 Months',
    CreditAvailable: '£1200'
  }, {
    title: 'Anywhere Card',
    status: 'all',
    Apr: '33.9%',
    BalanceTransferOfferDuration: '0 months',
    PurchaseOfferDuration: '0 Months',
    CreditAvailable: '£300'
  }, {
    title: 'Liquid Card',
    status: '£16000',
    Apr: '33.9%',
    BalanceTransferOfferDuration: '12 months',
    PurchaseOfferDuration: '6 Months',
    CreditAvailable: '£3000'
  }];

  get cards(): Card[] {
    return this._cards;
  }


}
