import { defineComponent, onMounted, reactive } from 'vue';

import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

import { Table, Tag, Button, Divider } from 'ant-design-vue';

import { postData } from '@/utils/request';

export default defineComponent({
    setup() {

        const columns = [
            {
              dataIndex: 'name',
              key: 'name',
              slots: { title: 'customTitle', customRender: 'name' },
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              slots: { customRender: 'tags' },
            },
            {
              title: 'Action',
              key: 'action',
              slots: { customRender: 'action' },
            },
        ];

        const data = reactive({
          tableList: []
        })

        const renderTable = () => {
            const slots = {
                name: ({text}) => <a>{text}</a>,
                customTitle: () => <span><SmileOutlined/> Name</span>,
                tags: ({text}) => <span>
                    {
                        text.map(item=>{
                            return <Tag color={ item === 'loser' ? 'volcano' : item.length > 5 ? 'geekblue' : 'green'}>{item}</Tag>
                        })
                    }
                </span>,
                action: ({record}) => <span>
                    <Button type="primary">{record.name}</Button>
                    <Divider type="vertical"/>
                    <Button type="danger">Delete</Button>
                    <Divider type="vertical"/>
                    <a class="ant-dropdown-link"> More actions <DownOutlined/> </a>
                </span>
            }
            return <Table columns={columns} dataSource={data.tableList} v-slots={slots}></Table>
        }

         onMounted(async ()=> {
          const res = await postData('/mock/list')
          data.tableList = res.list
        })

        return () => <>{renderTable()}</>
    }
})