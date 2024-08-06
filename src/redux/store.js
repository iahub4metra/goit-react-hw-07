import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);


const rootReducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};



export const store = configureStore({ reducer: rootReducer });
export const persistor = persistStore(store);