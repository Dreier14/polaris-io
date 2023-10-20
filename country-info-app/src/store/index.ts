import React from 'react';
import { CountryAppStore } from './countryAppStore';

export const store = Object.freeze({
    countryAppStore: new CountryAppStore()
});

export const storeContext = React.createContext(store);
export const StoreProvider = storeContext.Provider;