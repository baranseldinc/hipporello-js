import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addCard, deleteList, updateListTitle } from "../pages/slice";
import { Card } from "./Card";

// type List = {
//   listId: String,
//   cards: Card[],
// };

export const List = ({ listId, title, cards }) => {
  const dispatch = useDispatch();
  const handleClickAddCard = useCallback((e) => {
    const text = prompt("Text?");
    dispatch(addCard({ listId, text }));
  }, []);
  const handleClickEditTitle = useCallback(() => {
    const title = prompt("New Title ?");
    dispatch(updateListTitle({ listId, title }));
  }, []);
  const handleClickDeleteList = useCallback(() => {
    dispatch(deleteList({ listId }));
  }, []);
  return (
    <div className="list">
      <div className="list-header">
        <b className="list-header-title">{title}</b>
      </div>
      <div className="list-toolbar">
        <button onClick={handleClickEditTitle}>Edit Title</button>
        <button onClick={handleClickDeleteList}>Delete</button>
      </div>
      <hr />
      <div className="list-content">
        {cards.map((card) => (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            text={card.text}
            listId={listId}
          />
        ))}
      </div>
      <hr />
      <div className="list-footer">
        <a href="#" className="card-add-link" onClick={handleClickAddCard}>
          Add Card
        </a>
      </div>
    </div>
  );
};
