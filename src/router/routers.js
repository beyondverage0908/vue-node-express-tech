export default [
	{
		path: '/',
		name: '/',
		component: () => import('../components/corss-origin/index')
	},
	{
		path: '/demo',
		name: 'demo',
		component: () => import('../components/corss-origin/index')
	},
	{
		path: '/module-demo',
		name: 'module-demo',
		component: () => import('../components/module-demo/index')
	}
]