import React from "react";
import state from "../redux/state";
import {useParams} from "react-router-dom";

const Details = (props) => {
  const businessId = useParams().id;
  const selectBusiness = state.business.find(
    (business) => business.id === businessId
  );

  return (
    <div>
        kkkhelllooo???
      <h1>{selectBusiness.name}</h1>
      <p>{selectBusiness.description}</p>
      <p>{selectBusiness.hours}</p>
      <p>{selectBusiness.address}</p>
    </div>
  );
};

export default Details;
