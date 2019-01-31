import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

const urlList = ['/pages/home/index', '/pages/publish/index', '/pages/my/index']

export default class BottomTab extends Component {

    handleClick(index) {
        Taro.redirectTo({
            url: urlList[index]
        })
    }

    render() {
        return <View style={{position: 'fixed', bottom: 0, left:0}}>
             <AtTabBar
               fixed
               tabList={[
            { title: '推荐', iconType: 'home' },
            { title: '发布', iconType: 'camera' },
            { title: '我的', iconType: 'user'}
            ]}
               selectedColor='#ff5243'
               onClick={this.handleClick.bind(this)}
               current={this.props.activeIndex}
             />
        </View> 
    }
}