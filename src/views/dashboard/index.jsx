import { defineComponent, reactive, ref, onMounted } from 'vue'
import './index.scss'
import { postData } from '@/utils/request'
export default defineComponent({
    setup() {

        const data = reactive({
            list:[]
        })

        const message = ref('home')

        const renderPage = () => {
            return <h1>{message.value}</h1>
        }

        onMounted(async ()=>{
            const res = await postData('/mock/list')
            data.list  = res.list
        })

        return () => <>{renderPage()}</>
    }
})