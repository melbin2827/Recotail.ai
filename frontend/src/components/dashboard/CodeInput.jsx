import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CodeInput.css";

const CodeInput = ({
  className = "",
  propGap,
  labelAMAZONOAUTHCODE,
  enterAmazonOauthCPlacehol,
  propWidth,
}) => {
  const codeInputStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const enterAmazonOauthStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`code-input ${className}`} style={codeInputStyle}>
      <div className="label-amazon">{labelAMAZONOAUTHCODE}</div>
      <div className="input2">
        <input
          className="enter-amazon-oauth"
          placeholder={enterAmazonOauthCPlacehol}
          type="text"
          style={enterAmazonOauthStyle}
        />
      </div>
    </div>
  );
};

CodeInput.propTypes = {
  className: PropTypes.string,
  labelAMAZONOAUTHCODE: PropTypes.string,
  enterAmazonOauthCPlacehol: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
};

export default CodeInput;
