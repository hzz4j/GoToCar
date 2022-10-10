// app.js
App({
  onLaunch(o) {
    // 展示本地存储能力
    console.log(o);
    console.log("=======================");
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

 

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  globalData: {
    userInfo: null,
  },
});
