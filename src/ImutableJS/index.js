import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';

let data = Immutable.fromJS({ a: { b: { c: 1 } } });
// 让 cursor 指向 { c: 1 }
let cursor = Cursor.from(data, ['a', 'b'], newData => {
    // 当 cursor 或其子 cursor 执行 update 时调用
    console.log('cursor')
    console.log(newData);
});

console.log('---start---')
console.log(cursor.get('c')); // 1
cursor = cursor.update('c', x => x + 1);
console.log(cursor.get('c')); // 2