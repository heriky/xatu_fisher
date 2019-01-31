import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import { AtTag } from 'taro-ui'

import { VGroup, HGroup } from '../../../components' 

import fakeImg from '../assets/timg.jpg'

import iconComment from '../assets/collect.svg'
import iconView from '../assets/view.svg'
import iconShare from '../assets/share.svg'

const style = {
    root: {
        minHeight: '100px',
        borderBottom: '1px solid #e8e8e8',
        padding: '10px'
    },
    avatarRoot: {
        marginBottom: '10px'
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        boxShadow: '0 0 2px #666',
        marginRight: '20px'
    },
    avatarDesc: {
        color: '#ddd',
        fontSize: 'initial'
    },
    updateTime: {
        fontSize: 'small',
        color: '#bbb'
    },
    goodsDesc: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
    },
    faceImg: {
        width: '100%',
        margin: '10px 0'
    },
    icon: {
        fontSize: 'small',
        width: '18px',
        height: '18px',
        paddingRight: '5px'
    },
    iconText: {
        fontSize: 'small',
        color: '#888',
        verticalAlign: '4px'
    }
}

export default class ItemCard extends Component {

    static propTypes = {
        avatarUrl: PropTypes.string,
        nickname: PropTypes.string,
        tags: PropTypes.array,
        desc: PropTypes.string,
        faceImgUrl: PropTypes.string,
        updateTime: PropTypes.string,

        viewCount: PropTypes.number,
        commentCount: PropTypes.number,
        
        onView: PropTypes.func,
        onCollect: PropTypes.func,
        onShare: PropTypes.func
    }

    static defaultProps = {
        avatarUrl: 'https://img.moegirl.org/common/thumb/f/fc/20568578.jpg/450px-20568578.jpg',
        nickname: 'hankang',
        updateTime: '发布于8分钟之前',
        tags: [],
        desc: '最爱犬夜叉最爱犬夜叉最爱犬夜叉最爱犬夜叉最爱犬夜叉最爱犬夜叉最爱犬夜叉最爱犬夜叉',
        faceImgUrl: fakeImg,

        viewCount: 999,
        commentCount: 999
    }

    renderOp() {
        return 
    }

    render() {
        const { avatarUrl, nickname, tag, desc, faceImgUrl, viewCount, commentCount, onView, onCollect, onShare } = this.props
        return <VGroup hAlign='flex-start' vAlign='flex-start' _style={style.root}>
            <HGroup vAlign='flex-start' hAlign='flex-start' _style={style.avatarRoot}>
                <Image style={style.avatar} src={avatarUrl}></Image>
                <VGroup hAlign='flex-start' vAlign='space-between'>
                    <Text>{nickname}</Text>
                    <Text style={style.updateTime}>发布于 2019-01-31 13:36:23</Text>
                </VGroup>
            </HGroup>
           
           
            <View style={style.goodsDesc}>
                {desc}
            </View>
            
            <Image src={faceImgUrl} style={style.faceImg}></Image>
            
            
            <HGroup hAlign='space-around' style={{width: '100%'}}>
                <View>
                    <Image style={style.icon} src={iconView}></Image>
                    <Text style={style.iconText}>{viewCount}</Text>
                </View>
                <View>
                    <Image style={style.icon} src={iconComment}></Image>
                    <Text style={style.iconText}>{commentCount}</Text>
                </View>
                <View>
                    <Image style={style.icon} src={iconShare}></Image>
                    <Text style={style.iconText}>分享</Text>
                </View>
            </HGroup>
        </VGroup>
    }
}