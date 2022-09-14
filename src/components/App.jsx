import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  nameUserInputId = nanoid();

  filterNamesContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    if(!filter) {
      return contacts;
    }
    // return contacts.filter(contact =>
    //   contact.text.toLowerCase().includes(normalizedFilter),
    // );
  };

  addContact = (data) => {
    const contact = {
      id: this.nameUserInputId,
      name: data.name,
      number: data.number,
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  }

 render() {
  
  return (
    <div>
<ContactForm onSubmit={this.addContact}/>
<h2>Contacts</h2>

<Filter value={this.state.filter} onChange={this.filterNamesContacts}/>

<ContactsList contacts={this.state.contacts} id={this.nameUserInputId} filter={this.getVisibleContacts()}/>

</div>
  )
};
}



export default App;