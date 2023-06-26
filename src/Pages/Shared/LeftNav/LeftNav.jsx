import React, { useState, useEffect } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Left Nav here</h2>
    </div>
  );
};

export default LeftNav;
