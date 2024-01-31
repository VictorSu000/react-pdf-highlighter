import React from "react";
import type { IHighlight } from "./react-pdf-highlighter";

interface CommentProps {
  highlights: Array<IHighlight>;
  jumpTo: (highlight: IHighlight) => void;
}

interface CommentItemProps {
  highlight: IHighlight;
  jumpTo: (highlight: IHighlight) => void;
}

export function Comments({
  highlights,
  jumpTo,
}: CommentProps) {
  return (
    <ul className="sidebar__highlights">
      {highlights.map((highlight, index) => (
        <CommentItem key={index} highlight={highlight} jumpTo={jumpTo} />
      ))}
    </ul>
  );
}

export function CommentItem({
  highlight,
  jumpTo,
}: CommentItemProps) {
  return (
    <li
      className="sidebar__highlight"
      onClick={() => {
        jumpTo(highlight);
      }}
    >
      <div>
        {highlight.content.text ? (
          <blockquote className="highlight__text">
            {`${highlight.content.text.slice(0, 90).trim()}…`}
          </blockquote>
        ) : null}
        {highlight.content.image ? (
          <div className="highlight__image">
            <img src={highlight.content.image} alt={"Screenshot"} style={{ width: "100%", height: "100%" }} />
          </div>
        ) : null}
        <span className="highlight__comment">{highlight.comment.text}</span>
      </div>
      <div className="highlight__location">
        Page {highlight.position.pageNumber}
      </div>
    </li>
  );
}