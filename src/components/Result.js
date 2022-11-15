import React, { useRef } from "react";
import "../styles/Result.css";
import { useReactToPrint } from "react-to-print";

const Result = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {props.isClicked &&
        props.income !== "" &&
        props.name !== "" &&
        props.age !== "" &&
        props.member !== "" && (
          <div ref={componentRef} className="result row g-4">
            <div className="col-md m-1 text-center">
              <h5> Name : {props.name}</h5>
              <p>Age : {props.age}</p>
              <p>Email: {props.email}</p>
              <p>Family Members: {props.member}</p>
              <p>Monthly Income : {props.income}</p>
              <hr />
              <h3>Need (Max 50%) : {Math.round(props.income / 2)}</h3>
            </div>
            <div className="col-md m-1 text-center">
              <p>Food, Clothes, Rent/EMI, Transport.</p>
              <p>Electricity Bill, Mobile Recharge, Gas/Water Bill.</p>
            </div>
            <div className="col-md m-1 text-center">
              <h4>Only for earning members:</h4>
              <h5>Life/Term Insurance</h5>
              <p>=Yearly Income x 10</p>
              <p>={Math.round(props.income * 12)} x 10</p>
              <p>={Math.round(props.income * 12 * 10)} Coverage needed</p>
            </div>
            <div className="col-md m-1 text-center">
              <h4>For all family members:</h4>
              <h5>Health Insurance</h5>
              <p>Per Member = 3 Lakh</p>
              <p>Required Insurance = No. of Members x 3</p>
              <p>Required Insurance = {props.member} x 3</p>
              <p>Required Insurance = {props.member * 3} </p>
            </div>

            <hr />
            <div className="col-md m-1 text-center">
              <h1>
                Savings (Min. 30%) : {Math.round(props.income * (30 / 100))}
              </h1>
              <h3>Safe Asset Class:</h3>
              <p>Amount = Your Age %</p>
              <p>Amount = {props.age} %</p>
              <h3>
                Amount ={" "}
                {Math.round(props.income * (30 / 100) * (props.age / 100))}
              </h3>
            </div>
            <div className="col-md m-1 text-center">
              <h4>Create 6 Month Emergency Fund:</h4>
              <p>Min. One month cost x 6</p>
              <p>For example = 7000 x 6 = 42000</p>
              <p>Save in Saving Account & Forget, Just use it in Emergency.</p>
            </div>
            <div className="col-md m-1 text-center">
              <p>After completing emergency fund, countinue with</p>
              <h4>
                Safe Asset Class ={" "}
                {Math.round(props.income * (30 / 100) * (props.age / 100))}
              </h4>
              <p>
                Retirement Plan like NPS, Mutual Fund Retirement plans(60%) =
                {Math.round(
                  props.income * (30 / 100) * (props.age / 100) * (60 / 100)
                )}
              </p>
              <p>
                FD's + Savings A/c (40%) =
                {Math.round(
                  props.income * (30 / 100) * (props.age / 100) * (40 / 100)
                )}
              </p>
            </div>
            <div className="col-md m-1 text-center">
              <h2>Investment:</h2>
              <h5>Amount = (100-Your Age)%</h5>
              <h5>= (100 - {props.age} )%</h5>
              <h5>
                = {100 - props.age} % ={" "}
                {Math.round(
                  ((props.income * 30) / 100) * ((100 - props.age) / 100)
                )}
              </h5>
              <p className="text-start ms-3">➤ Mutual Fund SIP</p>
              <p className="text-start ms-3">➤ Share Market</p>
              <p className="text-start ms-3">➤ Gold</p>
            </div>
            <hr />
            <div className="col-md m-1 text-center">
              <h1>
                {" "}
                Want (Max. 20%) = {Math.round(props.income * (20 / 100))}
              </h1>
            </div>
            <div className="col-md m-1 text-center">
              <h4>
                Costly Clothes, A.C, Fridge, Costly Mobile, OTT Subcription,
                Lunch & Dinner at Costly Hotel, Marriage Party & etc.
              </h4>
            </div>
            <hr />
            <div className="col-md m-1 text-center">
              <button onClick={handlePrint}>Print This Form</button>
            </div>
            <div className="col-md m-1 text-center">
              <h4>
                For any queries :{" "}
                <a href="mailto:apunekar92@gmail.com">
                  <i className="fa fa-envelope" />
                </a>
              </h4>
            </div>
          </div>
        )}
    </div>
  );
};

export default Result;
