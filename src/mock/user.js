import Mock from 'mockjs'

Mock.mock('user/login', 'post', () => {
    return {
        code: 200,
        message: 'scuccess',
        data: "testToken99663300"
    }
})

Mock.mock('user/info', 'post', () => {
    return {
        code: 200,
        message: 'scuccess',
        data: {
            username: 'admin', 
            password: '123456', 
            name: 'Admin',
            menu: [{
              name: 'menu',
              children: [
                {
                  name: 'dashboard',
                  children:[]
                },
                {
                  name: 'tool',
                  children:[]
                },
                {
                  name: 'table',
                  children:[]
                },
                {
                  name: 'form',
                  children:[]
                },
                {
                  name: 'demo',
                  childeren: []
                }
              ]
            },{
              name: 'nothing',
              children: [
                {
                  name: 'nothing-1',
                  children:[]
                },
                {
                  name: 'nothing-2',
                  children:[]
                },
              ]
            }]
          }
    }
})

Mock.mock('user/logout', 'post', () => {
    return {
        code: 200,
        message: 'scuccess',
        data: {}
    }
})