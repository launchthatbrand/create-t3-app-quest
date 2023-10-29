import React from "react";

type Props = {
  params: {
    memberId: string;
  };
};

function OrderPage({ params: { memberId } }: Props) {
  return (
    <>
      <div>MemberPage</div>
      <div>{memberId}</div>
    </>
  );
}

export default OrderPage;
