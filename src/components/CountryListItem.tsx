import { Card } from "reactstrap";
import { Country } from "../api/types";

interface Props {
  country: Country;
}

export default function CountryListItem({country}: Props) {
  return (
    <Card>
      <p>{country.name.common}</p>
      <p>{country.capital[0]}</p>
      <p>{country.flags.png}</p>
      <p>{country.region}</p>
      <p>{country.population}</p>
    </Card>
  );

}