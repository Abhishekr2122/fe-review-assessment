import SearchBar from "../Ui/SearchBar";
import { usePeopleQuery } from "../app/modules/people/query";
import { useData } from "../app/shared/context/DataProvider";

export default function Navbar() {
  const { setSortedArr } = useData();
  const { data: people } = usePeopleQuery();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100px",
      }}
    >
      <SearchBar />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgray",
          borderRadius: "4px",
          height: "50px",
          width: "30%",
          marginRight: "10px",
        }}
      >
        <button
          style={{ cursor: "pointer", height: "20px" }}
          onClick={function () {
            setSortedArr(function () {
              return people?.sort(function (a, b) {
                return a.name
                  .split(" ")
                  .join("")
                  .toLowerCase()
                  .localeCompare(b.name.split(" ").join("").toLowerCase());
              });
            });
          }}
        >
          Name
        </button>
        <button
          style={{ cursor: "pointer", height: "20px" }}
          onClick={function () {
            setSortedArr(function () {
              return people?.sort(function (a, b) {
                return a.show
                  .split(" ")
                  .join("")
                  .toLowerCase()
                  .localeCompare(b.show.split(" ").join("").toLowerCase());
              });
            });
          }}
        >
          Show
        </button>
        <button
          style={{ cursor: "pointer", height: "20px" }}
          onClick={function () {
            setSortedArr(function () {
              return people?.sort(function (a, b) {
                return a.actor
                  .split(" ")
                  .join("")
                  .toLowerCase()
                  .localeCompare(b.actor.split(" ").join("").toLowerCase());
              });
            });
          }}
        >
          Actor/Actress
        </button>
        <button
          style={{ cursor: "pointer", height: "20px" }}
          onClick={function () {
            setSortedArr(people?.sort());
          }}
        >
          Default
        </button>
      </div>
    </div>
  );
}
