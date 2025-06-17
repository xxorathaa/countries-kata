import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Row } from "reactstrap";
import { getCountryDetails } from "../api/country";
import { CountryDetail, LanguageCodes } from "../api/types";

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
  
  const removeDuplicates = (arr: any[]) => Array.from(new Set(arr));

  const nativeNameList = () => removeDuplicates(Object.keys(details.name.nativeName)
    .map(key => ({
      key,
      value: details.name.nativeName[key],
    })).map((nativeName) => `${nativeName.value.common}`))
    .join(', ');

  const languagesList = () => Object.keys(details.languages)
    .map(key => ({
      key,
      value: details.languages[key],
    })).map((language) => language.value).join(', ');

  const currenciesList = () => Object.keys(details.currencies)
    .map(key => ({
      key,
      value: details.currencies[key],
    }))
    .map((currency) => `${currency.value.name}(${currency.value.symbol})`)
    .join(', ');

  const bordersList = () => details.borders?.map((border: string) =>
    LanguageCodes[border.toLowerCase() as keyof typeof LanguageCodes])
    .join(', ');

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
            <h3>{`Native Name: ${nativeNameList()}`}</h3>
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
            <span>
              {`Currency(s): ${currenciesList()}`}
            </span>
            <br />
            <span>
              {`Language(s): ${languagesList()}`}
            </span>
            <br />
            {details.borders && (
              <span>
                {`Borders: ${bordersList()}`}
              </span>)}
          </Col>
        </Row>
      </Col>
      <Col md={2} />
    </Row>
  );
}