/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import _ from "lodash";
import "./App.css";

const App = () => {
  const [show, setShow] = useState(false);
  const [totalSub, setTotalSub] = useState(0);
  const [products, setProducts] = useState([
    {
      productName: "Clinick Brow Keeper",
      quantity: 5,
      price: 10,
      lineTotal: 108.0,
      cashBack: 5.0,
    },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addProductRow = () => {
    let productsData = {};
    const productName = prompt("Please enter product name");
    const quantity = prompt("Please enter quantity");
    const price = prompt("Please enter price");
    const lineTotal = prompt("Please enter line total");
    const cashBack = prompt("Please enter cash back");

    productsData.productName = productName;
    productsData.quantity = quantity;
    productsData.price = parseInt(price, 10);
    productsData.lineTotal = lineTotal;
    productsData.cashBack = cashBack;

    if (
      productsData.productName === "" &&
      productsData.quantity === "" &&
      productsData.price !== NaN &&
      productsData.lineTotal === "" &&
      productsData.cashBack === ""
    ) {
      alert("Data Must Not Be Empty!!!");
    } else {
      if (
        productsData.productName !== null &&
        productsData.quantity !== null &&
        productsData.price !== NaN &&
        productsData.lineTotal !== null &&
        productsData.cashBack !== null
      ) {
        setProducts((oldData) => {
          return [...oldData, productsData];
        });
      } else {
        alert("Data Must Not Be Empty!!!");
      }
    }
  };

  const deleteProductItem = (index) => {
    const resultDeleteProduct = products.filter((product, i) => {
      if (i !== index) return product;
    });

    setProducts(resultDeleteProduct);
  };

  useEffect(() => {
    if (products.length === 0) setTotalSub(0);
    else {
      const allPrice = _.map(products, (product) => product.price);
      const subPrice = allPrice.reduce(function (acc, val) {
        return acc + val;
      }, 0);

      setTotalSub(subPrice);
    }
  }, [products]);

  return (
    <React.Fragment>
      <div className='purchases-section'>
        <h3>For Opening The Payment Modal you have to click the button</h3>

        <Button
          size='lg'
          variant='primary'
          onClick={handleShow}
          className='purchase-btn'
        >
          PURCHASES
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        centered
        size='xl'
      >
        <Modal.Body>
          <div className='order-section'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 order-section-header'>
                <div className='order-section-header-title'>
                  <h3 className='purchase-title'>Purchases</h3>
                  <div className='horizontal-line'></div>
                  <h3 className='payment-title'>Payment</h3>
                </div>

                <div
                  className='icon-section cursor-pointer'
                  onClick={handleClose}
                >
                  <i className='fa fa-times'></i>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 section-left'>
                <div className='section-lef-border'>
                  <div className='row d-flex justify-content-between order'>
                    <div className='d-flex flex-column purchase-order'>
                      <p className='title'>Purchase Order</p>
                      <p className='sub-title'>IPO-000456325</p>
                    </div>
                    <div className='d-flex flex-column purchase-order'>
                      <p className='title'>
                        Ship to<span className='star-entity'>*</span>
                      </p>
                      <p className='sub-title'>
                        Marico Moura...{" "}
                        <span className='icon-plus'>
                          <i className='fa fa-plus'></i>
                        </span>{" "}
                        <span className='icon-plus'>
                          {" "}
                          <i className='fa fa-sort-down'></i>
                        </span>
                      </p>
                      <p className='title text-center mt-2'>Tenafy 07670</p>
                    </div>
                    <div className='d-flex flex-column purchase-order'>
                      <p className='title'>Bill to</p>
                      <p className='sub-title'>
                        Marico Moura{" "}
                        <span className='icon-ok'>
                          <i className='fa fa-check'></i>
                        </span>
                      </p>
                      <p className='title text-center mt-2'>Tenafy 07670</p>
                    </div>
                    <div className='d-flex flex-column purchase-order text-right'>
                      <p className='title'>
                        Order Date<span className='star-entity'>*</span>
                      </p>
                      <p className='order-date text-center'>11/30/2018</p>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-between order-id mt-4'>
                    <div className='d-flex flex-column purchase-order-id'>
                      <p className='title'>
                        Order ID<span className='star-entity'>*</span>
                      </p>
                      <p className='sub-title'>000456325</p>
                    </div>
                    <div className='d-flex flex-column purchase-order-id'>
                      <p className='title'>
                        Supplier<span className='star-entity'>*</span>
                      </p>
                      <p className='sub-title'>
                        Belk{" "}
                        <span className='icon-ok ml-2'>
                          <i className='fa fa-check'></i>
                        </span>
                      </p>
                    </div>
                    <div className='d-flex flex-column purchase-order-id'>
                      <p className='title'>
                        Supplier Account<span className='star-entity'>*</span>
                      </p>
                      <p className='sub-title'>
                        Kresko0002{" "}
                        <span className='icon-ok ml-2'>
                          <i className='fa fa-check'></i>
                        </span>
                      </p>
                    </div>
                    <div className='d-flex flex-column purchase-order-id'>
                      <p className='title'>
                        Website Cashback<span className='star-entity'>*</span>
                      </p>
                      <p className='sub-title'>
                        {" "}
                        = Select ={" "}
                        <span className='icon-plus ml-2'>
                          <i className='fa fa-sort-down'></i>
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className='row mt-2'>
                    <table className='table table-borderless order-table'>
                      <thead>
                        <tr>
                          <th style={{ width: "5%" }}>Image</th>
                          <th style={{ width: "50%" }}>
                            Product Name<span className='star-entity'>*</span>
                          </th>
                          <th style={{ width: "5%" }}>
                            Ordered Quantity
                            <span className='star-entity'>*</span>
                          </th>
                          <th style={{ width: "5%" }}>
                            Price<span className='star-entity'>*</span>
                          </th>
                          <th style={{ width: "5%" }}>Line Total</th>
                          <th style={{ width: "25%" }}>Website CashBack %</th>
                          <th style={{ width: "5%" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.length > 0 ? (
                          products.map((val, index) => (
                            <tr key={index}>
                              <td>
                                <img
                                  className='image-table'
                                  src={require("./assets/images/image.png")}
                                  alt='logo'
                                />
                              </td>
                              <td>
                                {val.productName}
                                <span className='icon-ok'>
                                  <i className='fa fa-check'></i>
                                </span>
                              </td>
                              <td className='font-bold'>{val.quantity}</td>
                              <td className='font-bold'>${val.price}</td>
                              <td className='font-bold'>${val.lineTotal}</td>
                              <td className='font-bold'>{val.cashBack}%</td>
                              <td onClick={() => deleteProductItem(index)}>
                                <i className='fa fa-times-circle circle-cross cursor-pointer'></i>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className='empty-row'>
                            <td colSpan='4'>
                              <img
                                src={require("./assets/images/data-storage.png")}
                                alt='data'
                                className='empty-data'
                              />
                              <p>No Data Available</p>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        )}

                        <tr>
                          <td
                            className='add-row cursor-pointer'
                            colSpan='2'
                            onClick={() => addProductRow()}
                          >
                            {" "}
                            <i className='fa fa-plus-circle'></i> Add Row
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className='row d-flex justify-content-end  mt-2'>
                    <div className='d-flex flex-column order-id-summary'>
                      <p className='title'>
                        Subtotal{" "}
                        <span className='ml-4 text-right'>${totalSub}</span>
                      </p>
                      <p className='sub-title'>
                        Discount <span className='ml-4 text-right'>20.00</span>
                      </p>
                      <p className='sub-title'>
                        Reward <span className='ml-4 text-right'>0.00</span>
                      </p>
                    </div>
                  </div>

                  <div className='row d-flex justify-content-end mt-4 button-section'>
                    <button
                      type='button'
                      className='btn btn-primary'
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='btn btn-primary ml-5'
                      onClick={() => setProducts([])}
                    >
                      Delete
                    </button>
                    <button type='button' className='btn btn-primary ml-5'>
                      Save
                    </button>
                    <button type='button' className='btn btn-primary ml-5'>
                      Accept
                    </button>
                  </div>
                </div>
              </div>

              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 section-right'>
                <div className='row'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center section-right-header'>
                    <p>
                      Can't see images?{" "}
                      <a href='#' className='text-underline'>
                        click here
                      </a>
                    </p>
                  </div>
                </div>

                <div className='row d-flex justify-content-between logo-section mt-4'>
                  <img
                    src={require("./assets/images/logo.png")}
                    alt='logo'
                    className='logo-icon'
                  />

                  <div className='d-flex flex-row menu-bar'>
                    <p>Shop</p>
                    <div className='vertical-line mx-4'></div>
                    <p>Cupons</p>
                    <div className='vertical-line mx-4'></div>
                    <p>Stores</p>
                    <div className='vertical-line mx-4'></div>
                    <p className='red'>Clearnes</p>
                  </div>
                </div>

                <div className='row d-flex justify-content-end free-shipping-title mt-3'>
                  <p>
                    Free Standard Shipping @ $49 or Buy Online & Pic Up Free in
                    Sunday
                  </p>
                </div>

                <div className='row d-flex justify-content-end offer mt-5'>
                  <img
                    src={require("./assets/images/offer.jpg")}
                    alt='offer'
                    className='offer-pic'
                  />

                  <h1 className='red'>
                    Congratulation, <br />
                    You Earned It!
                  </h1>
                  <h3>
                    You'll be receiving your Belk Bucks <br /> in a seperate
                    email
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default App;
