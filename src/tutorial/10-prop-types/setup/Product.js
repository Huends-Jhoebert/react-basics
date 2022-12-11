import defaultImage from "../../../assets/default-image.jpeg";
import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
const { Meta } = Card;

const Product = ({ image, name, price }) => {
   return (
      // <article className="product">
      //         <img src={image.url} alt={name} />
      //             <h4>{name}</h4>
      //             <p>${price}</p>
      // </article>
      <Card
         hoverable
         style={{ width: 240 }}
         cover={<img alt={name} src={image.url || defaultImage} />}
      >
         <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
   );
};

Product.propTypes = {
   image: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
};

Product.defaultProps = {
   name: "default name",
   price: 3.99,
   image: defaultImage,
};

export default Product;
