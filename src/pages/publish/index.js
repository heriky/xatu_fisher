import Taro, { Component } from '@tarojs/taro'
import {AtList, AtListItem }  from 'taro-ui'
import { View, Text } from '@tarojs/components'

import { BottomTab } from '../../components'

export default class Publish extends Component {


    goInfo = () => {
        Taro.navigateTo({ url: '/pages/publish/goods-list' })
    }

    goActivity = () => {}

    render() {
        return <View>
            <AtList>
                <AtListItem
                  title='管理二手商品'
                  note='共999条'
                  arrow='right'
                  onClick={this.goInfo}
                  thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                />
                <AtListItem
                  title='管理活动'
                  note='共23条'
                  arrow='right'
                  onClick={this.goActivity}
                  thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                />
            </AtList>
            <BottomTab activeIndex={1}></BottomTab>
        </View>
    }
}