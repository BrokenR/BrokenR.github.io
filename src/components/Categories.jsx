import React from "react";
import PropTypes from "prop-types";

//
// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };
//
//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };
//
//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {items.map((item, index) => {
//             return (
//               <li
//                 className={this.state.activeItem === index ? "active" : null}
//                 onClick={() => this.onSelectItem(index)}
//                 key={`${item}_${index}`}
//               >
//                 {item}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => {
            onClickCategory(null);
          }}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => {
            return (
              <li
                onClick={() => {
                  onClickCategory(index);
                }}
                className={activeCategory === index ? "active" : null}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propType = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};
Categories.defaultProps = {
  activeCategory: 0,
  items: [],
};

export default Categories;
