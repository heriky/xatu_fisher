/**
 * Created by hankang on 2018/5/19
 */
import wx from 'wx';

const Fly = require('flyio/dist/npm/wx');

const fly = new Fly();

// 在这处理一些http请求的通用事件，包括header参数的添加、loading状态的控制
fly.config.baseURL = '';

fly.interceptors.request.use(request => {
  const rawUrl = request.url;
  const url = rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`; // 处理slash
  request.url = url.startsWith('/api') ? url : `/api${url}`; // 处理api前缀

  wx.showLoading();
  return request;
});

fly.interceptors.response.use(response => {
  wx.hideLoading();
  return response;
});

export default fly;
