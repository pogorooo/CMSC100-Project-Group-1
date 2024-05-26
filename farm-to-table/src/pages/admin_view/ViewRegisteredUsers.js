import './merchantPages.css';

export default function ViewRegisteredUsers(){

    const users = [
        { user_id: 1, first_name: "Jem", middle_name: "Magpantay", last_name: "De Venecia", user_type: "customer", email: "jmdevenecia@up.edu.ph" },
        { user_id: 2, first_name: "Clarence", middle_name: "A", last_name: "Manzanido", user_type: "customer", email: "camanzanido@up.edu.ph" },
        { user_id: 3, first_name: "Ashton Stephonie", middle_name: "", last_name: "Matias", user_type: "customer", email: "asmatias@gmail.com" },
        { user_id: 4, first_name: "Jean Nikolai", middle_name: "", last_name: "Victorio", user_type: "customer", email: "jnvictorio@gmail.com" }
    ]

    return (
        <>
            <div class = "title-bar">
                <h3 class="mb-8 text-3xl font-bold">Registered Users</h3>
            </div>
            <br></br>
            <div class = "module-body">
                <div class = "useraccount-list">
                    <div class="flex flex-col overflow-x-auto">
                        <div class="sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                        <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">#</th>
                                                <th scope="col" class="px-6 py-4">First</th>
                                                <th scope="col" class="px-6 py-4">Middle</th>
                                                <th scope="col" class="px-6 py-4">Last</th>
                                                <th scope="col" class="px-6 py-4">User Type</th>
                                                <th scope="col" class="px-6 py-4">Email</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user) => {
                                                    return <tr key = {user.user_id} class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{user.user_id}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{user.first_name}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{user.middle_name}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{user.last_name}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{user.user_type}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{user.email}</td>
                                                        </tr> })
                                            }        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "useraccount-report"></div>
            </div>
            <br></br>
        </>
    )
}