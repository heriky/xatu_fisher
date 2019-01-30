import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import searchIcon from '../assets/search.svg'
import { HGroup } from '../../../components';

const style = {
    root: {
        background: '#B0E2FF',
        padding: '10px 5px'
    },
    search: {
        background: '#fff',
        borderRadius: '5px',
        height: '30px'
    },
    icon: {
        width: '20px',
        height: '20px'
    },
    text: {
        color: '#ddd',
        lineHeight: '30px'
    }
}

export default class SearchBar extends Component {

    config = {
        navigationBarTitleText: '推荐'
    }

    click = () => {
        const onClick = this.props.onClick
        typeof onClick === 'function' && onClick()
    }

    render() {
        return <View style={style.root}  onClick={this.click}>
            <HGroup _style={style.search}>
                <Image src={searchIcon} style={style.icon}></Image>
                <Text style={style.text}>点击搜索</Text>
            </HGroup>
        </View>
    }
}