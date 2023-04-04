import React, { useEffect, useState } from "react";
import "../HomePageComponent/home.css";
import Category from "./Category";
import youtube from "../LoginPageComponent/assets/Circle Button.svg";
import faceBook from "../LoginPageComponent/assets/facebook.svg";
import linkedIn from "../LoginPageComponent/assets/linkedIn.svg";
import twitter from "../LoginPageComponent/assets/twitter.svg";

function HomePages() {
  const [getCountriesDetails, setGetCountriesDetails] = useState([]);
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    getCountriesApi();
  }, []);
  const getCountriesApi = () => {
    fetch("https://restcountries.com/v2/all?fields=name,region,flag")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
        setGetCountriesDetails(data);
        console.log("data", data);
      })

      .catch((error) => console.error(error));
  };

  const category = [
    { id: 1, name: "Asia" },
    { id: 1, name: "Europe" },
  ];
  const Allcategories = ["All", ...new Set(category.map((item) => item.name))];
  console.log(Allcategories, "Allcategories");
  const [categories, setCategories] = useState(Allcategories);

  const filterItems = (region) => {
    if (region === "All") {
      setGetCountriesDetails(countryData);
    } else {
      const newItems = countryData.filter((item) => item.region === region);
      setGetCountriesDetails(newItems);
    }
  };

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <h1>Countries</h1>
        <Category categories={categories} filterItems={filterItems} />
      </div>
      <div className="listingWrapper">
        {getCountriesDetails.map((country) => (
          <div className="box">
            <div className="innerBoxWrapper">
              <img src={country.flag} alt={country.name} />
              <div>
                <label>{country.name}</label>
                <p>{country.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="footerlabel">
        <div className="footerDiv">
          <img src={faceBook} alt="faceBook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedIn} alt="linkedIn" />
          <img src={youtube} alt="youtube" />
        </div>
        <div className="exampleLabel">
          <label className="labeled">Example@email.com </label>
          <h4>Copyright © 2020 Name. All rights reserved.</h4>
        </div>
      </div>
    </div>
  );
}

export default HomePages;
