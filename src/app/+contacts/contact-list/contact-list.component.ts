import { Component, Input } from '@angular/core';

import { Contact } from '../shared/models/contact.model';
import { FavoriteIconDirective } from '../shared/favorite-icon/favorite-icon.directive';

@Component({
  moduleId: module.id,
  selector: 'ca-contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css'],
  directives: [FavoriteIconDirective]
})
export class ContactListComponent {
  @Input('contacts') contacts: Contact[];
  
  constructor() {}
}