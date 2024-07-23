import React from 'react'
import {Button, Space} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {Link} from "@inertiajs/react";

const ActionsLink = (props) => {
  return (
      <Space size="middle">
          <Link to={props.edit}>
              <Button icon={<EditOutlined />} />
          </Link>
          <Link to={props.show}>
              <Button icon={<EyeOutlined />} />
          </Link>
          {props.children}
      </Space>
  )
}

export default ActionsLink
