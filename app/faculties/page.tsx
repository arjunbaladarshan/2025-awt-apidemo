import Faculty from "@/types/Faculty";
import callApi from "@/utils/callApi";
import React from "react";

async function Faculties() {
  const data = await callApi("faculties", "GET", 10);
  return (
    <div>
      {data.map((fac: Faculty) => (
        <h1>{fac.facultyCode}</h1>
      ))}
    </div>
  );
}

export default Faculties;
