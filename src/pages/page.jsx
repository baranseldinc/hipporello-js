import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../components/List";
import { addList } from "./slice";

export const Page = () => {
  const listArr = useSelector((state) => state.page.listItems) ?? [];
  const dispatch = useDispatch();
  const handleClickAddList = useCallback(() => {
    const title = prompt("New List Title ?");
    dispatch(addList({ title }));
  }, []);
  return (
    <React.Fragment>
      <div className="page-list">
        {(listArr ?? []).map((list) => (
          <List
            key={list.listId}
            listId={list.listId}
            title={list.title}
            cards={list.cards}
          />
        ))}
      </div>
      <hr />
      <a href="#" onClick={handleClickAddList}>
        Add New List
      </a>
    </React.Fragment>
  );
};
