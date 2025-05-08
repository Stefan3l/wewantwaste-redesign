import axios from "axios";
import { useState, useEffect } from "react";

//import components
import Card from "./Card";

export default function SkipList() {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((response) => {
        console.log(response.data);
        setSkips(response.data);
      })
      .catch((error) => {
        console.error("Error fetching skips:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {skips.map((skip) => (
        <div key={skip.id}>
          <Card
            size={skip.size}
            period={skip.hire_period_days}
            price={skip.price_before_vat}
            notAllowedOnRoad={skip.allowed_on_road === false}
          />
        </div>
      ))}
    </div>
  );
}
