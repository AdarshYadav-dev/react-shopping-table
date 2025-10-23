import React from "react";

const colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];

const ShoppingTable = () => {
  const rows = Array.from({ length: 12 });

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Color</th>
          <th>Availability</th>
          <th>Unit Price</th>
          <th>Subtotal</th>
          <th>Qty</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((_, i) => (
          <tr key={i}>
            <td>
              <div className={`color ${colors[i % colors.length]}`}></div>
            </td>
            <td>0</td>
            <td>
              <b>£87.07</b>
            </td>
            <td>£0.00</td>
            <td>
              <input type="number" className="bottom-input" defaultValue="0" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingTable;
