import React from 'react';
import {Button, Space, Table} from 'antd';
import {Link} from "@inertiajs/react";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import { Inertia } from '@inertiajs/inertia';

const PizzasTable = ({ pizzas }) => {



  const columns = [
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
      {
          title: 'Chef',
          dataIndex: 'chef',
          key: 'chef',
      },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },

      {
          title: 'Actions',
            key: 'actions',
          render: (text, record) => (
      <Space size="middle">
          <Link href={route('pizzas.edit', record.id)}>
              <Button icon={<EditOutlined />} />
          </Link>
          <Link href={`/order/${record.id}`}>
              <Button icon={<EyeOutlined />} />
          </Link>
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} style={{ color: 'red', borderColor: 'red' }} />
      </Space>
          ),
      }
  ];

        const handleDelete = (id) => {
            Inertia.delete(route('pizzas.destroy', id),);
        }
  return <Table
      columns={columns}
      dataSource={pizzas}
  />;
};

export default PizzasTable;
