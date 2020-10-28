import { defineComponent } from 'vue'
import Sider from './sider'
import Header from './header'
import Footer from './footer'
import Breadcrumb from './breadcrumb'
import { Layout } from 'ant-design-vue'
import './index.scss'

const AppLayout = defineComponent({
    setup() {
        const renderMain = () => {
            return <Layout class="app-layout">
                <Sider />
                <Layout>
                    <Header/>
                    <Layout.Content class="app-content">
                        <Breadcrumb/>
                        <router-view></router-view>
                    </Layout.Content>
                    <Footer/>
                </Layout>
            </Layout>
        }
        return () => renderMain()
    }
})

export default AppLayout