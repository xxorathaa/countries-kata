import { useParams } from "react-router";

export default function CountryDetails() {
  let { ccn3 } = useParams();

  return (<p>{ccn3}</p>);
}