// import { useMemo } from "react";
// import PropTypes from "prop-types";
// import "./RefreshToken.css";

// const RefreshToken = ({
//   className = "",
//   propHeight,
//   propPadding,
//   labelAMAZONREFRESHTOKEN,
//   containerPlaceholder,
// }) => {
//   const refreshTokenStyle = useMemo(() => {
//     return {
//       height: propHeight,
//       padding: propPadding,
//     };
//   }, [propHeight, propPadding]);

//   return (
//     <div className={`refresh-token ${className}`} style={refreshTokenStyle}>
//       <div className="label-amazon1">{labelAMAZONREFRESHTOKEN}</div>
//       <div className="input3">
//         <input
//           className="container24"
//           placeholder={containerPlaceholder}
//           type="text"
//         />
//       </div>
//     </div>
//   );
// };

// RefreshToken.propTypes = {
//   className: PropTypes.string,
//   labelAMAZONREFRESHTOKEN: PropTypes.string,
//   containerPlaceholder: PropTypes.string,

//   /** Style props */
//   propHeight: PropTypes.any,
//   propPadding: PropTypes.any,
// };

// export default RefreshToken;
