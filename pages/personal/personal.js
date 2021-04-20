// pages/personal/personal.js
let startY = 0
let endY = 0
let moveInstance = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    transform: '',
    transition: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleTouchStart: function (event) {
    startY = event.touches[0].clientY
    this.setData({
      transition: ''
    })
  },

  handleTouchMove: function (event) {
    endY = event.touches[0].clientY
    moveInstance = endY - startY
    if (moveInstance < 0) {
      return ;
    }
    if (moveInstance > 80) {
      moveInstance = 80
    }
    this.setData({
      transform: `translateY(${moveInstance}rpx)`
    })
  },

  handleTouchEnd: function (event) {
    this.setData({
      transform: "translateY(0rpx)",
      transition: "transform 1s linear"
    })
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