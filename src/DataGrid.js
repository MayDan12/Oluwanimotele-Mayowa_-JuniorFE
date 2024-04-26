// components/DataGrid.js

import React from "react";

const DataGrid = ({ data }) => {
  return (
    <>
      <div className="container data-grid">
        {/* Your data grid UI goes here */}
        <div className="grid-4 margin">
          {data.map((rocket) => (
            <div
              key={rocket.id}
              className="card border-gray-200 p-4 rounded shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{rocket.name}</h2>
              <p className="card-title">{rocket.type}</p>
              <p>Status: {rocket.status}</p>
              <p>{rocket.original_launch}</p>
              <p>{rocket.description}</p>
              {/* Add more details here */}
            </div>
          ))}
        </div>
        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Original Launch</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.original_launch}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default DataGrid;
