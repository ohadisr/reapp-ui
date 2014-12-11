// Simple reducer for use with flux
// reduces an array or map into an array of objects with:

// { id, data, status }

// status is given first so we can allow currying, ex:
// doSomething().then(reducer.bind(null, 'LOADED'))

// status is optional, default value is 'OK'
// doSomething().then(reducer)

function reducer(status, obj) {
  if (!obj) {
    obj = status;
    status = 'OK';
  }

  if (!Array.isArray(obj))
    obj = [obj];

  return obj.reduce((acc, data) => {
    var id = data.id || uniqueId();
    acc.push({ id, data, status });
    return acc;
  }, []);
}

var id = 0;
function uniqueId() {
  return id++;
}

module.exports = reducer;