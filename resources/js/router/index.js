import { createRouter, createWebHistory } from 'vue-router'
 
import ClientIndex from '../Components/clients/ClientIndex.vue';
import ClientCreate from '../Components/clients/ClientCreate.vue';
import ClientEdit from '../Components/clients/ClientEdit.vue';

import NoteIndex from '../Components/notes/NoteIndex.vue';
import NoteCreate from '../Components/notes/NoteCreate.vue';
import NoteEdit from '../Components/notes/NoteEdit.vue';



const routes = [
    {
        path: '/clientlists',
        name: 'client.index',
        component: ClientIndex
    },
    {
        path: '/clientlists/create',
        name: 'client.create',
        component: ClientCreate
    },
    {
        path: '/clientlists/:id/edit',
        name: 'client.edit',
        component: ClientEdit,
        props: true
    },


    {
        path: '/notelists',
        name: 'note.index',
        component: NoteIndex
    },
    {
        path: '/notelists/create',
        name: 'note.create',
        component: NoteCreate
    },
    {
        path: '/notelists/:id/edit',
        name: 'note.edit',
        component: NoteEdit,
        props: true
    },

];
 
export default createRouter({
    history: createWebHistory(),
    routes
})