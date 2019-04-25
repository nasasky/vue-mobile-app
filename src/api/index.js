import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888/api'

// 获取新闻列表
export const getNewsList = () => axios.get('/getnewslist')

// 获取新闻详情
export const getNewsDetail = id => axios.get(`/getnew/${id}`)

// 获取商品列表
export const getGoodsList = () => axios.get(`/getgoods`)
