export default function ProductListings(){

    const products = [
        { product_name: 'rice', type: 1, price: 50, product_id: 1, description: "", quantity: 7 },
        { product_name: 'corn', type: 1, price: 80, product_id: 2, description: "", quantity: 7 },
        { product_name: 'onion', type: 1, price: 120, product_id: 3, description: "", quantity: 7 },
        { product_name: 'garlic', type: 1, price: 100, product_id: 4, description: "", quantity: 7 },
        { product_name: 'potato', type: 1, price: 150, product_id: 5, description: "", quantity: 7 },
        { product_name: 'tomato', type: 1, price: 60, product_id: 6, description: "", quantity: 7 },
        { product_name: 'eggplant', type: 1, price: 50, product_id: 8, description: "", quantity: 7 },
        { product_name: 'chicken', type: 2, price: 200 , product_id: 9, description: "", quantity: 7 },
        { product_name: 'turkey', type: 2, price: 280, product_id: 10, description: "", quantity: 7 },
        { product_name: 'egg', type: 2, price: 5, product_id: 11, description: "", quantity: 7 },
        { product_name: 'quail egg', type:2, price: 2, product_id: 12, description: "", quantity: 7 },
        { product_name: 'cabbage', type:1, price: 200, product_id: 7, description: "", quantity: 7 },
    ];

    return (
        <>
            <div class = "title-bar">
                <h3 class="mb-8 text-3xl font-bold">Product Listings</h3>
            </div>
            <div class = "dropdown-bar">
                <div class="dropdown">
                    <button class="dropbtn">Sort by</button>
                    <div class="dropdown-content">
                        <button>Ascending</button>
                        <button>Descending</button>
                    </div>
                </div>
                <div class="dropdown">
                <button class="dropbtn">Sort by</button>
                    <div class="dropdown-content">
                        <button>Name</button>
                        <button>Type</button>
                        <button>Price</button>
                        <button>Quantity</button>
                    </div>
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
                            <th scope="col" class="px-6 py-4">Product Type</th>
                            <th scope="col" class="px-6 py-4">Product Price</th>
                            <th scope="col" class="px-6 py-4">Product Description</th>
                            <th scope="col" class="px-6 py-4">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return <tr key = {product.product_id} class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4">{product.product_name}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{product.type}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{product.price}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{product.description}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{product.quantity}</td>
                                </tr> })
                        }
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}