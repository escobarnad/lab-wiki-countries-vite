import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState();
  const fetchCountries = async () => {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    const countriesData = await response.json();
    setCountries(countriesData);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {countries &&
        countries.map((country) => {
          return (
            <div className="list-group" key={country._id}>
              <Link
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} flag`}
                  style={{ height: "2rem" }}
                />
                <p>{country.name.common}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default HomePage;
