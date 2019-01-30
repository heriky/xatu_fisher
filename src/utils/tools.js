/**
 * Created by hankang on 2018/6/1
 */

export function throttle(target, name, descriptor) {
  const oldFunc = descriptor.value || descriptor.initializer;
  let isRunning = false;
  descriptor.value = function(...args) {
    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(() => {
      oldFunc(args);
      isRunning = false;
    })
  };
  return descriptor;
}

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export default {
  formatNumber,
  formatTime
}
