import { useState } from "react";
import { useEffect } from "react";

const usePopular = () => {
  const [isAll, setIsAll] = useState(false);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setPopular(data.meals));
  }, []);

  if (isAll) {
    return [popular, setIsAll, isAll];
  } else {
    return [popular.slice(0, 3), setIsAll, isAll];
  }
};

export default usePopular;
