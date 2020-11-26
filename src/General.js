var empty = require('is-empty');

const General = {

  sortArray: function(key, order = 'asc') {
  
    return function innerSort(a, b) {

      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }
  
        const varA = (typeof a[key] === 'string')
          ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
          ? b[key].toUpperCase() : b[key];
  
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
    };   
  
  },

  ucwords: function(str) {

    return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase()
    })

  },

  orderNumber: function(id){
    let now = Date.now().toString() // '1492341545873'
    
    // pad with extra random digit
    now += now + Math.floor(Math.random() * 10)

    let userId = '-'+Math.floor(1000 + Math.random() * 9000);
    if(!empty(id)){
      userId = '-'+id
    }
    
    return  'DS-'+[now.slice(4, 14)]+userId
  },

  formatNumber: function(num){
    return 'Rp '+num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

}

module.exports = General;