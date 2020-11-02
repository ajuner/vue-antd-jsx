import { defineComponent, reactive } from 'vue'

import { Form, Input, Select, DatePicker, Switch, Checkbox, Radio, Button } from 'ant-design-vue'

import './index.scss'

export default defineComponent({
    setup() {

        const state = reactive({
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            form: {
              name: '',
              region: undefined,
              date1: undefined,
              delivery: false,
              type: [],
              resource: '',
              desc: '',
            },
        })

        const createForm = () => {
            console.log(state.form)
        }

        const renderForm = () => {
            return <Form model={state.form} labelCol={state.labelCol} wrapperCol={state.wrapperCol}>
                    <Form.Item label="Activity name">
                        <Input v-model={state.form.name}/>
                    </Form.Item>
                    <Form.Item label="Activity zone">
                        <Select v-model={state.form.region} placeholder="please select your zone">
                            <Select.Option value="shanghai">
                                Zone one
                            </Select.Option>
                            <Select.Option value="beijing">
                                Zone two
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Activity time">
                        <DatePicker class="w100" v-model={state.form.date1} show-time type="date" placeholder="pick a date"/>
                    </Form.Item>
                    <Form.Item label="Instant delivery">
                        <Switch v-model={state.form.delivery} />
                    </Form.Item>
                    <Form.Item label="Activity type">
                        <Checkbox.Group v-model={state.form.type}>
                            <Checkbox value="1" name="type">
                                Online
                            </Checkbox>
                            <Checkbox value="2" name="type">
                                Promotion
                            </Checkbox>
                            <Checkbox value="3" name="type">
                                Offline
                            </Checkbox>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item label="Resources">
                        <Radio.Group v-model={state.form.resource}>
                            <Radio value="1">
                                Sponsor
                            </Radio>
                            <Radio value="2">
                                Venue
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Activity form">
                        <Input v-model={state.form.desc} type="textarea"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={()=>{createForm()}}>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
        }
        return () => <>{renderForm()}</>
    }
})