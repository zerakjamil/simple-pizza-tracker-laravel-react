import React from 'react';
import { Layout, Breadcrumb, Button, Card, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from "@inertiajs/react";
import UpdatePizzaOrderForm from "@/Pages/Pizzas/Partials/UpdatePizzaOrderForm.jsx";

const { Content } = Layout;
const { Title } = Typography;

const Edit = (props) => {
  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={<Title level={2} className="font-semibold text-xl text-gray-800 leading-tight">Order #({props.pizza.id})</Title>}
    >
      <Head title={`Order #${props.pizza.id}`} />
      <Layout className="layout">
        <Content style={{ padding: '20px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Pizzas</Breadcrumb.Item>
            <Breadcrumb.Item>Edit</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Link href={route('pizzas.index')}>
              <Button type="primary" icon={<ArrowLeftOutlined />} style={{ marginBottom: '20px' }}>
                Go Back
              </Button>
            </Link>
            <Card bordered={false}>
              <UpdatePizzaOrderForm pizza={props.pizza} />
            </Card>
          </div>
        </Content>
      </Layout>
    </AuthenticatedLayout>
  );
};

export default Edit;
