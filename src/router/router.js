export default [
    {
        path: '/',
        redirect: '/login'
    },{
        path: '/login',
        component:r=>require.ensure([],()=>r(require('../page/login.vue')),'login')
    },{
        path: '/index',
        //component: r => require(['../layout/layout.vue'], r),
        component: r => require.ensure([],()=>r(require('../layout/layout.vue')),'layout'),
        children: [{
            path: '',
            component: r=>require.ensure([],()=>r(require('../page/index.vue')),'index')
        },{
            path: '/one',
            component: r=>require.ensure([],()=>r(require('../page/one.vue')),'one')
        },{
            path: '/two',
            component: r=>require.ensure([],()=>r(require('../page/two.vue')),'two')
        },{
            path: '/three',
            component:  r=>require.ensure([],()=>r(require('../page/one.vue')),'one')
        },{
            path: '/four',
            component:   r=>require.ensure([],()=>r(require('../page/two.vue')),'two')
        },{
            path: '/five',
            component:  r=>require.ensure([],()=>r(require('../page/one.vue')),'one')
        },{
            path: '/six',
            component:  r=>require.ensure([],()=>r(require('../page/two.vue')),'two')
        },{
            path: '/seven',
            component:  r=>require.ensure([],()=>r(require('../page/one.vue')),'one')
        },{
            path: '/eight',
            component:  r=>require.ensure([],()=>r(require('../page/two.vue')),'two')
        }]
    }
];