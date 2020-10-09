import React from "react";

const OrderView = (props) => {
  const renderTable = ({ orderdata }) => {
    if (orderdata) {
      return orderdata.map((item) => {
        return (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.email}</td>
            <td>{item.items.length}</td>
            <td>{item.address}</td>
            <td>{item.total}</td>
            <td>Placed</td>
          </tr>
        );
      });
    }
  };

  return (
    <div>
      <center>
        <h3>Orders List</h3>
      </center>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>User Email</th>
            <th>Items</th>
            <th>Address</th>
            <th>Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{renderTable(props)}</tbody>
      </table>
    </div>
  );
};

export default OrderView;
