const admin = [
    {
        path: '/admin',
        component: () => import('../layouts/admin.vue'),
        children: [
            {
                path: 'users',
                name: 'admin-users',// quy chuẩn nodejs( name là  - chứ k dùng .)
                component: () => import('../pages/admin/users/index.vue')
            },
            {
                path: 'roles',
                name: 'admin-roles',// quy chuẩn nodejs( name là  - chứ k dùng .)
                component: () => import('../pages/admin/roles/index.vue')
            },
            {
                path: 'settings',
                name: 'admin-settings',// quy chuẩn nodejs( name là  - chứ k dùng .)
                component: () => import('../pages/admin/settings/index.vue')
            }
        ]
    }
]
export default admin