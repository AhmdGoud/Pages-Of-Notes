import { Outlet } from "react-router-dom";
// import { TheNote } from "./TheNote";

export function TheList() {
  return (
    <>
      <div className="theOutlet">
        <Outlet />
        {/* <TheNote /> */}
      </div>
    </>
  );
}
