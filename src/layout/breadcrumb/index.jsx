import { defineComponent } from 'vue'

import { Breadcrumb } from 'ant-design-vue'

import { useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const route = useRoute()
        const renderBreadItem = (name) => {
            return <Breadcrumb.Item>{name}</Breadcrumb.Item>
        }
        return () => <Breadcrumb>
            {
                route.matched.map(item=> {
                    return renderBreadItem(item.name)
                })
            }
        </Breadcrumb>
    }
})