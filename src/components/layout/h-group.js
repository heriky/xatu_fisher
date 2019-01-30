import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import './style.less'

export default class HGroup extends Component {

    static propTypes = {
        hAlign: PropTypes.string,
        vAlign: PropTypes.string,
        gap: PropTypes.number,
        style: PropTypes.object
    }

    get mixedStyle() {
        const { hAlign = 'center', vAlign = 'center', _style = {} } = this.props;
        const mixed = { justifyContent: hAlign || 'center', alignItems: vAlign || 'center', ..._style };
        return mixed;
    }

    render() {
        return <View className='h-group' style={this.mixedStyle}>
            { this.props.children }
        </View>
    }
}