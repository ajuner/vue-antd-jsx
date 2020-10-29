import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const message = ref('nothing-2')

        const renderPage = () => {
            return <h1>{message.value}</h1>
        }
        return () => <>{renderPage()}</>
    }
})