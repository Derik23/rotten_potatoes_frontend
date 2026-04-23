import { Link } from "react-router-dom";

export default function LinkBtn({ to, text }) {
  return (
    <div>
      <Link to={to}>{text}</Link>
    </div>
  );
}
