// app.js
App({

  onLaunch() {
    wx.db = {};

    const ToastTypeNormal = 0;
    const ToastTypeSuccess = 1;
    const ToastTypeError = 2;
    let commonToast = (title, type, duration=1500) => {
      let options = {
        title: title,
        icon: 'none',
        duration: duration,
      };
      if(ToastTypeSuccess == type) {
        options.icon = 'success';
      } else if(ToastTypeError == type) {
        options.image = '/assets/imgs/upsdk_cancel_normal.png';
      }
      wx.showToast(options)
    };

    wx.db.toast = (title, duration) => {
      commonToast(title, ToastTypeNormal, duration);
    };

    wx.db.toastError = (title, duration = 1500) => {
      commonToast(title, ToastTypeError, duration);
    };

    wx.db.toastSuccess = (title, duration = 1500) => {
      commonToast(title, ToastTypeSuccess, duration);
    };
    

  },
  globalData: {
    userInfo: null
  }
})
