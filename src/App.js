import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [adult, setAdult] = useState(0);

  let incAdult = () => {
    if (adult < 10) {
      setAdult(Number(adult) + 1);
    } else {
      return;
    }
  };
  let decAdult = () => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };
  let adultChange = (e) => {
    setAdult(e.target.value);
  };

  const [child, setChild] = useState(0);

  let incChild = () => {
    if (child < 10) {
      setChild(Number(child) + 1);
    } else {
      return;
    }
  };
  let decChild = () => {
    if (child > 0) {
      setChild(child - 1);
    }
  };
  let childChange = (e) => {
    setChild(e.target.value);
  };

  const [sliderValue, setsliderValue] = useState(1);

  const [price, setPrice] = useState(0);

  const [unitPrice, setUnitPrice] = useState(0);

  const priceValues = { 1: 7, 2: 14, 3: 30, 4: 60 };

  const [textValues, setTextValues] = useState("");

  const [discount, setDiscount] = useState(100);

  useEffect(() => {
    let days = priceValues[sliderValue];
    if (days === 7) {
      setUnitPrice(1500);
      setTextValues("the more attention it consumes the more valuable it gets");
    } else if (days === 14) {
      setUnitPrice(1000);
      setTextValues("your whole life has been designed for your awakening.");
    } else if (days === 30) {
      setUnitPrice(750);
      setTextValues("true change within, leave the outside as it is.");
    } else if (days === 60) {
      setUnitPrice(500);
      setTextValues("now is now. are you going to be here or not?");
    } else {
      return;
    }
  }, [sliderValue]);

  useEffect(() => {
    let day = priceValues[sliderValue];
    if (adult < 3 && day === 7) {
      setPrice(adult * 1500);
      setDiscount(0);
    } else if (adult >= 3 && day === 7) {
      setPrice(adult * 1500 - adult * 200);
      setDiscount(200);
    } else if (adult < 3 && day === 14) {
      setPrice(adult * 1000);
      setDiscount(0);
    } else if (adult >= 3 && day === 14) {
      setPrice(adult * 1000 - adult * 200);
      setDiscount(200);
    } else if (adult < 3 && day === 30) {
      setPrice(adult * 750);
      setDiscount(0);
    } else if (adult >= 3 && day === 30) {
      setPrice(adult * 750 - adult * 100);
      setDiscount(100);
    } else if (adult < 3 && day === 60) {
      setPrice(adult * 500);
      setDiscount(0);
    } else if (adult >= 3 && day === 60) {
      setPrice(adult * 500 - adult * 100);
      setDiscount(100);
    } else {
      return;
    }
  }, [adult, sliderValue]);

  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div className=" p-4 mb-0 d-flex justify-content-between counter-position">
          <div className="d-inline p-2 text-black text-center hey">
            <div className="d-inline p-2 text-black fw-bold  ">
              <span>Adult</span>
            </div>

            <div className="input-group miyav ">
              <div className="input-group-prepend ">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={decAdult}
                >
                  -
                </button>
              </div>
              <input
                type="number"
                className="form-control text-center"
                disabled="cemre"
                value={adult}
                onChange={adultChange}
              /> 
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={incAdult}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="d-inline p-2 text-black text-center miyuv">
            <p className="d-inline text-black fw-bold ">Child</p>

            <div className="input-group miyav">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={decChild}
                >
                  -
                </button>
              </div>
              <input
                type="text"
                className="form-control text-center"
                disabled="cemre"
                value={child}
                onChange={childChange}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={incChild}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="pricing" className="overflow-hidden">
        <div className="container pricing-container p-xl-4 bg-white my-4">
          <div className="slider-container mb-5 mx-auto position-relative">
            <div className="d-flex justify-content-center daily-budget">
              <span className="per-day">{priceValues[sliderValue]} days </span>
            </div>

            <div id="budget-list">
              <div
                className={"bitem " + (sliderValue === "1" && "active")}
                onClick={() => {
                  setsliderValue("1");
                }}
              >
                60 days
              </div>
              <div
                className={"bitem " + (sliderValue === "2" && "active")}
                id="bitem-1"
                onClick={() => {
                  setsliderValue("2");
                }}
              >
                30 days
              </div>
              <div
                className={"bitem " + (sliderValue === "3" && "active")}
                id="bitem-2"
                onClick={() => {
                  setsliderValue("3");
                }}
              >
                14 days
              </div>
              <div
                className={"bitem " + (sliderValue === "4" && "active")}
                id="bitem-3"
                onClick={() => {
                  setsliderValue("4");
                }}
              >
                7 days
              </div>
            </div>
            <span className="bmd-form-group is-filled">
              <input
                type="range"
                id="budget"
                name="budget"
                min="1"
                max="4"
                value={sliderValue}
                step="1"
                onChange={(e) => {
                  setsliderValue(e.target.value);
                }}
              />
            </span>
          </div>
          <span className="d-flex justify-content-center fs-3">
            {Number(adult)} Adult, {Number(child)} Child
          </span>
          <div className="w-100 d-flex justify-content-center mb-4 mb-xl-5 row mx-mobile-0">
            <div className="col-xl-6 justify-content-center justify-content-xl-center">
              <div className="px-2 py-2 pricing-card-container container-st">
                <div className="d-flex flex-column align-content-center pricing-card-content">
                  <div className="d-flex flex-row align-items-center mt-4 mb-0 mx-3">
                  
                    <div className="semi-bold-gray ">
                      $<span id="pricing-monthly">{unitPrice}</span>/mo
                    </div> 
                     <h4
                      id="pricing-title"
                      className="pricing-title text-left pricing-text-600 margin-left"
                    >
                      {priceValues[sliderValue]} DAYS
                    </h4>
                  </div>
                  <div className="pricing-box-desc p-2 pt-4 mx-2 d-flex flex-column">
                    <div id="pricing-features">{textValues}</div>
                  </div>
                  <div className="position-relative mt-auto">
                    <h2 className="pricing-text-black pricing-text-900 pricing-price-text p-2 mx-2">
                      {price}
                      <span className="pricing-dollar pricing-text-smaller align-top ml-1">
                        {" "}
                        $ :Total
                      </span>
                      <span className="pricing-text-smaller ml-1"></span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="home-ext-bg-shape shape-grey grey-st"></div>
              <div className="home-ext-bg-shape shape-grey"></div>
            </div>
            <div className="col-xl-6 d-flex flex-column align-items-center justify-content-center invoices">
              <div
                id="invoice"
                className="invoice container justify-content-center bg-white mb-5 py-2 bg-white mt-0 mt-xl-1 px-mobile-0"
              >
                <div className="row border-bottom pb-2 font-weight-bold">
                  <div className="col-2 text-right">Amount</div>
                  <div className="col-3 text-right">Unit Price</div>
                  <div className="col-3 text-right">Quantity</div>
                  <div className="col-4">Description</div>
                </div>
                <div className="row py-2">
                  <div className="col-2 text-right">
                    $<span id="agraba-amount-invoice">{adult * unitPrice}</span>
                  </div>
                  <div className="col-3 text-right">
                    $<span id="agraba-amount-invoice-2">{unitPrice}</span>
                    <div className="position-absolute text-secondary hover-element d-none none-st2">
                      =
                    </div>
                  </div>
                  <div className="col-3 text-right  px-4">
                    {adult}
                    <div className="position-absolute text-secondary hover-element d-none none-st">
                      x
                    </div>
                  </div>

                  <div className="col-4 font-weight-bold">
                    <span id="package-name-invoice">
                      {priceValues[sliderValue]}
                    </span>{" "}
                    days
                  </div>
                </div>

                {adult >= 3 && (
                  <div className="row py-2 invoice-line">
                    <div className="col-2 text-right">
                      <span className="line-through mr-1 discounted"></span>$
                      {adult * discount}
                    </div>
                    <div className="col-3 text-right">
                      {discount}
                      <div className="position-absolute text-secondary hover-element d-none none-st2">
                        =
                      </div>
                    </div>
                    <div className="col-3 text-right px-4">{adult}</div>
                    <div className="col-4 font-weight-bold">Discount</div>
                  </div>
                )}
                <div className="row pt-2 font-weight-bold total-border">
                 
                  <div className="col-7 text-right">
                    $<span id="total-amount-invoice">{price}</span>/mo
                  </div>
                   <div className="col-5">Total</div>
                </div>
              </div>
              <a href=" " className="agraba-button">
                Start Free Trial Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
