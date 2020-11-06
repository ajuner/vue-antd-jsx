import { defineComponent, ref } from 'vue'

import Custom from './component/custom'

export default defineComponent({

    setup() {
        const message = ref('tool')

        const getProps = (val) => {
            console.log(val)
        }

        const renderCustom = () => {
            //slots
            const slots = {
                red: () => <p>red slot</p>,
                green: () => <p>green slot：green</p>,
                default: () => <p>default slot：default</p>
            }
            return <div>
                <h1>slot，emit</h1>
                <Custom v-model={message.value} v-slots={slots} onGetprops={getProps}></Custom>

            </div>
        }
        return () => <>{renderCustom()}</>
    }
})