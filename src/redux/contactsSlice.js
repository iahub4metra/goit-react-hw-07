import { createSlice } from "@reduxjs/toolkit"
const initialContacts = {
    items:[],
}
      
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        },
        addContact: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    },
})






export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state)=> state.contacts.items
export const contactsReducer = contactsSlice.reducer;