const admin = [
    {
        path: '/admin',
        component: () => import('../layouts/admin.vue'),
        children: [
            {
                path: 'users',
                name: 'admin-users',// quy chuẩn nodejs( name là  - chứ k dùng .)
                component: () => import('../pages/admin/users/index.vue')
            }
        ]
    }
]
export default admin