import { nanoid } from 'nanoid';

const ContactsList = ({ contacts }) =>{

     return (  
     <ul>
    {contacts.map(({name, number})=> <li key={nanoid()}><p>{name}: {number}</p></li>)}
        </ul>
        )

    

}
export default ContactsList;