import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://krovato-backend.onrender.com/api'
})
// categories
export const getCategories = async () => {
  const { data } = await instance.get('/categories')

  return data
}

export const getCategoryById = async (id = '67a4f516d035166c984bffbe') => {
  const { data } = await instance.get(`/categories/${id}`)

  return data
}
//blog
export const getBlogs = async () => {
  const { data } = await instance.get('/blog')
  return data
}
//product

export const getProduct = async () => {
  const { data } = await instance.get('/products')
  return data
}
//review
export const getReviews = async () => {
  const { data } = await instance.get('/reviews')
  return data
}

export const createReview = async (data = {}) => {
  return await instance.post(`/reviews/${data}`)
}
