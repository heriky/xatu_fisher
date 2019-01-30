/**
 * Created by hankang on 2018/6/7
 */

import wx from 'wx';

class LocalStorage {

  setItem(key, data) {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data,
        success() { resolve('ok'); },
        fail(err) { reject(err) }
      });
    });
  }

  setItemSync(key, data) {
    try {
      wx.setStorageSync(key, data)
    }catch (e) {
      throw new Error(e);
    }
  }

  getItem(key) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key,
        success() { resolve('ok') },
        fail(err) { reject(err) }
      })
    })
  }

  getItemSync(key) {
    try {
      return wx.getStorageSync(key);
    }catch (e) {
      throw new Error(e);
    }
  }

  removeItem(key) {
    return new Promise((resolve, reject) => {
      wx.removeStorage({
        key,
        success() { resolve('ok') },
        fail(e) { reject(e) }
      })
    })
  }

  removeItemSync(key) {
    try {
      wx.removeStorageSync(key);
    } catch (e) {
      throw new Error(e);
    }
  }

  clearItem() {
    wx.clearStorage();
  }

  clearItemSync() {
    try {
      wx.clearStorageSync();
    } catch (e) {
      throw new Error(e);
    }
  }

}

const storage = new LocalStorage();
export default storage;

export const COLLECT_KEY = 'finder'; // 电影收藏的key
