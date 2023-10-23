import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Header } from '../header/header';
import { iComponentProps } from '../../interfaces/iComponentProps';
import { AllCountryViews } from '../allCountryViews/allCountryViews';

// The Home component will serve as the base entry point for our application as we add more components.

export const Home: React.FC<iComponentProps> = observer(({ store }): JSX.Element => {

    useEffect(() => {
        store.getAllCountryData();
    }, [store]);

    return (
        <>
            <Header />
            {
                !store.isLoading ?
                    <AllCountryViews countryData={store.countryData} /> :
                    <> Loading...</>
            }
        </>
    );
});