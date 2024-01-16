import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const MyContext = ({ children }) => {
  const [categories, setCategoris] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  console.log("aa", allPosts);

  useEffect(() => {
    fetch(`https://soft.businessinbangladesh.com.bd/api/all-categories`)
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);

  useEffect(() => {
    fetch(`http://192.168.0.185/business-in-bangladesh/api/all-posts`)
      .then((res) => res.json())
      .then((data) => setAllPosts(data));
  }, []);

  const filterItem = allPosts?.filter(
    (item) => item?.category?.category_name === "Entertainment"
  );

  const data = {
    categories,
    filterItem,
    allPosts,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default MyContext;
