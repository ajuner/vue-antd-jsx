import { defineComponent } from 'vue'

import { Button } from 'ant-design-vue'

export default defineComponent({

    props: {
        modelValue: {
            type: String,
            required: true
        }
    },

    setup(props, { emit, slots }) {

        const renderCustom = () => {
            return <div>
                <Button onClick={()=>{eClick(props.modelValue)}}>{props.modelValue}</Button>
                <span style="color:red">{slots.red()}</span>
                <span style="color:green">{slots.green()}</span>
                <span style="color:black">{slots.default()}</span>
            </div>
        }
        
        const eClick = (val) => {
            //emit function
            console.log('emit方法触发')
            emit('getprops', val)
            emit('update:modelValue', '123')
        }

        
        return () => renderCustom()
    }
})