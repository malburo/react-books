import React from "react";
import { Input } from "antd";
const { Search } = Input;

class SearchBook extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <Search placeholder="input search text" onChange={onChange} enterButton />
    );
  }
}
export default SearchBook;
