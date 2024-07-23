import React from 'react'
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import PizzasTable from "@/Components/Pizzas/PizzasTable.jsx";

const Index = (props) => {
  return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Pizzas</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <PizzasTable pizzas={props.pizzas} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

  )
}

export default Index
