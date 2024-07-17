import React from "react";
import styles from "../../CSS/singleflight.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  addBookingFlights,
  flightBookingError,
  flightBookingLoading,
} from "../flightBookingComponents/flightBookingSlice";
import { useDispatch } from "react-redux";
export const SingleFlight = ({
  arrival,
  arrival_time,
  departure,
  departure_time,
  duration,
  fare,
  name,
  stops,
  id,
}) => {
  const dispatch = useDispatch();
  const handlePageChange = async (id) => {
    dispatch(flightBookingLoading());
   
try{

  const res = await fetch(`https://mmt-json-server.vercel.app/flights/${id}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  });
  const res2 = await res.json();
  dispatch(addBookingFlights(res2));
}
catch(e){
  console.log(e);
        dispatch(flightBookingError());
}

    navigate(`/flightBooking/${id}`);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.singleflight} key={id}>
      <div
        style={{
          backgroundColor: "#B8FFF9",
          padding: "0.2px",
          width: "15%",
          height: "20px",
          border: "#42C2FF 1px solid",
        }}
      >
        <h6 className={styles.guidelineText}>Lock price and pay later</h6>
      </div>
      <div className={styles.maincontainer}>
        <div
          className={styles.inner_cont}
          style={{
            fontSize: "14px",
            fontWeight: "700",
            marginTop: "2%",
            marginLeft: "1%",
          }}
        >
          <span>{name}</span>
        </div>

        <div className={styles.inner_cont}>
          <b>{departure_time}</b>
          <p>{departure}</p>
        </div>
        <div className={styles.inner_cont}>
          <span>{duration}</span>
          <hr className={styles.line} />
          <span
            style={{
              fontSize: "12px",
              color: "gray",
              textAlign: "center",
            }}
          >
            {stops}
          </span>
        </div>
        <div className={styles.inner_cont}>
          <b>{arrival_time}</b>
          <p>{arrival}</p>
        </div>
        <div className={styles.inner_cont}>
          <b>{fare}/-</b>
        </div>
        <Button
          className={styles.buttonBookNow}
          style={{
            maxHeight: "30px",
            marginTop: "1.5%",
            fontSize: "10px",
            backgroundColor: "#9AD0EC",
            border: "1px solid #03045E",
            width: "10%",
          }}
          onClick={() => handlePageChange(id)}
        >
          Book Now
        </Button>
      </div>
      <div className={styles.discount}>
        Use MMTSUPER and get FLAT Rs. 309 instant discount on this flight
      </div>
      <div className={styles.details}>
        <span>View Flight Details</span>
      </div>
    </div>
  );
};
