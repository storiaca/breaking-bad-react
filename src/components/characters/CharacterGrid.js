import React from "react";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <section className="cards"></section>
  );
};

export default CharacterGrid;
