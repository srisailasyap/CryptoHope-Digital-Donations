import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Donate</h1>
        <h3>Today</h3>
        <p> 
Your donation can make a profound difference in the lives of those in need. At our community NGO, we are dedicated to supporting impoverished individuals and families through essential programs that provide food, shelter, education, and healthcare. Every contribution helps us deliver vital resources and services, empowering those less fortunate to build a better future. Join us in our mission to uplift our community and create lasting change—your generosity can bring hope and transform lives
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
