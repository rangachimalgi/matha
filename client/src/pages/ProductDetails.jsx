import { Fragment, useContext, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/productDetails.css";

const ProductDetails = () => {
  const [listSelected, setListSelected] = useState("desc");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [includedTests, setIncludedTests] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const { selectedProduct, setSelectedProduct, addToCart } =
    useContext(DataContainer);
  const { id } = useParams();
  if (!selectedProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct-${id}`);
    setSelectedProduct(JSON.parse(storedProduct));
  }
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const handelAdd = (selectedProduct, quantity) => {
    addToCart(selectedProduct, quantity);
    toast.success("Product has been added to cart!");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedProduct?.includedTests) {
      const allTests = selectedProduct.includedTests.flatMap(
        (category) => category.tests
      );
      setIncludedTests(
        products.filter((product) => allTests.includes(product.id))
      );
    }
    setRelatedProducts(
      products.filter(
        (item) =>
          item.category === selectedProduct?.category &&
          item.id !== selectedProduct?.id
      )
    );
  }, [selectedProduct]);

  useEffect(() => {
    return () => {
        setSelectedProduct(null);
    };
}, []);
  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <section className="product-page">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <img loading="lazy" src={selectedProduct?.imgUrl} alt="" />
            </Col>
            <h1>{selectedProduct?.products}</h1>
            <Col md={6}>
              <h2>{selectedProduct?.productName}</h2>
              <div className="info">
                <span className="price">&#8377;{selectedProduct?.price}</span>
                <span>category:{selectedProduct?.category}</span>
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
                onClick={() => handelAdd(selectedProduct, quantity)}
              >
                Add To Cart
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Updated Included Tests section */}
      {selectedProduct?.includedTests &&
        selectedProduct.includedTests.length > 0 && (
          <section className="included-tests">
            <Container>
              <h3>Included Seva</h3>
              {selectedProduct.includedTests.map((category) => (
                <div key={category.categoryName}>
                  <h4
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.categoryName
                          ? null
                          : category.categoryName
                      )
                    }
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {expandedCategory === category.categoryName ? (
                      <i
                        className="fa fa-chevron-down"
                        style={{ marginRight: "10px" }}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-chevron-right"
                        style={{ marginRight: "10px" }}
                      ></i>
                    )}
                    {category.categoryName}
                  </h4>

                  {expandedCategory === category.categoryName && (
                    <Row>
                      {category.tests.map((testId) => {
                        const test = products.find((p) => p.id === testId);
                        return (
                          <Col md={4} key={testId}>
                            <div className="test-item">
                              <h5>{test.productName}</h5>
                              <p>{test.shortDesc}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  )}
                </div>
              ))}
            </Container>
          </section>
        )}

      <section className="product-reviews">
        <Container>
          <ul>
            <li
              style={{ color: listSelected === "desc" ? "black" : "#9c9b9b" }}
              onClick={() => setListSelected("desc")}
            >
              Description
            </li>
          </ul>
          {listSelected === "desc" ? (
            <p>{selectedProduct?.description}</p>
          ) : (
            <div className="rates">
              {selectedProduct?.reviews.map((rate) => (
                <div className="rate-comment" key={rate.rating}>
                  <span>Jhon Doe</span>
                  <span>{rate.rating} (rating)</span>
                  <p>{rate.text}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} addToCart={addToCart} />
      </section>
    </Fragment>
  );
};

export default ProductDetails;
