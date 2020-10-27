import { Layout } from 'ant-design-vue'

import { defineComponent } from 'vue'

const Header = defineComponent({
    setup() {
        return () => <Layout.Header style="background: #fff; padding: 0"/>
    }
})
export default Header