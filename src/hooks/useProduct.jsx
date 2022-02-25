import { useEffect, useState } from "react";

const useProduct = () => {
  // const [catProduct, SetCatProduct] = useState([]);
  const [chicken, SetChicken] = useState([]);
  const [desert, SetDesert] = useState([]);
  const [fish, SetFish] = useState([]);
  const [vegetable, SetVegetable] = useState([]);
  const [beef, SetBeef] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => SetChicken(data.meals));
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pizza")
      .then((res) => res.json())
      .then((data) => SetDesert(data.meals));
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => SetFish(data.meals));
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=vegetable")
      .then((res) => res.json())
      .then((data) => SetVegetable(data.meals));
  }, []);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=beef")
      .then((res) => res.json())
      .then((data) => SetBeef(data.meals));
  }, []);
  return [beef, chicken, fish, vegetable, desert];
};

export default useProduct;
