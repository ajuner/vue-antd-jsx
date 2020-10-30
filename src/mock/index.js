import Mock from 'mockjs'

import './user'

Mock.mock('/mock/list', 'post', () => {
    return {
        code: 200,
        message: 'scuccess',
        list: []
    }
})
