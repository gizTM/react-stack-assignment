import axios from 'axios'

const fetch = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.get(path,data)
      .then(res => {
        console.log(res.data)
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

const create = (path, data) => {
  // return new Promise((resolve, reject) => {
  //   axios.get(path, data)
  //     .then(resp => {
  //       resolve(resp.data);
  //     })
  //     .catch(error => {
  //       reject(error);
  //       console.log('error in fetch: '+error)
  //     });
  // })
}

const update = (path, data) => {

}

const del = (path, data) => {

}

export { fetch, create, update, del }