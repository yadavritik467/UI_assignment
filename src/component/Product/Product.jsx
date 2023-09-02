import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";
import "./product.css";
// import { Carousel } from "react-bootstrap";
const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  console.log(currentIndex);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  return (
<>    <div className="product">
      {/*   add carousel here */}
      <div className="carousel_1">
        <div className="carousel_1_child">
          <p>For the body</p> <br />
          <h2>An expression of care </h2> <br />
          <p>
            Aesop formulations offer the body deserving <br /> care, to cleanse,
            replenish, and nourish skin. <br /> Each product is a sensory
            pleasure to use with <br /> its own delightful aroma. <br />{" "}
          </p>{" "}
          <br />
          <p>
            See all Body Care <AiOutlineArrowRight />{" "}
          </p>
        </div>

        <div className="carousel_1_photo_parent">
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              Nurture bar soap
            </a>
            <p>Offers a mild yet effective cleanse</p>
          </div>
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://www.aesop.com/u1nb1km7t5q7/5NoA4d0c8KG7Hhz5y0kdfq/88bc42ee1a607d834f6f62c94373d2c1/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              Polish bar soap
            </a>
            <p>Thoroughly cleanses and exfoliates skin</p>
          </div>
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://www.aesop.com/u1nb1km7t5q7/2YWbdNlnJHD3t3zF4arNfK/4d9d61c34d4ef151f41defd952535345/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Large_1800x1093px.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              Nurture bar soap
            </a>
            <p>Offers a mild yet effective cleanse</p>
          </div>
        </div>

        {/* ----------------------------------------------------------------------------------------- */}
      </div> <br /> <br /> <br />
      {/* ------------------------------------------------- */}
      <div className="product-img">
        <div className="product-title">
          <p>The Athenaeum</p> <br />
          <h2>The warm-up</h2> <br />
          <p>
            In The Athenaeum, our digital reading <br /> room: a guide to
            ensuring a healthy <br /> complexion through the warmer months.
          </p>{" "}
          <br />
          <div className="btn">
            <p>Read More</p>
            <p>
              <AiOutlineArrowRight />{" "}
            </p>
          </div>
        </div>
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/3GSzEbfK3uJnoXUkae2D9G/37d1916a82b754c70870cab8f85f34b0/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg"
          alt=""
        />
      </div>  <br /> <br /> <br />
      {/* -------------------------------- */}
      <div className="carousel_1">
        <div className="carousel_1_child">
          <p>For the skin</p> <br />
          <h2>Attention for all types</h2> <br />
          <p>
          The well-being of your skin is the product of <br /> hydration, nourishment, and protection <br /> through discerning rituals. Explore requisite <br /> skin care for all skin types. <br />

          </p>{" "}
          <br />
          <p>
            See all Skin Care <AiOutlineArrowRight />{" "}
          </p>
        </div>

        <div className="carousel_1_photo_parent">
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://images.ctfassets.net/u1nb1km7t5q7/dOnBqAYKjyXt8FPq50qg7/8ebfb48f20f70b61782149da3d26266d/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Medium_535x522px.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              Lucent Facial Concentrate
            </a>
            <p>A Vitamin  C-rich layering serum</p>
          </div>
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://www.aesop.com/u1nb1km7t5q7/3hbEDQfTSFg3CMuB1lthQ0/4abe4f2870f1b2869f3f191c219ec534/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Medium_659x782px.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              purifying Facial Cream Cleanser
            </a>
            <p>A daily cream cleanser for dry skin</p>
          </div>
          <div className="carousel_1_photo">
            <img
              style={{ width: "320px" }}
              src="https://www.aesop.com/u1nb1km7t5q7/6MqehE3s9kxUep4iIs3caA/e1539c8d62f0c8bc5fdb1074d8bb2ecc/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-small.png"
              alt=""
            />{" "}
            <br />
            <a style={{ color: "#333" }} href="#">
              Camelia Nut Facial Hydrating Cream
            </a>
            <p>For normal, dry or sensitive skin</p>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br /> <br /> <br /> <br />
      {/* -------------------------------- */}
      <div className="product-img">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/6m4yuIyUcyfXMyKT17ZYsr/9bc9ba78322632d97323d73f364113f0/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png"
          alt=""
        />
        <div className="product-title">
          <h2>
            Post-Poo Drops has <br /> returned
          </h2>{" "}
          <br />
          <p>
            Here to make the malodorous <br /> melodious once again. Dispense{" "}
            <br /> this favoured formulation into the <br /> toilet bowl after
            flushing to <br /> effectively mask disagreeable odours.
          </p>{" "}
          <br />
          <div className="btn">
            <p>Discover Post-Poo Drops</p>
            <p>
              <AiOutlineArrowRight />{" "}
            </p>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="product-img">
        <div className="product-title">
          <h2>Store locator</h2> <br /> <br />
          <p>
            Our consultants are available <br /> to host you in-store and <br />{" "}
            provide tailored guidance <br /> on gift purchases.{" "}
          </p>{" "}
          <br />
          <div className="btn">
            <p>Find a nearby store</p>
            <p>
              <AiOutlineArrowRight />{" "}
            </p>
          </div>
        </div>{" "}
        
        <div className="carousel">
          <div className="carousel-content">
            <button className="caro-btn" onClick={prevSlide}>
              &lt;
            </button>
            {items.map((item, index) => (
              <div
                key={index}
                className={` ${
                  index === currentIndex ? "active" : "carousel-slide"
                }`}
              >
                <img className="caro-img" src={item} alt="" />
              </div>
            ))}

            <button className="caro-btn" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="quote">
        <h2>
          ‘Life never becomes a habit to me. <br /> It's always a marvel.’
        </h2>{" "}
        <br />
        <p style={{ fontWeight: 700 }}>Katherine Mansfield</p>
      </div>
    </div>
    <BsChatRight className="chat"/>
    </>
  );
};

export default Product;
