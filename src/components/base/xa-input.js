import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components';
import { HGroup } from '../layout';

const style = {
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    borderBottom: '1px solid #e8e8e8'
}

export default class XaInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue
        }
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({ value })
        const cb = this.props.onChange
        typeof cb === 'function' && cb(value)
    }

    render() {

        const { label, placeholder, maxLength } = this.props;

        return <HGroup _style={style}>
            { label && 
                <View style={{textAlign: "left", width: '80px', right: '10px'}}>
                    <Text style={{color: '#333'}}>{label}</Text>
                </View>
            }
            <Input style={{flex: 1}} value={this.state.value} onChange={this.handleChange} maxLength={maxLength} placeholder={placeholder}></Input>
        </HGroup>
    }
}