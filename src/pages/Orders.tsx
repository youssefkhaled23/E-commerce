import Heading from "@componets/common/heading/Heading";
import { ProductInfo } from "@componets/ecommerce/ProductInfo/ProductInfo";
import { Loading } from "@feedback/index";
import { Modal, Table } from "react-bootstrap";
import useOrders from "@hooks/useOrders";

const Orders = () => {
  const {
    error,
    loading,
    showModal,
    selectedProduct,
    detailsHandler,
    closeModalHandler,
    orderList
  } = useOrders();
  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((e) => (
            <ProductInfo
              title={e.title}
              img={e.img}
              key={e.id}
              price={e.price}
              direction="column"
              style={{ marginTop: "10px" }}
              quantity={e.quantity}
            />
          ))}
        </Modal.Body>
      </Modal>
      <Heading title="My Order" />
      <Loading status={loading} error={error} type="table" />
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Items</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((e) => (
            <tr key={e.id}>
              <td>#{e.id}</td>
              <td>
                {e.items.length} item(s) {" / "}{" "}
                <span
                  onClick={() => detailsHandler(e.id)}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Product Details
                </span>
              </td>
              <td>{e.subTotal.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Orders;
