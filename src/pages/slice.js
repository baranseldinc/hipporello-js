import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  listItems: [
    {
      listId: crypto.randomUUID(),
      title: "List-Title-1",
      cards: [
        { cardId: crypto.randomUUID(), text: "Uzun bir car text-1" },
        { cardId: crypto.randomUUID(), text: "Uzun bir car text-2" },
      ],
    },
    {
      listId: crypto.randomUUID(),
      title: "List-Title-2",
      cards: [
        { cardId: crypto.randomUUID(), text: "Uzun bir car text-3" },
        { cardId: crypto.randomUUID(), text: "Uzun bir car text-4" },
      ],
    },
  ],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    addCard: (state, action) => {
      const { listId, text } = action.payload;
      const newCard = { cardId: crypto.randomUUID(), text };

      const listIndex = state.listItems.findIndex(
        (item) => item.listId === listId
      );
      state.listItems[listIndex].cards.push(newCard);
    },
    editCard: (state, action) => {
      const { cardId, text, listId } = action.payload;
      const listIndex = state.listItems.findIndex(
        (item) => item.listId === listId
      );
      const cardIndex = state.listItems[listIndex].cards.findIndex(
        (item) => item.cardId === cardId
      );
      state.listItems[listIndex].cards[cardIndex].text = text;
    },
    deleteCard: (state, action) => {
      const { cardId, listId } = action.payload;
      const listIndex = state.listItems.findIndex(
        (item) => item.listId === listId
      );
      const cards = state.listItems[listIndex].cards;
      state.listItems[listIndex].cards = cards.filter(
        (item) => item.cardId !== cardId
      );
    },
    addList: (state, action) => {
      const { title } = action.payload;
      const newListItem = { cardId: crypto.randomUUID(), title, cards: [] };
      state.listItems = [...state.listItems, newListItem];
    },
    updateListTitle: (state, action) => {
      const { listId, title } = action.payload;
      const listIndex = state.listItems.findIndex(
        (item) => item.listId === listId
      );
      state.listItems[listIndex].title = title;
    },
    deleteList: (state, action) => {
      const { listId } = action.payload;
      state.listItems = state.listItems.filter(
        (item) => item.listId !== listId
      );
    },
  },
});

export const {
  reset,
  addCard,
  editCard,
  deleteCard,
  addList,
  updateListTitle,
  deleteList,
} = pageSlice.actions;

export default pageSlice.reducer;
