/**
 * Created by hankang on 2018/6/4
 */

/**
 * 微信提供的授权认证服务
 */
import wx from 'wx';

const authKey = {
  USER_INFO: 'scope.userInfo',
  USER_LOCATION: 'scope.userLocation',
  USER_ADDRESS: 'scope.address',
  INVOICE: 'scope.invoiceTitle',
  WE_RUN: 'scope.werun',
  RECORD: 'scope.record',
  ALBUM: 'scope.writePhotosAlbum',
  CAMERA: 'scope.camera'
};

export function authLocation() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        if(!res.authSetting[authKey.USER_LOCATION]) {
          wx.authorize({
            scope: authKey.USER_LOCATION,
            success(res) {
              resolve(res);
            },
            fail(errMsg) {
              reject(errMsg)
            }
          });
        } else {
          resolve('ok');
        }
      }
    })
  })
}
