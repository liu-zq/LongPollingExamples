var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let $timer = setInterval(
        () => {    
            let date = new Date()    
            let seconds = date.getSeconds()    
            if (seconds % 5 == 0) {     
                //需要满足一些条件下，才会进行数据的返回      
                res.send(date.toLocaleString())      
                clearInterval($timer)   // 清除定时器    
            }  
        }, 1000);
    }
);

module.exports = router;