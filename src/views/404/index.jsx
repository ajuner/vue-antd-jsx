import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({


    setup() {
        const router = useRouter()

        const goHome = () => {
            router.push('/')
        }
        return () => <Button onclick={goHome}>返回首页</Button>
    }
})