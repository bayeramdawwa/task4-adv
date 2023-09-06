import React from "react";
import Hero from "../components/hero/hero";
import hero1 from "../../../assets/imges/hero1.jpg"
export default function Main() {
  return (
    <>
      <Hero
      heroimg={hero1}
      herop="WATCH THE VIDEO"
      heroh1="Education is the Mother of Leadership"
      heroa="EXPLORE COURSES"
      />
    </>
  );
}
