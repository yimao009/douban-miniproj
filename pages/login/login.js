// pages/login/login.js
Page({

  /**
   * 微信登录
   */
  wechatLogin: function() {
    console.log('wechatLogin');
  },

  /**
   * 豆瓣帐号登录
   */
  doubanLogin: function() {
    console.log('doubanLogin');
  },

  openAgreement: function() {
    console.log('openAgreement');
    wx.navigateTo({
      url: '/pages/agreement/agreement',
      success: result => {
        
      },
      fail: () => {},
      complete: () => {
        console.log('jump complete');
      }
    });
      
  }
})