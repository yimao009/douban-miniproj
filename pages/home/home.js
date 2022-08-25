// pages/home/home.js
Page({

  onLoad: function() {      
    this.loadCity((city) => {
      console.log('获取城市信息', city);
    });
  },

  loadCity: function(success) {
    wx.getLocation({
      success: (result) => {
        console.log(result);
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            ak:"AS4pY6soYVDlGwpznang1VOGvjphcamz",
            output:"json",
            coordtype:"wgs84ll",
            location:result.latitude + "," + result.longitude
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0,city.length -1);
            console.log(city);
            success(city);
          },
          fail: () => {
            wx.db.toastSuccess('获取城市错误');
          },
        });
          
      },
      fail: () => {
        wx.db.toastSuccess('获取位置失败');
      }
    });
  }
})