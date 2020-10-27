import { Layout } from 'ant-design-vue'

import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return () => <Layout.Footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
    }
})