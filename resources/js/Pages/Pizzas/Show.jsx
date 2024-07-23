import React, {useEffect} from 'react'
import {Head, router} from "@inertiajs/react";
import PizzaStats from "@/Pages/Pizzas/Partials/PizzaStats.jsx";

const Show = ({ pizza }) => {

    useEffect(() => {
        const interval = setInterval(()=>{
            router.reload({only: ['pizza']});
        },1000);

        return() => {
            clearInterval(interval);
        }
    }, []);

  return (
     <div className="max-w-3xl mx-auto py-12">
         <Head title={`Order # ${pizza.id}`}></Head>
    <div className="py-8">
      <img className={"w-40 h-40 rotate-50 mx-auto"} src={'../../Dominos_pizza_logo.svg'} />
    </div>
         <PizzaStats currentStatus={pizza.status}></PizzaStats>

         <div className={"text-center mt-4"}>
             <p className={"text-lg font-semibold"}>{pizza.chef} started {pizza.status.toLowerCase()} your order <span className={"underline font-semibold"}> {pizza.last_updated} </span></p>
         </div>
</div>
  )
}

export default Show
