import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
 
export default function useNotes() {
    const note = ref([])
    const notes = ref([])
 
    const errors = ref('')
    const router = useRouter()
 
    const getNotes = async () => {
        let response = await axios.get('/api/notes')
        notes.value = response.data.data
    }
 
    const showNote = async (id) => {
        let response = await axios.get(`/api/notes/${id}`)
        note.value = response.data.data
    }
 
    const storeNote = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/notes', data)
            await router.push({ name: 'note.index' })
        } catch (e) {
            if (e.response && e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            } else {
                console.error('An unexpected error occurred:', e);
            }
        }
 
    }
 
    const updateNote = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/notes/${id}`, note.value)
            await router.push({ name: 'note.index' })
        } catch (e) {
            if (e.response && e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            } else {
                console.error('An unexpected error occurred:', e);
            }
        }
    }

    const destroyNote = async (id) => {
        await axios.delete(`/api/notes/${id}`)
    }
 
    return {
        errors,
        note,
        notes,
        getNotes,
        storeNote,
        showNote,
        updateNote,
        destroyNote
    }
}