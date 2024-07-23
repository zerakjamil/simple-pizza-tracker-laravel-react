import React from 'react';
import { Button, Form, Input, Select } from "antd";
import { useForm } from "@inertiajs/react";
import {Transition} from "@headlessui/react";

const UpdatePizzaOrderForm = ({ pizza }) => {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        size: pizza.size,
        crust: pizza.crust,
        status: pizza.status,
        toppings: Array.isArray(pizza.toppings) ? pizza.toppings.join(', ') : ''
    });

    const submit = () => {
        const submitData = {
            ...data,
            toppings: data.toppings.split(',').map(topping => topping.trim())
        };

        patch(route('pizzas.update', pizza.id), {
            preserveScroll: true,
            submitData,
        });
    };

    return (
        <section>
            <header>
                <h2>Edit Order #{pizza.id}</h2>
            </header>
            <Form onFinish={submit} layout="vertical">
                <Transition
                    show={recentlySuccessful}
                    enter={"transition ease-in-out"}
                    enterFrom="transform opacity-0"
                    leave={"transition ease-in-out"}
                    leaveTo="transform opacity-0"
                >
                    <p className="text-green-500">Order updated successfully!</p>
                </Transition>
                <Form.Item label="Size" name="size">
                    <Select defaultValue={data.size} disabled={true}>
                        <Option value="Small">Small</Option>
                        <Option value="Medium">Medium</Option>
                        <Option value="Large">Large</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Crust" name="crust">
                    <Select defaultValue={data.crust} disabled={true}>
                        <Option value="Thin">Thin</Option>
                        <Option value="Thick">Thick</Option>
                        <Option value="Stuffed">Stuffed</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Select defaultValue={data.status} onChange={(value) => setData({ ...data, status: value })}>
                        <Option value="Ordered">Ordered</Option>
                        <Option value="Preparing">Preparing</Option>
                        <Option value="Baking">Baking</Option>
                        <Option value="Ready">Ready</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Toppings" name="toppings">
    <Input defaultValue={data.toppings} onChange={(e) => setData({ ...data, toppings: e.target.value })} />
</Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save Changes
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
};

export default UpdatePizzaOrderForm;
