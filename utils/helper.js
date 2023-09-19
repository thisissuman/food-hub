export const filteredData = (input, filterdata) => {
    const data = filterdata.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(input.toLowerCase());
    });
    return data;
  };

