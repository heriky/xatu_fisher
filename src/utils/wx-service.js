/**
 * Created by hankang on 2018/6/4
 */

/*微信提供的基础服务*/

import wx from 'wx';
import { bmap } from './vendors';
import { BAIDU_MAP_AK } from '../constants';
import store from '@/store';
import { SAVE_CURRENT_LOC } from '@/store/mutation-types';

import { authLocation } from './wx-auth';

const BMap = new bmap.BMapWX({
  ak: BAIDU_MAP_AK
});


/**
 * 获取用户位置
 */
export function getUserLocation() {
  return new Promise((resolve, reject) => {
    const currentLocInfo = store.state.loc;
    if (currentLocInfo.city) {
      return resolve(currentLocInfo);
    }
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const { latitude, longitude } = res;
        const locationStr = [latitude, longitude].join(',');
        BMap.regeocoding({
          location: locationStr,
          fail(err) {
            reject(err);
          },
          success(res) {
            store.commit(SAVE_CURRENT_LOC, res);
            resolve(store.state.loc);
          },
        });
      }
    });
  });
}

/* 打开内置地图查看位置 */
export async function chooseLocation() {
  try {
    await authLocation();
    return new Promise(((resolve, reject) => {
      wx.chooseLocation({
        success(res) {
          resolve(res);
        },
        fail() {
          reject('error');
        }
      });
    }));
  }catch (e) {
    wx.showToast({ title: '位置信息授权失败!' });
    throw new Error(e);
  }
}

/*打开相册*/
export function chooseImage() {

  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    })
  });
}

export function previewImages(current, urls) {
  wx.previewImage({
    current, // 当前显示图片的http链接
    urls // 需要预览的图片http链接列表
  })
}
