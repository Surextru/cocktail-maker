import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h2 className="title-section">Page Not found</h2>
      <Link to="/" className="btn">Back to home</Link>
    </div>
  );
}

export default Error;
