import React from "react";  // Importing React library

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";  // Importing Card, CardImg, CardBody, CardTitle, and CardSubtitle components from Reactstrap

const Product = ({ product }) => {
  const image = product.attributes.images.data[0].attributes;  // Extracting the image attributes from the product object

  return (
    <Card className="product-card">  {/* Rendering a card for the product */}
      <CardImg
        top
        width="100%"
        src={`http://localhost:1337${image.url}`}  // Setting the image source dynamically
        alt={image.name}  // Setting the alt text for the image
      />
      <CardBody>  {/* Card body for product details */}
        <CardTitle>{product.attributes.name}</CardTitle>  {/* Rendering the product name */}
        <CardSubtitle>
          <strong>Price: £{product.attributes.price}</strong>  {/* Rendering the product price */}
        </CardSubtitle>
      </CardBody>
      
    </Card>
  );
};

export default Product;  // Exporting the Product component as the default export
