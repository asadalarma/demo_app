import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// Import your router and component
import router from './router';
import NoteIndex from './Components/notes/NoteIndex.vue';
import ClientIndex from './Components/clients/ClientIndex.vue';


const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Use the plugins and router
        app.use(plugin)
           .use(ZiggyVue, Ziggy)
           .use(router);

        // Register global components if needed
        app.component('NoteIndex', NoteIndex);
        app.component('ClientIndex', ClientIndex);

        app.mount(el);
        return app;
    },
    progress: {
        color: '#4B5563',
    },
});