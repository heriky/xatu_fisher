import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'

import counterStore from './store/counter'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    "pages": [
      "pages/home/index",
      "pages/publish/index",
      "pages/my/index"
    ],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#B0E2FF",
      "navigationBarTitleText": "校园交易小助手",
      "navigationBarTextStyle": "black"
    },
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true,
     "tabBar": {
        "position": 0,
        "selectedColor": "#ff5243",
        "backgroundColor": "transparent",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/home/index",
          "text": "推荐",
          "iconPath": "assets/images/popular.png",
          "selectedIconPath": "assets/images/popular_selected.png"
        }, {
          "pagePath": "pages/publish/index",
          "text": "发布",
          "iconPath": "assets/images/top.png",
          "selectedIconPath": "assets/images/top_selected.png"
        }, {
          "pagePath": "pages/my/index",
          "text": "我的",
          "iconPath": "assets/images/my.png",
          "selectedIconPath": "assets/images/my_selected.png"
        }]
      }
  };

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
