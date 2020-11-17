import { Calendar, Input } from 'ant-design-vue'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {

        const { renderCalendar } = CalendarModel({value: '', full: false})

        const InputJSX1 = InputModel(1)

        const InputJSX2 = InputModel(2)

        const renderDemo = () => {
            return <div>
                {InputJSX1.renderInput()}
                {InputJSX2.renderInput()}
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

function InputModel(val) {
    const inputState = reactive({
        val: val,
    })

    const renderInput = () => {
        return (
            <Input v-model={[inputState.val, 'value']}></Input>
        )
    }

    return {
        renderInput
    }
}