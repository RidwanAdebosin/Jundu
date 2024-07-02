import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  gap: "16px",
  justifyContent: "center",
};

const starContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// const textStyle = {
//   lineHeight: "1",
//   margin: "0",
//   marginTop: "1em", 
// };

const starStyle = {
  width: "20px",
  height: "20px",
  display: "inline-block", 
  cursor: "pointer",
};

function StarRating() {
  const defaultRating = 0;
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(defaultRating);

  function handleRating(rating) {
    setRating(rating);
    setTempRating(tempRating); 
  }

  function handleHoverRating(rating) {
    setTempRating(rating);
  }

  function handleHoverOut() {
    setTempRating(rating); 
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} style={{ position: "relative" }}>
            <Star
              key={i}
              index={i}
              filled={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onHover={() => handleHoverRating(i + 1)}
              onHoverOut={() => handleHoverOut()}
              onClick={() => handleRating(i + 1)}
            />
          </span>
        ))}
      </div>
      {/* <p style={textStyle}>{tempRating || rating || ""}</p> */}
    </div>
  );
}

function Star({ filled, onHover, onHoverOut, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={starStyle}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      onClick={onClick}
    >
      <path
        fill={filled ? "yellow" : "none"}
        stroke="yellow"
        strokeWidth="2"
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}

export default StarRating;
