import { nanoid } from 'nanoid';
import { Contacts } from './ContactsListStyled';

const ContactsList = ({ contacts, removeContact }) =>{
 return (  
    <Contacts>
     {contacts.map(({name, number, id}) => 
       <li key={nanoid()}>
         <p>- {name}: {number}</p>
          <button type='button' onClick={() => removeContact(id)}>Delete</button>
       </li>)}
    </Contacts>
        )

    

}
export default ContactsList;