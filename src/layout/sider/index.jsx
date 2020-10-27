import { Layout, Menu } from 'ant-design-vue'

import { defineComponent, onMounted, reactive } from 'vue'

import { AppstoreOutlined, MenuOutlined } from '@ant-design/icons-vue'

const Sider = defineComponent({
    setup() {
        const data = reactive({
            menuList: [],
            selectedKeys: ['1'],
            collapsed: false
        })

        const renderMenu = () => {
            return <Menu theme="dark" v-model={data.selectedKeys} mode="inline">
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
            return <Menu.Item>
                <AppstoreOutlined />
                <span>{i.label}</span>
            </Menu.Item>
        }

        const renderSubMenu = (i) => {
            const slots = {
                title: () => <span><MenuOutlined /><span>{i.label}</span></span>
            }
            return <Menu.SubMenu v-slots={slots}>
                {
                    i.children.map((menuItem)=>{
                        return renderMenuItem(menuItem)
                    })
                }
            </Menu.SubMenu>
        }

        onMounted(()=>{
            setTimeout(()=>{
                data.menuList = [
                    {
                        label: 'Option 1',
                        children: []
                    },
                    {
                        label: 'Option 2',
                        children: []
                    },
                    {
                        label: 'User',
                        children: [{
                            label: 'Tom',
                            children: [],
                        },{
                            label: 'Bill',
                            children: [],
                        },{
                            label: 'Alex',
                            children: [],
                        }]
                    },
                    {
                        label: 'Team',
                        children: [{
                            label: 'Team 1',
                            children: []
                        },{
                            label: 'Team 2',
                            children: []
                        }]
                    }
                ]
            },100)
        })
        return () => renderLayout()
    }
})

export default Sider