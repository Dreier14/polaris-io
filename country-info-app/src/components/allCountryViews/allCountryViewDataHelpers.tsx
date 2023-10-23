import { iCountryData } from "../../interfaces/iCountryData";
import { Card, Col } from "react-bootstrap";
import { NoData } from "../noData/noData";

import './allCountryViews.css';

export const mapAllCountries = (countryData: Array<iCountryData> | undefined): JSX.Element[] | JSX.Element => {

    if (!countryData) {
        return <NoData />
    }

    const mappedCountryData = countryData.map((e, i) => {
        return (
            <Col key={i} >
                <Card className='card'>
                    <Card.Img src={e.flags.png} className='flag' />
                    <Card.Body className='card-body' >
                        <Card.Title>
                            <b>{e.name.common}</b>
                        </Card.Title>
                        <Card.Text>
                            Population: {e.population}
                            <br />
                            Region: {e.region}
                            <br />
                            Capital: {e.capital}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <>
            {mappedCountryData}
        </>
    );
}