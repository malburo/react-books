import React from "react";
import "antd/dist/antd.css";
import BookCard from "../components/BookCard/BookCard";
export default { title: "Cards" };

const data = {
  _id: "5ea64e1994a0de2bb4e83fa9",
  title: "You don't know js",
  decription: "Một quyển sách javascript vô cùng thú vị",
  bookCover:
    "http://res.cloudinary.com/malburo/image/upload/v1588086262/lazoprsivfw4m1jakzpr.jpg",
  seller: "5ea58cf882aa501c38ca3770",
  nameSeller: "Tong quoc bao",
};
export const Book = () => <BookCard data={data}></BookCard>;
