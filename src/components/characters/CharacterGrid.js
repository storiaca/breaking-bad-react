import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
