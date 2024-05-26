export default function ConfirmOrder(){

    const orders = [
        { transaction_id: 1, product_id: 7, quantity: 17, status: 0, email: "jmdevenecia@up.edu.ph", date: "", time: "" },
        { transaction_id: 2, product_id: 5, quantity: 13, status: 0, email: "camanzanido@up.edu.ph", date: "", time: "" },
    ]

    return (
        <>
            <div class = "title-bar">
                <h3 class="mb-8 text-3xl font-bold">Confirm Order</h3>
            </div>
            <br></br>
            <div class = "module-body">
                <div class="flex flex-col overflow-x-auto">
                <div class="sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                            <th scope="col" class="px-6 py-4">Transaction ID</th>
                            <th scope="col" class="px-6 py-4">Product ID</th>
                            <th scope="col" class="px-6 py-4">Order Quantity</th>
                            <th scope="col" class="px-6 py-4">Order Status</th>
                            <th scope="col" class="px-6 py-4">Email</th>
                            <th scope="col" class="px-6 py-4">Date ordered</th>
                            <th scope="col" class="px-6 py-4">Time</th>
                            <th scope="col" class="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => {
                                return <tr key = {order.transaction_id} class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4">{order.transaction_id}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.product_id}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.quantity}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.status}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.email}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.date}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{order.time}</td>
                                    <td class="whitespace-nowrap px-6 py-4"><button class = "confirm-btn">Confirm Order</button></td>
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