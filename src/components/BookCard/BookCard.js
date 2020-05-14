import React from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const BookCard = (props) => {
  const { bookCover, title, decription, nameSeller } = props;
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt="example"
          src={bookCover}
          style={{ height: 300, objectFit: "contain" }}
        />
      }
    >
      <Meta title={title} description={decription} />
      <p style={{ marginTop: 10, marginBottom: 10 }}>Người Bán: {nameSeller}</p>
      <Button type="primary" block>
        Thêm vào giỏ hàng
      </Button>
    </Card>
  );
};

export default BookCard;
