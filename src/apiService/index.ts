// import data
import cities from './data/cities.json'

class ApiService {
  static timeout = 300
  static mockRequest(dataToReturn: Record<string, any>) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataToReturn)
      }, this.timeout)
    })
  }

  static getAllCities() {
    return this.mockRequest(cities)
  }
}

export default ApiService
