import Taro, { Component } from '@tarojs/taro'
import { AtInput, AtForm, AtCheckbox, AtTextarea, AtImagePicker, AtButton }  from 'taro-ui'
import { View, Text, Input } from '@tarojs/components'

import { BottomBtn, XaInput } from '../../../components'

const tags = [{ label: '书籍', value: 1 }, { label: '乐器', value: 2 }, { label: '二手', value: 3 }]

export default class Index extends Component {

    state = {
        title: '',
        tags: [],
        desc: '',
        picList: [],
        price: null,
        contact: ''
    }

    changeHandler = (name, data) => {
        const v = (data.target && data.target.value != null) ? data.target.value : data; // 只有textarea才返回event，其余都返回vallue
        this.setState({ [name]: v });
    }

    previewImage = (index, file) => {
        Taro.previewImage({
            current: file,
            urls: []
        })
    }

    submit = () => {
        
    }

    render() {
        return <View>
            <AtInput title='标题' type='text' placeholder='不超过15字' maxlength={15} value={this.state.title} onChange={v =>this.changeHandler('title', v)} />
            {/* <AtCheckbox options={tags} selectedList={this.state.tags} onChange={v => this.changeHandler('tags', v)} /> */}
            <AtInput title='价格' type='number' placeholder='' value={this.state.price} onChange={v => this.changeHandler('price', v)} />
            <AtInput title='联系方式' type='text' placeholder='' maxlength={15} value={this.state.contact} onChange={v => this.changeHandler('contact', v)} />
            
            <View style={{margin: '10px 0'}}>
                <AtTextarea value={this.state.desc} onChange={v => this.changeHandler('desc', v)} maxLength={300} placeholder='请输入描述，不超过300字' />
            </View>

            <View style={{marginLeft: '-10px'}}>
                <AtImagePicker multiple length={4} files={this.state.picList} onChange={v => this.changeHandler('picList', v)} onImageClick={this.previewImage} />
            </View>

            <BottomBtn onClick={this.submit}>确认提交</BottomBtn>
        </View>
    }
}