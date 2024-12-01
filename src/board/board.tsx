import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BoardDeletedEvent } from "@vite-micro-front/contracts/events";
import { BoardId } from "@vite-micro-front/contracts/kernel";

import { boardRemoteSlice } from "./model";

export function Board() {
  const params = useParams();
  const dispath = useDispatch();
  const navigate = useNavigate();

  const board = useSelector((store) =>
    boardRemoteSlice.selectors.boardById(store as any, params.id as BoardId)
  );

  return (
    <div>
      Board {board?.title}
      <Link to={`/`}>Home</Link>
      <button
        onClick={() => {
          dispath({
            type: "board/deleted/v1",
            payload: { boardId: params.id as BoardId },
          } satisfies BoardDeletedEvent);
          navigate(`/`);
        }}
      >
        Board deleted
      </button>
    </div>
  );
}
