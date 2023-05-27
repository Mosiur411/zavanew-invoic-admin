
export const SideMenu = [
    {
        id: 1,
        to: '/',
        link: "Dashboard",
        icon: "icon material-icons md-home"
    },
    {
        id: 2,
        link: "Products",
        icon: "icon material-icons md-shopping_bag",
        children: [
            {
                id: 2,
                _id: 1,
                to: '/product/list',
                link: "Product List",
            },
        ]
    },
    {
        link: "Orders",
        id: 3,
        icon: "icon material-icons md-shopping_cart",
        children: [
            {
                id: 3,
                _id: 1,
                to: '/order/list1',
                link: "Order list 1",
            },
        ]
    },
    {
        id: 5,

        link: "Add product",
        icon: "icon material-icons md-add_box",
        children: [
            {
                id: 5,
                _id: 1,
                to: '/addproduct/1',
                link: "Add product 1",
            },
            
        ]
    },
    {
        id: 10,
        link: "User",
        icon: "icon material-icons md-settings",
        children: [
            {
                id: 10,
                _id: 1,
                to: '/settings/sample1',
                link: "Employee",
            },
            {
                id: 10,
                _id: 2,
                to: '/settings/sample2',
                link: "Customer",
            }
        ]
    },
   
]
