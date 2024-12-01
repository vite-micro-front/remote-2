import { Link, useParams } from "react-router-dom";

export function Board() {
  const params = useParams();

  return (
    <div>
      Board {params.id}
      <Link to={`/`}>Home</Link>
    </div>
  );
}
