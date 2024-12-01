import { createSlice } from "@reduxjs/toolkit";
import {
  BoardAddedEvent,
  BoardDeletedEvent,
} from "@vite-micro-front/contracts/events";
import { Board, BoardId } from "@vite-micro-front/contracts/kernel";

export const boardRemoteSlice = createSlice({
  name: "remote/board",
  reducers: {},
  initialState: {
    boards: [] as Board[],
  },
  selectors: {
    boardById: (state, id: BoardId) => state.boards.find((b) => b.id === id),
  },
  extraReducers: (builder) => {
    builder.addCase(
      "board/added/v1" satisfies BoardAddedEvent["type"],
      (state, action: BoardAddedEvent) => {
        state.boards.push(action.payload);
      }
    );
    builder.addCase(
      "board/deleted/v1" satisfies BoardDeletedEvent["type"],
      (state, action: BoardDeletedEvent) => {
        state.boards = state.boards.filter(
          (board) => board.id !== action.payload.boardId
        );
      }
    );
  },
}).injectInto(window.context.rootReducer);
