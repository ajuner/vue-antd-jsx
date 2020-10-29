import { defineComponent } from 'vue'

import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

import { Table, Tag, Button, Divider } from 'ant-design-vue'
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

        const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
        ]

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
            return <Table columns={columns} dataSource={data} v-slots={slots}></Table>
        }

        return () => <>{renderTable()}</>
    }
})