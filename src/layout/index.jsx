import { defineComponent, Transition } from 'vue'
import Sider from './sider'
import Header from './header'
import Footer from './footer'
import Breadcrumb from './breadcrumb'
import { Layout } from 'ant-design-vue'
import './index.scss'

const AppLayout = defineComponent({
    setup() {
        const renderMain = () => {
            const slots = {
                default: ({ Component }) => <Transition name="slide-fade">
                        <Component />
                    </Transition>
            }

            return <Layout class="app-layout">
                <Sider />
                <Layout>
                    <Header/>
                    <Breadcrumb class="app-breadcrumb"/>
                    <Layout.Content class="app-content">
                        <router-view v-slots={slots}></router-view>
                    </Layout.Content>
                    <Footer/>
                </Layout>
            </Layout>
        }
        return () => renderMain()
    }
})

export default AppLayout