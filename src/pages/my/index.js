import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

export default class My extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    render() {
        return <Text>我的</Text>
    }
}