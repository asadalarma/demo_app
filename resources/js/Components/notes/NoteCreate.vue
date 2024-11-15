<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>
 
    <form class="space-y-6" @submit.prevent="saveNote">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <div class="mt-1">
                    <input type="text" name="title" id="title"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.title">
                </div>
            </div>
 
            <div>
                <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
                <div class="mt-1">
                    <input type="text" name="content" id="content"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="form.content">
                </div>
            </div>
 
        </div>
 
        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create Note
        </button>
    </form>
</template>
 
<script>
import useNote from '@/composables/notes/notesmain.js'
import { reactive } from 'vue'
 
export default {
    setup() {
        const form = reactive({
            title: '',
            content: ''
        })
 
        const { errors, storeNote } = useNote()
 
        const saveNote = async () => {
            await storeNote({ ...form })
        }
 
        return {
            form,
            errors,
            saveNote
        }
    }
}
</script>