import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import { HGroup, VGroup, QouteText, Line, BottomTab } from '../../components'

import GoddsEditor from './compos/goods-editor'

const style = {
    root: {
        padding: '10px'
    }
}

export default class My extends Component {
    config = {
        navigationBarTitleText: '发布信息'
    }

    render() {
        return <VGroup hAlign='flex-start' vAlign='flex-start' _style={style.root}>
            <QouteText>
                <Text>新建发布</Text>
                <Text style={{ fontSize: 'small', color: '#ddd', marginLeft: '10px' }}>开始发布信息吧o(*￣▽￣*)ブ</Text>
            </QouteText>

            <Line _style={{marginTop: '10px'}}></Line>

            <GoddsEditor></GoddsEditor>

        </VGroup>
    }
}