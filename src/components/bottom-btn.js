import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

const style  = {
    position: 'fixed',
    transform: 'translateZ(0)',
    bottom: '0',
    left: '0',
    right: '0',
    height: '50px',
    background: '#ff5243',
    textAlign: 'center',
    lineHeight: '50px',
    color: '#fff'
}

export default class BottomBtn extends Component {

    render() {
        return <View style={style} onClick={this.props.onClick}>{this.props.children}</View>
    }
}