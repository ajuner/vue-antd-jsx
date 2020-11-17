import { Calendar } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {

        const { getCanendarVal, renderCalendar } = CalendarModel({value: '', full: false})

        const { renderInput } = InputModel()

        const renderDemo = () => {
            return <div>
                {renderInput(getCanendarVal)}
                {renderCalendar()}
            </div>
        }
        return () => <>{renderDemo()}</>
    }
})

function CalendarModel({value, full}) {
    const calendarState = reactive({
        value: value,
        full: full
    })

    const renderCalendar = () => {
        return <Calendar v-model={[calendarState.value, 'value']} fullscreen={calendarState.full} valueFormat="YYYY-MM-DD"></Calendar>
    }

    const getCanendarVal = () => {
        return calendarState.value
    }

    const getCanendarFull = () => {
        return calendarState.full
    }

    return {
        getCanendarVal,
        getCanendarFull,
        renderCalendar
    }
}

function InputModel() {
    const inputState = reactive({
        val: '1',
    })

    const renderInput = (call) => {
        return (
            call?.()?<Input v-model={[inputState.val, 'value']}></Input>:<span>{inputState.val}</span>
        )
    }

    return {
        renderInput
    }
}