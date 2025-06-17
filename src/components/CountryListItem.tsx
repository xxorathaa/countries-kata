import { Card, Col, Row } from "reactstrap";
import { Country } from "../api/types";
import { useNavigate } from "react-router";

interface Props {
  country: Country;
}

export default function CountryListItem({ country }: Props) {
  const navigate = useNavigate();

  return (
    <Card
      className='country-list-item'
      style={{cursor:'pointer'}}
      onClick={() => navigate(`details/${country.ccn3}`)}
    >
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