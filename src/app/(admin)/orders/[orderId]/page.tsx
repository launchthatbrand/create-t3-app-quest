import React from "react";

type Props = {
  params: {
    orderId: string;
  };
};

function OrderPage({ params: { orderId } }: Props) {
  return (
    <>
      <div>OrderPage</div>
      <div>{orderId}</div>
    </>
  );
}

export default OrderPage;
