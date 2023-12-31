import { ReactNode, createContext, useContext, useState } from "react";

type Props = {
  children: ReactNode;
};

// Assuming useData returns an object with pageNumber and searchQuery properties
interface DataResult {
  pageNumber: number;
  searchQuery: string;
}

const DataContext = createContext({});

const DataProvider: React.FC<Props> = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [sortedArr, setSortedArr] = useState([]);

  return (
    <DataContext.Provider
      value={{
        pageNumber,
        setPageNumber,
        searchQuery,
        setSearchQuery,
        setSortedArr,
        sortedArr,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

export function useData() {
  const data = useContext(DataContext);
  return data;
}
