import React from "react";

const ItemListContainer = (props) => {
  return (
    <div>
      <p className="text-center alert alert-warning">{props.greeting}</p>
    </div>
  );
};

export default ItemListContainer;
