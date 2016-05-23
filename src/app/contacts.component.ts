import { Component } from '@angular/core';
import { Contact } from './shared/contact'

@Component({
  moduleId: module.id,
  selector: 'contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  title: string = 'Contacts';
  contacts: Contact[] = [];

  constructor() {}

  ngOnInit() {
    this.contacts = [
      { name: 'Adrian Directive', email: 'adrian.directive@example.com', number: '7035550123' },
      { name: 'Rusty Component', email: 'rusty.component@example.com', number: '4155550122' },
      { name: 'Jeff Pipe', email: 'jeff.pipe@example.com', number: '71455501111'},
      { name: 'Craig Service', email: 'craig.services@example.com', number: '6505550132'}
    ];
  }
}