import React, { Component } from "react";

import { Rnd } from "react-rnd";

import "../style/AreaHighlight.css";

import type { ViewportHighlight } from "../types";

interface Props {
  highlight: ViewportHighlight;
  isScrolledTo: boolean;
}

export class AreaHighlight extends Component<Props> {
  render() {
    const { highlight, isScrolledTo, ...otherProps } = this.props;

    return (
      <div
        className={`AreaHighlight ${isScrolledTo ? "AreaHighlight--scrolledTo" : ""
          }`}
      >
        <Rnd
          className="AreaHighlight__part"
          enableResizing={false}
          disableDragging={true}
          position={{
            x: highlight.position.boundingRect.left,
            y: highlight.position.boundingRect.top,
          }}
          size={{
            width: highlight.position.boundingRect.width,
            height: highlight.position.boundingRect.height,
          }}
          onClick={(event: Event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          {...otherProps}
        />
      </div>
    );
  }
}

export default AreaHighlight;
