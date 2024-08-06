import Contact from "../Contact/Contact.jsx"
import css from "./ContactList.module.css"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice.js"
import { selectNameFilter } from "../../redux/filtersSlice.js"



const getVisibleContacts = (array, filter) => {return array.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) }

const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectNameFilter)
    const visibleContacts = getVisibleContacts(contacts, filter)
    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => (
                    <li className={css.contactListItem} key={contact.id}>
                    <Contact contact={contact} />
                    </li>
                )    
            )}
        </ul>
    )
}
export default ContactList 