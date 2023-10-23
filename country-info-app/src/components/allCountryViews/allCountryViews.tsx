import React from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';

import { iCountryData } from '../../interfaces/iCountryData';
import { mapAllCountries } from './allCountryViewDataHelpers';

import './allCountryViews.css';

interface iCountryInfo {
    countryData?: Array<iCountryData>
}

export const AllCountryViews: React.FC<iCountryInfo> = observer(({ countryData }): JSX.Element => {
    return (
        <>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4 all-country-data'>
                {mapAllCountries(countryData)}
            </Row>
        </>
    );
});