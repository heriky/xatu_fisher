import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { BottomTab } from '../../components'

export default class My extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    render() {
        return <View>
            <Text>我的信息</Text>

            <BottomTab activeIndex={2}></BottomTab>
        </View>
    }
}