import React from "react";  // Importing React library
import Product from "./Product";  // Importing the Product component
import CustomNav from "../CustomNav";  // Importing the CustomNav component
import { Row, Col } from "reactstrap";  // Importing Row and Col components from the Reactstrap library
import { useProducts } from "./useProducts";  // Importing the useProducts custom hook

const Home = () => {
  const { categories, products } = useProducts();  // Using the useProducts hook to get categories and products

  return (
    <div>
      <CustomNav />  {/* Rendering the CustomNav component */}
      <div className="home">
        <h2 style={{ textAlign: "center" }}>Enjoy our sales!</h2>  
        {categories.length &&  // Checking if categories array has elements
          categories.map((category) => {  // Mapping over the categories array
            const hasProducts = products.filter(  // Filtering products array based on category
              (product) => product.attributes.category.data.id === category.id
            );
            return hasProducts && hasProducts.length ? (  // Checking if there are products in the category
              <>
                <h2 className="category-title">{category.attributes.name}</h2>  {/* Rendering category name */}
                <Row key={category.id} className="category">  {/* Rendering a row for the category */}
                  {hasProducts.map((product) => (  // Mapping over products in the category
                    <Col sm="12" md="4" key={product.id}>  {/* Rendering a column for each product */}
                      <Product product={product} />  {/* Rendering the Product component */}
                    </Col>
                  ))}
                </Row>
              </>
            ) : null;
          })}
      </div>
    </div>
  );
};

export default Home;  // Exporting the Home component as the default export
