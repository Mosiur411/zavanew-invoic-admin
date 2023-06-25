
export const SideMenu = [
    {
        id: 1,
        to: '/',
        link: "Dashboard",
        icon: "icon material-icons md-home",
        children: [
            {
                id: 1,
                _id: 1,
                to: 'https://backmin.zavawholesale.com/',
                link: "Zava",
            },
            {
                id: 1,
                _id: 2,
                to: 'https://aizafgroup.web.app/dashboard',
                link: "Retwho",
            },
        ]
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
        link: "Orders",
        id: 3,
        icon: "icon material-icons md-shopping_cart",
        children: [
            {
                id: 3,
                _id: 1,
                to: '/order/all',
                link: "All Ordered Invoice",
            },
            {
                id: 3,
                _id: 2,
                to: '/order/due',
                link: "Due Invoice",
            },
            {
                id: 3,
                _id: 3,
                to: '/order/check',
                link: "Check Invoice",
            },
            {
                id: 3,
                _id: 4,
                to: '/order/cash',
                link: "Cash Invoice",
            },
        ]
    },
    {
        id: 11,
        link: "Sales",
        icon: "icon material-icons md-point_of_sale",
        children: [
            {
                id: 11,
                _id: 1,
                to: '/sale/all',
                link: "All Sales",
            },
            // {
            //     id: 11,
            //     _id: 2,
            //     to: '/sale/check',
            //     link: "Check",
            // },
            // {
            //     id: 11,
            //     _id: 3,
            //     to: '/sale/cash',
            //     link: "Cash",
            // },
            {
                id: 11,
                _id: 4,
                to: '/sale/online',
                link: "Online",
            },
            {
                id: 11,
                _id: 5,
                to: '/sale/offline',
                link: "Offline",
            },
        ]

    },
    {
        id: 12,
        link: "Report",
        to: '/report',
        icon: "icon material-icons md-shopping_report",

    },
    {
        id: 10,
        link: "User",
        icon: "icon material-icons md-person_remove",
        children: [
            {
                id: 10,
                _id: 1,
                to: '/user/employee',
                link: "Employee",
            },
            {
                id: 10,
                _id: 2,
                to: '/user/customer',
                link: "Customer",
            }
        ]
    },

]
