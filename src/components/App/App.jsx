import { Component } from 'react';
import Section from '../Section/Section';
import FormAddContact from '../Phonebook/FormAddContact/FormAddContact';
import FormFindContact from '../Phonebook/FormFindContact/FormFindContact';
import Contacts from '../Phonebook/Contacts/Contacts';
import listContacts from '../../data/contacts.json';

class App extends Component {
  state = {
    contacts: listContacts,
    filter: '',
  };

  handleAddContact = newContact => {
    if (this.handleDuplicateContact(this.state.contacts, newContact.name)) {
      alert(`This contact ${newContact.name} is already in the list.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDuplicateContact = (contactList, newContact) => {
    return contactList.some(
      ({ name }) => name.toLowerCase() === newContact.toLowerCase(),
    );
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleDeleteContact = idItem => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== idItem),
      };
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <Section type="main">
        <Section title="Phonebook" type="form">
          <FormAddContact onAddContact={this.handleAddContact} />
        </Section>
        <Section title="Contacts">
          <FormFindContact
            onFilterContact={this.handleChangeFilter}
            value={filter}
          />
          <Contacts
            list={this.getVisibleContacts()}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </Section>
    );
  }
}

export default App;
