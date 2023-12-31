import { useData } from "../app/shared/context/DataProvider";
import "./pagebuttons.css";

type Props = {
  size: number;
};

const PageButtons: React.FC<Props> = ({ size }) => {
  const { setPageNumber, pageNumber } = useData();

  console.log(pageNumber);

  const arr = [];
  const num = size / 10;
  for (let i = 1; i < num + 1; i++) {
    arr.push(
      <button
        className={`${pageNumber === i ? "activebtn" : "btn"}`}
        style={{ cursor: "pointer", color: "black" }}
        key={i}
        onClick={function () {
          setPageNumber(i);
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.3rem",
      }}
    >
      {arr}
    </div>
  );
};

export default PageButtons;
