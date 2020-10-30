import { postData } from '@/utils/request'

export function Login(data) {
    return postData('user/login', data)
}

export function GetUserInfo() {
    return postData('user/info')
}

export function Logout() {
    return postData('user/logout')
}