import React from "react";
import classNames from "classnames";
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className={classNames("button", {
//           "button--outline": this.props.outline,
//         })}
//       >
//         {this.props.children}
//       </button>
//     );
//   }
// }

function Button({ className, onClick, children, outline }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}

export default Button;
