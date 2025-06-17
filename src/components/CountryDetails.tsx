import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Row } from "reactstrap";
import { getCountryDetails } from "../api/country";
import { CountryDetail } from "../api/types";

export default function CountryDetails() {
  const { ccn3 } = useParams();
  const [details, setDetails] = useState<CountryDetail | undefined>();

  useEffect(() => {
    if (ccn3) {
      getCountryDetails(ccn3).then((response) => {
        if (response.length > 0) {
          setDetails(response[0]);
        }
      });
    }
  }, [])

  if (details === undefined) {
    //TODO no content and back button
    return null;
  }

  return (
    <Row className='country-detail'>
      <Col md={2} />
      <Col md={8}>
        <Row>
          <Col xs={12}>
            <img
              src={details.flags.png}
              alt={details.flags.alt}
              width={500}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h1>{details.name.common}</h1>
            {/* TODO native name */}
            <h3>{`Native Name: ${JSON.stringify(details.name.nativeName)}`}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <span>
              {`Capital(s): ${details.capital.join(', ')}`}
            </span>
            <br />
            <span>
              {`Region: ${details.region}`}
            </span>
            <br />
            <span>
              {`Sub Region: ${details.subregion}`}
            </span>
            <br />
            <span>
              {`Population: ${details.population}`}
            </span>
            <br />
            <span>
              {`Timezone(s): ${details.timezones.join(', ')}`}
            </span>
            <br />
            {/* TODO currencies */}
            <span>
              {`Currencie(s): ${JSON.stringify(details.currencies)}`}
            </span>
            <br />
            {/* TODO currencies */}
            <span>
              {`Language(s): ${JSON.stringify(details.languages)}`}
            </span>
            {/* TODO borders */}
            {details.borders && (
              <span>
                {`Borders: ${JSON.stringify(details.borders)}`}
              </span>)}
          </Col>
        </Row>
      </Col>
      <Col md={2} />
    </Row>
  );
}