import { defineComponent, reactive, ref, toRaw } from 'vue';
import { Form, Input, Button } from 'ant-design-vue';
import { useForm } from '@ant-design-vue/use';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import './index.scss'
export default defineComponent({
    setup() {

        const userRef = reactive({
            username: 'admin',
            password: '123456'
        })

        const rulesRef = reactive({
            username: [
                {
                    required: true,
                    message: 'Please input username'
                }
            ],
            password: [
                {
                    required: true,
                    message: 'Please input password'
                }
            ]
        })

        const { validate, validateInfos } = useForm(userRef, rulesRef)

        const store = useStore()

        const router = useRouter()

        const passwordType = ref('password')
        
        const renderForm = () => {
            return <Form model={userRef} label-col={{span: 6}} label-col={{span: 14}}>
                <Form.Item label="username" {...validateInfos.username}>
                    <Input value={userRef.username} onInput={(e)=>{userHandle('username', e.target.value)}} placeholder="username"></Input>
                </Form.Item>
                <Form.Item label="password" {...validateInfos.password}>
                    <Input type={passwordType.value} value={userRef.password} onInput={(e)=>{userHandle('password', e.target.value)}} placeholder="password"></Input>
                </Form.Item>
                <Form.Item>
                    <Button onClick={login} block type="primary">login</Button>
                </Form.Item>
            </Form>
        }

        const userHandle = (key, val) => {
            userRef[key] = val
        }

        const login = () => {
            validate().then(()=>{
                store.dispatch('user/login', toRaw(userRef)).then(()=>{
                    router.push('/')
                })
            })
        }

        return () => <div class="app-login">
            <div class="app-login-model">
                <p class="app-login-title">I need a title</p>
                {renderForm()}
            </div>
        </div>
    }
})