import { defineComponent, ref } from 'vue'
import { Input } from 'ant-design-vue'
import './index.scss'
export default defineComponent({
    setup() {

        const message = ref('home')

        const getMessage = () => {
            console.log(message.value)
        }

        return () => <>
            <h1> v-model 未绑定的bug已经提给ant design vue的作者了 这个大需求应该会改</h1>
            <Input v-model={message.value}/>
            <input v-model={message.value}/>
            <button onClick={getMessage}>button</button>
        </>
    }
})