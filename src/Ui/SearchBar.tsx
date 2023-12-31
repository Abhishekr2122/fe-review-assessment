import { useData } from "../app/shared/context/DataProvider";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useData();

  console.log("this is the search query", searchQuery);

  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();
      }}
      style={{ padding: "2rem" }}
    >
      <input
        placeholder="Search by name..."
        value={searchQuery}
        onChange={function (e) {
          setSearchQuery(e.target.value);
        }}
      />
    </form>
  );
}
