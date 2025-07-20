// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '成贤神秘小站点',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/qlsalj/newbie' }],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: '新生读物',
					autogenerate: { directory: 'guides' },
				},
				{
					label: '计协招新',
					link: '/recruitment',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/qlsalj/newbie/edit/main/src/content/docs/',
			},
		}),
	],
});
