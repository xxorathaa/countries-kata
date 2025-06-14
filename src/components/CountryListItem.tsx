import { Card, Col, Row } from "reactstrap";
import { Country } from "../api/types";

interface Props {
  country: Country;
}

export default function CountryListItem({ country }: Props) {
  return (
    <Card>
      <Row className={'align-items-center'}>
        <Col xs={12} md={4}>
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            width={160}
          />
        </Col>
        <Col xs={12} md={8}>
          <span>
            {`Name: ${country.name.common}`}
          </span>
          <br />
          <span>
            {`Capital(s): ${country.capital.join(', ')}`}
          </span>
            <br />
          <span>
            {`Region: ${country.region}`}
          </span>
            <br />
          <span>
            {`Population: ${country.population}`}
          </span>
        </Col>
      </Row>
    </Card>
  );

}