export default function SalesReport(){

    const sales = [
        { product_name: 'rice', product_id: 1, sales_income: 500, total_sales: 5},
        { product_name: 'corn', product_id: 2, sales_income: 2600, total_sales: 26 },
        { product_name: 'onion', product_id: 3, sales_income: 1300, total_sales: 13 },
        { product_name: 'garlic', product_id: 4, sales_income: 1700, total_sales: 17 },
        { product_name: 'potato', product_id: 5, sales_income: 2200, total_sales: 22 },
    ];

    return (
        <>
            <div class = "title-bar">
                <h3 class="mb-8 text-3xl font-bold">Sales Report</h3>
            </div>
            <div class = "button-bar">
                <div  class = "btn-bar-elements">
                    <button class="btn-element">Weekly</button>
                    <button class="btn-element">Monthly</button>
                    <button class="btn-element">Annually</button>
                </div>
            </div>
            <div class = "module-body">
            <div class="flex flex-col overflow-x-auto">
                <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                            <th scope="col" class="px-6 py-4">Product Name</th>
                            <th scope="col" class="px-6 py-4">Sales Income</th>
                            <th scope="col" class="px-6 py-4">Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sales.map((sale) => {
                                return <tr key = {sale.product_id} class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4">{sale.product_name}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{sale.sales_income}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{sale.total_sales}</td>
                                </tr> })
                        }
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
            </div>
            <br></br>
        </>
    )
}