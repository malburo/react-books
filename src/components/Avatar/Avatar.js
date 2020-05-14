import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

class AvatarUser extends React.Component {
  render() {
    return <Avatar size="large" icon={<UserOutlined />} />;
  }
}
export default AvatarUser;
