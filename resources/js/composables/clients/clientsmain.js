import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
 
export default function useClients() {
    const client = ref([])
    const clients = ref([])
 
    const errors = ref('')
    const router = useRouter()
 
    const getClients = async () => {
        let response = await axios.get('/api/clients')
        clients.value = response.data.data
    }
 
    const showClient = async (id) => {
        let response = await axios.get(`/api/clients/${id}`)
        client.value = response.data.data
    }
 
    const storeClient = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/clients', data)
            await router.push({ name: 'client.index' })
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
 
    const updateClient = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/clients/${id}`, client.value)
            await router.push({ name: 'client.index' })
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

    const destroyClient = async (id) => {
        await axios.delete(`/api/clients/${id}`)
    }
 
    return {
        errors,
        client,
        clients,
        getClients,
        storeClient,
        showClient,
        updateClient,
        destroyClient
    }
}