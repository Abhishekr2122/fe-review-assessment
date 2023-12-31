import { Person } from "./model";
import { usePeopleQuery } from "./query";
import "./people.css";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import DataProvider, { useData } from "../../shared/context/DataProvider";
import "./model/filtertable.css";
import { useState } from "react";

const People: React.FC = () => {
  const { data: people, loading, error } = usePeopleQuery();
  const { pageNumber, searchQuery, sortedArr } = useData();
  console.log(sortedArr);

  const arr = sortedArr.length === 0 ? people : sortedArr;

  const filteredArray = arr?.filter(function (citem, i) {
    return i >= (pageNumber - 1) * 10 && i < pageNumber * 10;
  });

  console.log(people);

  const modifiedSearchQuery = searchQuery?.split(" ").join("").toLowerCase();

  const searchQueryArray = people?.filter(function (citem, i) {
    return citem.name
      ?.split(" ")
      .join("")
      .toLowerCase()
      .includes(modifiedSearchQuery);
  });

  const resultedArray = searchQuery ? searchQueryArray : filteredArray;

  const renderCells = ({ name, show, actor, movies, dob }: Person) => (
    <>
      <td>{name}</td>
      <td>{show}</td>
      <td>{actor}</td>
      <td>{dob}</td>
      <td
        dangerouslySetInnerHTML={{
          __html: movies.map(({ title }) => title).join(", "),
        }}
      ></td>
    </>
  );

  if (loading) {
    return <p>Fetching People...</p>;
  }

  if (people === undefined || error) {
    return <h2>Oops! looks like something went wrong!</h2>;
  }

  if (searchQuery.length > 0) {
    return searchQueryArray?.length !== 0 ? (
      <>
        <Navbar />
        <div className="filtertable">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Show</th>
                <th>Actor/Actress</th>
                <th>Date of birth</th>
                <th>Movies</th>
              </tr>
            </thead>

            <tbody>
              {resultedArray?.map((people, index) => (
                <tr key={index}>{renderCells(people)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ) : (
      <>
        <Navbar />
        <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              border: "1px solid lightgray",
              fontSize: "50px",
              height: "100px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            No such data found!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* <div
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              border: "1px solid lightgray",
              fontSize: "50px",
              height: "100px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            No such data found!
          </p>
        </div> */}

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Show</th>
              <th>Actor/Actress</th>
              <th>Date of birth</th>
              <th>Movies</th>
            </tr>
          </thead>

          <tbody>
            {resultedArray?.map((people, index) => (
              <tr key={index}>{renderCells(people)}</tr>
            ))}
          </tbody>
        </table>
        <Footer tableDataSize={people.length} />
      </div>
    </>
  );
};

export { People };
