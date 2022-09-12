// pages/home/home.js
Page({
  data: {
    movies: []
  },

  onLoad: function() {      
    // this.loadCity(this.loadData);
  },
  loadData: function(city) {
    wx.request({
      url: 'url',
      data: { city: city},
      header: {'content-type': 'json'},
      success: (res) => {
        console.log(res);
        let movies = res.data.subjects;
        // this.data.movies = res.data.subjects;
        // this.setData(this.data);
        for(let index = 0; index < movies.length; index++) {
          this.updateMovie(array[index]);
        }
        this.setData({ movies : movies });
      },
      fail: () => {
        wx.db.toastError('获取热映失败');
      }
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
            location: '${result.latitude},${result.longitude}'
          },
          success: (res) => {
            let city = res.data.result.addressComponent.city;
            city = city.substring(0,city.length -1);
            success && success(city);
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
  },

  updateMovie:function(movie) {
    let stars = parseInt(movie.rating.stars);
    if(stars ==0) return;
    movie.stars = [1,1,1,0.5,0];


    // 另一种方法
    // movie.stars = {};
    // movie.stars.on = parseInt(stars / 10);
    // movie.stars.half = (stars - (movie.stars.on) * 10) > 0;
    // movie.stars.off = parseInt((50 - stars) / 10);
  }

})