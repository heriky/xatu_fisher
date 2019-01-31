import Taro, { Component } from '@tarojs/taro'
import { AtInput, AtForm, AtCheckbox, AtTextarea, AtImagePicker, AtButton, AtIcon }  from 'taro-ui'
import { View, Text } from '@tarojs/components'

import { BottomBtn, HGroup, VGroup } from '../../../components'


const style = {
    root: {},
    op: {
        width: '100px',
        display: 'flex',
        marginLeft: '10px'
    },
    opIcon: {
        marginRight: '40px'
    }
}

export default class Index extends Component {

    del = e => {
        console.log(e)
        e.preventDefault()
        e.stopPropagation()
        console.log('删除')
    }
    edit = e => {
        e.stopPropagation()
        console.log('编辑')
    }

    view = e => {
        console.log('详情')
    }

    render() {
        return <View onClick={this.view} style={{borderBottom: '1px solid #e8e8e8', padding: '10px 0'}}>
             <HGroup hAlign='space-between'>
                <VGroup _style={{flex: 1}} hAlign='space-between' vAlign='flex-start'>
                    <Text style={{marginBottom: '10px'}}>标题</Text>
                    <Text>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Text>
                </VGroup>
                <View style={style.op}>
                    <View onClick={this.del} style={{marginRight: '10px'}}>
                        <AtIcon value='trash' size='18' color='#999' style={style.opIcon}></AtIcon>
                    </View>

                    <View onClick={this.edit}>
                        <AtIcon value='edit' size='18' color='#999'></AtIcon>
                    </View>
                </View>
            </HGroup>
        </View>
    }
}