import { useEffect, useState } from "react";
import { Country, CountryDetail } from "../api/types";
import { getCountries, getCountryDetails } from "../api/country";
import { Col, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import CountryListItem from "./CountryListItem";
import { useParams } from "react-router";
import { omit, pick } from "lodash";

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
      </Col>
      <Col md={2} />
    </Row>
  );
}