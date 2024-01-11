import axios from 'axios';
import { base_url } from './endpoints'; 

export const GETAPI = (
    endpoint,
    params,
    apiUrl=base_url
) => {
  return axios({
    'url': endpoint,
    'method': 'GET',
    'baseURL': apiUrl,
    'headers': { 'Content-Type': 'application/json' },
    'params': params,
    'responseType': 'json'
  }).then(res => { 
      console.log(`GETAPI::res::${res}`);
    return res;
  }, 
  (err) => {
      console.log(`GETAPI::err::${err}`);
  })
  .catch((err) => {
    console.log(`GETAPI::err::${err}`);
    return err;
  })
};

export const POSTAPI = (
    endpoint,
    payload,
    apiUrl='',
    headers=null,
    dump=false  
  ) => {
    if(dump) {
      console.log(`POSTAPI::${apiUrl},${endpoint},${headers},${payload}`);
    }
    return axios({
      'url': endpoint,
      'method': 'POST',
      'baseURL': apiUrl,
      'headers': headers !== null ? headers : { 'Content-Type': 'application/json',' Access-Control-Allow-Origin': '*'},
      'data': payload,
      'responseType': 'json'
    })
  .then((res) => { 
      if(dump) {
        console.log(`POSTAPI::res::${res}`);
      }
      return res;
    }, (err) => {
      if(dump) {
        console.log("POSTAPI::err",err);
      }
      else {
        console.error("POSTAPI::error::",err);
      }
    });
  };

  export const PUTAPI = (
    endpoint,
    payload,
    apiUrl='',
    headers=null,
    dump=false  
  ) => {
    if(dump) {
      console.log(`PUTAPI::${apiUrl},${endpoint},${headers},${payload}`);
    }
    return axios({
      'url': endpoint,
      'method': 'PUT',
      'baseURL': apiUrl,
      'headers': headers !== null ? headers : { 'Content-Type': 'application/json',' Access-Control-Allow-Origin': '*'},
      'data': payload,
      'responseType': 'json'
    })
  .then((res) => { 
      if(dump) {
        console.log(`PUTAPI::res::${res}`);
      }
      return res;
    }, (err) => {
      if(dump) {
        console.log("PUTAPI::err",err);
      }
      else {
        console.error("PUTAPI::error::",err);
      }
    });
  };

  export const DELETEAPI = (
    endpoint,
    payload,
    apiUrl='',
    headers=null,
    dump=false  
  ) => {
    if(dump) {
      console.log(`DELETEAPI::${apiUrl},${endpoint},${headers},${payload}`);
    }
    return axios({
      'url': endpoint,
      'method': 'DELETE',
      'baseURL': apiUrl,
      'headers': headers !== null ? headers : { 'Content-Type': 'application/json',' Access-Control-Allow-Origin': '*'},
      'data': payload,
      'responseType': 'json'
    })
  .then((res) => { 
      if(dump) {
        console.log(`DELETEAPI::res::${res}`);
      }
      return res;
    }, (err) => {
      if(dump) {
        console.log("DELETEAPI::err",err);
      }
      else {
        console.error("DELETEAPI::error::",err);
      }
    });
  };