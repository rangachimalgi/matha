import React, { Fragment, useContext, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import { healthPackagesArray } from "./HealthPackages";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../utils/products";
import { Collapse } from "react-bootstrap";
import "../Styles/productDetails.css";

const HealthPackageDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { selectedProduct, setSelectedProduct, addToCart } =
    useContext(DataContainer);
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedHealthPackage = healthPackagesArray.find(
      (packageItem) => packageItem.id === id
    );
    setSelectedProduct(selectedHealthPackage);
  }, [id, setSelectedProduct]);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAdd = (selectedProduct, quantity) => {
    addToCart(selectedProduct, quantity);
    toast.success("Package has been added to cart!");
  };

  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <section className="product-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
            </Col>
            <Col md={6}>
              <h2>{selectedProduct?.productName}</h2>
              <div className="info">
                <span className="price">&#8377;{selectedProduct?.price}</span>
                <span>category: {selectedProduct?.category}</span>
              </div>
              <p>{selectedProduct?.shortDesc}</p>
              <input
                className="qty-input"
                type="number"
                placeholder="Qty"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                aria-label="Add"
                type="submit"
                className="add"
                onClick={() => handleAdd(selectedProduct, quantity)}
              >
                Add To Cart
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Included Tests section */}
      {selectedProduct?.includedTests &&
        selectedProduct.includedTests.length > 0 && (
          <section className="included-tests">
            <Container>
              <h3>Included Seva</h3>
              {selectedProduct.includedTests.map((category) => (
                <div key={category.categoryName}>
                  <h4
                    onClick={() =>
                      setOpenCategoryId(
                        openCategoryId !== category.categoryName
                          ? category.categoryName
                          : null
                      )
                    }
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginLeft: "10px" }}>
                      {openCategoryId === category.categoryName ? "v" : ">"}
                    </span>
                    {category.categoryName}
                  </h4>

                  <Collapse in={openCategoryId === category.categoryName}>
                    <div>
                      {category.tests.map((testId) => {
                        const testDetail = products.find(
                          (product) => product.id === testId
                        );
                        return (
                          <div key={testId} className="test-item">
                            <h5>{testDetail?.productName}</h5>
                            <p>{testDetail?.shortDesc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </Collapse>
                </div>
              ))}
            </Container>
          </section>
        )}

      <section className="product-reviews">
        <Container>
          <ul>
            <li>Description</li>
          </ul>
          <p>{selectedProduct?.description}</p>
        </Container>
      </section>
    </Fragment>
  );
};

export default HealthPackageDetails;
