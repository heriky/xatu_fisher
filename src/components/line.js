import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';

const innerStyle = {
    width: '100%',
    borderBottom: '1px solid #e8e8e8'
}

export default class Line extends Component {

    render() {

        const { _style } = this.props;
        console.log(_style)

        return <View style={{ ...innerStyle, ..._style }}></View>
    }
}