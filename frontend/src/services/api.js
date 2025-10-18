import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Company API
export const getCompany = async () => {
  const response = await axios.get(`${API}/company`);
  return response.data;
};

// Products API
export const getProducts = async () => {
  const response = await axios.get(`${API}/products`);
  return response.data;
};

export const getProductBySlug = async (slug) => {
  const response = await axios.get(`${API}/products/${slug}`);
  return response.data;
};

// Services API
export const getServices = async () => {
  const response = await axios.get(`${API}/services`);
  return response.data;
};

// Testimonials API
export const getTestimonials = async () => {
  const response = await axios.get(`${API}/testimonials`);
  return response.data;
};

// Clients API
export const getClients = async () => {
  const response = await axios.get(`${API}/clients`);
  return response.data;
};

// Rental Info API
export const getRentalInfo = async () => {
  const response = await axios.get(`${API}/rental-info`);
  return response.data;
};

// Contact Form API
export const submitContactForm = async (formData) => {
  const response = await axios.post(`${API}/contact`, formData);
  return response.data;
};

export default {
  getCompany,
  getProducts,
  getProductBySlug,
  getServices,
  getTestimonials,
  getClients,
  getRentalInfo,
  submitContactForm
};
