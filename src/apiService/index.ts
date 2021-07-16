// import data
import cities from './data/cities.json'
import products from './data/products.json'

class ApiService {
  static timeout = 300

  static mockRequest<T>(dataToReturn: T) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataToReturn)
      }, this.timeout)
    }) as Promise<T>
  }

  static getAllCities() {
    return this.mockRequest(cities)
  }

  static getProducts() {
    return this.mockRequest(products)
  }
}

export default ApiService
