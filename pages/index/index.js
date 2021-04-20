// index.js
// 获取应用实例
import getRequest from '../../util/request.js'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    topList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    try {
      const banner = await getRequest('/banner', { type: 2 })
      const recommendList = await getRequest('/personalized', { limit: 10 })
      const topListData = await getRequest('/toplist/detail')
      const { banners } = banner
      const { result } = recommendList
      this.setData({
        bannerList: banners.map(item => {
          return {
            pic: item.pic,
            id: item.id
          }
        }),
        recommendList: result.map(item => {
          return {
            picUrl: item.picUrl,
            name: item.name,
            id: item.id
          }
        })
      })
      const playList = []
      let index = 0
      while(index < topListData.list.length) {
        const { id } = topListData.list[index++]
        const playlistData = await getRequest("/playlist/detail", { id })
        playList.push({ id: playlistData.playlist.id, name: playlistData.playlist.name, tracks: playlistData.playlist.tracks.slice(0,3).map(item => {
            return {
              picUrl: item.al.picUrl,
              id: item.id,
              name: item.name
            }
          })
        })
        this.setData({
          topList: playList
        })
      }
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})