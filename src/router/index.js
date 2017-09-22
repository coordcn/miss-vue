import Vue from 'vue'
import Router from 'vue-router'

function route (path, name, subpath) {
    let router = {
        path: path,
        component: () => import(`../components/${name}/${name}.vue`)
    }

    if (Array.isArray(subpath) && subpath.length > 0) {
        let children = [];
        for (let i = 0; i < subpath.length; i++) {
            children.push({
                path: subpath[i],
                component: () => import(`../components/${name}/${subpath[i]}.vue`)
            });
        }
        
        router.children = children;
    }

    return router;
}

Vue.use(Router)

export default new Router({
  routes: [
    route('/task', 'task', ['content']),
    route('/project', 'project', ['content']),
    route('/group', 'group', ['content']),
    route('/product', 'product', ['content']),
    route('/custom', 'custom', ['content']),
    route('/supplier', 'supplier', ['content']),
    route('/equip', 'equip', ['content']),
    route('/stock', 'stock', ['content']),
    route('/report', 'report', ['content']),
    route('/settings', 'settings', ['content']),
    route('/help', 'help', ['content']),
    { path: '*', redirect: '/task' }
  ]
})
