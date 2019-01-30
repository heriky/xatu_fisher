import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtDivider } from 'taro-ui'

import './index.less'
import SearchBar from './views/search-bar'
import SliderBox from './views/slider-box'
import QouteText from './views/qoute-text'
import ItemCard from './views/item-card'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  clickSearchBar = () => {
    // Taro.navigateTo()
    Taro.showToast({
      title: '别点了，还没做',
      icon: 'success',
      duration: 2000
    })
  }

  
  render () {
    return (
      <View>
        <SearchBar onClick={this.clickSearchBar}></SearchBar>

        <SliderBox></SliderBox>
        
        <View style={{margin: '10px 0', padding: '3px', borderBottom: '1px solid #eee'}}>
          <QouteText>
            <Text>推荐</Text>
            <Text style={{ fontSize: 'small', color: '#ddd', marginLeft: '10px' }}>为您推荐优质内容</Text>
          </QouteText>
        </View> 
      
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <AtDivider content='没有更多了' fontColor='#2d8cf0' lineColor='#2d8cf0' />
      </View>
    )
  }
}

export default Index 
