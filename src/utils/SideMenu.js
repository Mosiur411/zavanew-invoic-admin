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
            {
                id: 2,
                _id: 2,
                to: '/product/grid',
                link: "Product grid",
            },
            {
                id: 2,
                _id: 3,
                to: '/product/grid2',
                link: "Product grid 2",
            },
            {
                id: 2,
                _id: 4,
                to: '/product/department',
                link: "Department",
            },
            {
                id: 2,
                _id: 5,
                to: '/product/categorie',
                link: "Categories",
            },
            {
                id: 2,
                _id: 6,
                to: '/product/subcategorie',
                link: "Sub Categorie",
            },
            {
                id: 2,
                _id: 7,
                to: '/product/childsubcategory',
                link: "Child Sub Category",
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
            {
                id: 3,
                _id: 2,
                to: '/order/list2',
                link: "Order list 2",
            },
            {
                id: 3,
                _id: 3,
                to: '/order/detail',
                link: "Order detail",
            }
        ]
    },
    {
        id: 4,

        link: "Sellers",
        icon: "icon material-icons md-store",
        children: [
            {
                id: 4,
                _id: 1,
                to: '/seller/cards',
                link: "Sellers cards",
            },
            {
                id: 4,
                _id: 2,
                to: '/seller/list',
                link: "Sellers list",
            },
            {
                id: 4,
                _id: 3,
                to: '/seller/profile',
                link: "Sellers profile",
            }
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
            {
                id: 5,
                _id: 2,
                to: '/addproduct/2',
                link: "Add product 2",
            },
            {
                id: 5,
                _id: 3,
                to: '/addproduct/3',
                link: "Add product 3",
            },
            {
                id: 5,
                _id: 4,
                to: '/addproduct/4',
                link: "Add product 4",
            }
        ]
    },
    {
        id: 6,
        link: "Transactions",
        icon: "icon material-icons md-monetization_on",
        children: [
            {
                id: 6,
                _id: 1,
                to: '/transaction/1',
                link: "Transaction 1",
            },
            {
                id: 6,
                _id: 2,
                to: '/transaction/2',
                link: "Transaction 2",
            }
        ]
    },
    {
        id: 7,
        to: '/reviews',
        link: "Reviews",
        icon: "icon material-icons md-comment",
    },
    {
        id: 8,
        to: '/brands',
        link: "Brands",
        icon: "icon material-icons md-stars",
    },
    /*     {
            link: "Statistics",
            icon: "icon material-icons md-pie_chart",
    
        }, */
    {
        id: 10,
        link: "Settings",
        icon: "icon material-icons md-settings",
        children: [
            {
                id: 10,
                _id: 1,
                to: '/settings/sample1',
                link: "Employee Add",
            },
            {
                id: 10,
                _id: 2,
                to: '/settings/sample2',
                link: "Costomer Add",
            }
        ]
    },
    {
        id: 11,
        to: '/starterpage',
        link: "Starter page ",
        icon: "icon material-icons md-local_offer",

    },
]
