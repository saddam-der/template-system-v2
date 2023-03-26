interface data {
  title: string;
  icon?: string;
  url: string;
  subMenu?: data[];
}

export const navigationConfig: data[] = [
  {
    title: 'DASHBOARD',
    url: '/dashboard',
    subMenu: [
      {
        title: 'Dashboard',
        icon: 'Fibox',
        url: '/dashboard',
        subMenu: [
          {
            title: 'Dashboard 2',
            icon: 'Fibox',
            url: '/dashboard/test',
          },
        ],
      },
      {
        title: 'Analytics',
        icon: 'Fibox',
        url: '/dashboard/analytics',
        subMenu: [
          {
            title: 'Sales',
            icon: 'Fibox',
            url: '/dashboard/analytics/sales',
          },
        ],
      },
    ],
  },
  {
    title: 'MASTER DATA',
    url: '/master-data',
    subMenu: [
      {
        title: 'Customer',
        url: '#',
        icon: 'Fibox',
        subMenu: [
          {
            title: 'customer List',
            url: '/master-data/customer/list',
            subMenu: [
              {
                title: 'customer List 2',
                url: '/master-data/customer/list',
              },
            ],
          },
          {
            title: 'Customer Add',
            url: '/master-data/customer/add',
          },
          {
            title: 'Customer Edit',
            url: '/master-data/customer/edit',
          },
        ],
      },
      // item.detail_manager.map((itm) =>
      //   itm.detail_sales.map((it) =>
      //     it.detail_target.map((i) =>
      //       i.detail.map((j) => j.total_sales).reduce((a, b) => a + b, 0)
      //     )
      //   )
      // )
      {
        title: 'Category',
        icon: 'Fibox',
        url: '/master-data/category',
      },
      {
        title: 'User',
        icon: 'Fibox',
        url: '/master-data/user',
      },
    ],
  },
  {
    title: 'MISC',
    url: '/misc',
    subMenu: [
      {
        title: 'Settings',
        icon: 'Fibox',
        url: '/misc/settings',
      },
    ],
  },
  {
    title: 'TRACK',
    url: '/track',
  },
];
