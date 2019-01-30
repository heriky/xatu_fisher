import Taro, { Component } from '@tarojs/taro'
import { Image, Swiper, Block, SwiperItem } from '@tarojs/components'


const imgUrls = [
    'http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg',
    'https://img.moegirl.org/common/thumb/f/fc/20568578.jpg/450px-20568578.jpg'
];

export default class SliderBox extends Component {

    render() {
        return <Swiper
          indicator-dots='true'
          interval='5000'
          duration='1000'
          autoplay
        >
        {
            imgUrls.map((img, index) => (
                <Block key={index}>
                    <SwiperItem>
                        <Image src={img} style='width: 100%' />
                    </SwiperItem>
                </Block>
            ))
        }
    </Swiper>
    }
}