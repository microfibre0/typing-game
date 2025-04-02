import React from "react";
import "../css/TypingView.css";

type Props = {
  snippet: string;
};

function TypingView({ snippet }: Props) {
  return (
    <div className="view">
      <p>{snippet}</p>
    </div>
  );
}

export default TypingView;
