import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import PageButtons from "../Ui/PageButtons";
import { useData } from "../app/shared/context/DataProvider";

type Props = {
  tableDataSize: number;
};

const Footer: React.FC<Props> = ({ tableDataSize }) => {
  const { pageNumber, setPageNumber } = useData();

  function pageIncrement() {
    setPageNumber(function (currNumber) {
      return currNumber + 1;
    });
  }

  function pageDecrement() {
    setPageNumber(function (currNumber) {
      return currNumber - 1;
    });
  }

  return (
    <div
      style={{
        marginTop: "12px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: "50px",
          gap: "1rem",
        }}
      >
        <p>
          Page <strong style={{ color: "lightgray" }}>{pageNumber}</strong> of{" "}
          {<strong>{tableDataSize / 10}</strong>}
        </p>
        <div style={{ display: "flex", gap: "6px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid lightgray",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            disabled={pageNumber === 1 ? true : false}
            onClick={function () {
              pageDecrement();
            }}
          >
            <GrFormPreviousLink />
          </button>

          <PageButtons size={tableDataSize} />

          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid lightgray",
              borderRadius: "2px",
              cursor: "pointer",
            }}
            disabled={pageNumber === tableDataSize / 10 ? true : false}
            onClick={function () {
              pageIncrement();
            }}
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
