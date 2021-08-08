// src/filter-by-age.js

const filterByAge = (data) => {
  return data.filter((item) => {
    return item.age < 30;
  });
};

export default filterByAge;
