const net = require('net');

//连接计数器
let count = 0,
    users  = { };

const server = net.createServer( (conn) => {
    //连接事件
    console.log('\033[90m    new connection!\033[39m');

    conn.setEncoding('utf8');
    let nickname;

    conn.write(
        `\r > welcome to node-chat!
        \r > ${count} ohter people are connected at this time.
        \r > please write your name and press enter:`
    );

    conn.on('close',() => {
        
        console.log('   people quit!');
        count --;
    })

    conn.on('data',(data) => {
        data = data.replace('\r\n');
        console.log(data);

        if(!nickname){

            if(users[data]){

                conn.write('nick name already in use. try again');
                return;
            }else{
                nickname = data;
                users[nickname] = conn;

                for(let i in users){
                    users[i].write(`${nickname} joined the room.`);
                }
            }
        }
    })

    count++;
});

/**
 * 创建server
 */

server.listen(3000,() => {
    console.log('\033[96m    server listening on *:3000\033[39m');
});