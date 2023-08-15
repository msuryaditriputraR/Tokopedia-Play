import { useEffect, useState } from "react";

const useFilter = (arr, key, handleFilter) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(arr?.filter((a) => handleFilter(a, key)));
  }, [arr, key, handleFilter]);

  return [filteredData];
};

export default useFilter;
