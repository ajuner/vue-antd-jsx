import { Layout, Menu } from 'ant-design-vue'

import { defineComponent, onMounted, reactive, computed } from 'vue'

import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons-vue'

import { useStore } from 'vuex'

import { useRoute, useRouter } from 'vue-router'

const Sider = defineComponent({
    setup() {

        const store = useStore()

        const router = useRouter()

        const route = useRoute()

        const data = reactive({
            menuList: [],
            openKeys: computed(() => {
                return route.matched.map( item => {
                    return item.name
                })
            }),
            selectedKeys: computed(()=>{
                return [route.name]
            }),
            collapsed: false
        })

        const renderMenu = () => {
            return <Menu theme="dark" openKeys={data.openKeys} selectedKeys={data.selectedKeys} mode="inline">
                    {
                        data.menuList.map((menuItem) => {
                            return menuItem.children.length===0?renderMenuItem(menuItem):renderSubMenu(menuItem)
                        })
                    }
                </Menu>
        }

        const renderLayout = () => {
            return <Layout.Sider v-model={data.collapsed} collapsible>
                {/* <div class="logo"/> */}
                {renderMenu()}
            </Layout.Sider>
        }

        const renderMenuItem = (i) => {
            return <Menu.Item key={i.name} onClick={()=>{linkTo(i.name)}}>
                <AppstoreOutlined />
                <span>{i.name}</span>
            </Menu.Item>
        }

        const renderSubMenu = (i) => {
            const slots = {
                title: () => <span><MenuOutlined /><span>{i.name}</span></span>
            }
            return <Menu.SubMenu key={i.name} v-slots={slots}>
                {
                    i.children.map((menuItem)=>{
                        return renderMenuItem(menuItem)
                    })
                }
            </Menu.SubMenu>
        }

        const linkTo = (name) => {
            router.push({name: name})
        }

        onMounted(()=>{
            setTimeout(()=>{
                data.menuList = store.state.user.userInfo.menu
            },100)
        })
        return () => renderLayout()
    }
})

export default Sider