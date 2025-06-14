import { useEffect, useState } from "react";
import { Country, CountryDetail } from "../api/types";
import { getCountries, getCountryDetails } from "../api/country";
import { Col, Row } from "reactstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import CountryListItem from "./CountryListItem";
import { useParams } from "react-router";

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

  if(details === undefined) {
    //TODO no content and back button
    return null;
  }

  return (<p>{JSON.stringify(details)}</p>);
}