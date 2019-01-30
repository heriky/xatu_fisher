import Taro, { Component } from '@tarojs/taro'
import { HGroup } from '../../../components'

const style = {
    paddingLeft: '10px',
    borderLeft: '4px solid red'
}

export default class QouteText extends Component {

    render() {
        return <HGroup hAlign='flex-start' _style={style}>
            { this.props.children }
        </HGroup>
    }
}