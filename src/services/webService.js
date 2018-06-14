import axios from 'axios'

const fetch = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.get(path, data)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}

const create = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.post(path, data)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}

const update = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.put(path, data)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        console.log('ws update error: '+ error)
        reject(error);
      });
  })
}

const del = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.delete(path, data)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}

export { fetch,create,update,del }