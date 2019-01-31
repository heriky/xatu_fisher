import Taro, { Component } from '@tarojs/taro'
import { AtInput, AtForm, AtCheckbox, AtTextarea, AtImagePicker, AtButton }  from 'taro-ui'
import { View, Text } from '@tarojs/components'

import { HGroup, VGroup, QouteText, Line, BottomBtn } from '../../components'

import GoodsItem from './compos/goods-item'


const style  = {
    root: {
        padding: '10px'
    }
}

export default class InfoList extends Component {


    create = () => {
        Taro.navigateTo({ url: '/pages/publish/goods-edit' })
    }

    render() {
        return <View style={style.root}>
             <QouteText>
                <Text>已发布的二手商品</Text>
                <Text style={{ fontSize: 'small', color: '#ddd', marginLeft: '10px' }}>管理二手商品信息吧(●'◡'●)</Text>
            </QouteText>
            <Line _style={{marginTop: '10px'}}></Line>

            <GoodsItem></GoodsItem>

            <BottomBtn onClick={this.create}>发布新信息</BottomBtn>
        </View>
    }
}