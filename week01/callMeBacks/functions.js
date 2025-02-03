const identity = function () {

};

const first = function () {
  
};
  
const last = function () {
  
};

const each = function () {
  
};

const indexOf = function () {
  
};

const map = function () {

}

const filter = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(callback(item)){
      result.push(item)
    }
  }
  return result
}

const reject = (collection, callback)=>{
  let result = []
  for(let item of collection){
    if(!callback(item)){
      result.push(item)
    }
  }
  return result
}

const uniq = (collection) =>{
  let result = []
  for (let item of collection){
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  }
  return result
}

const reduce = (collection, callback, initialVal) =>{
  let accumulator = initialVal
  for(let key in collection){
    if(accumulator === undefined){
      accumulator = collection[key]
    }
    accumulator = callback(accumulator, collection[key])
  }
  return accumulator
}

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
  filter, 
  reject, 
  uniq, 
  reduce
};