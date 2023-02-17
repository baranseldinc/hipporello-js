// type Card= {
//   cardId: string
//   cardText: string
// }

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteCard, editCard } from "../pages/slice";

export const Card = ({ cardId, listId, text }) => {
  const dispatch = useDispatch();
  const handleClickEdit = useCallback(() => {
    const newText = prompt("New Text ?");
    dispatch(editCard({ cardId, listId, text: newText }));
  }, [listId]);
  const handleClickDelete = useCallback(() => {
    dispatch(deleteCard({ cardId, listId }));
  }, [listId]);
  return (
    <div className="card">
      <span>{text}</span>
      <div className="card-action-buttons">
        <button onClick={handleClickEdit}>Edit</button>
        <button onClick={handleClickDelete}>Delete</button>
      </div>
    </div>
  );
};
