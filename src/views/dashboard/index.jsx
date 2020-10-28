import { defineComponent, reactive } from 'vue'
import './index.scss'
export default defineComponent({
    setup() {
        const state = reactive({
            count: 0
        })
        const add = () => {
            state.count++
        }
        return () => <div>
            <button class="btn" onClick={add} >{state.count}</button>
        </div>
    }
})