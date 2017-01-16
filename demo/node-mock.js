// 使用 Mock
var Mock = require('mockjs');
var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
