var net = require('net')
var server = net.createServer()
var port = 10086

var messages = []
server.on('connection', conn => {
  conn.on('data', data => {
    // console.log(data, data.toString())
    var recv = data.toString()


    var [header, body] = recv.split('\r\n\r\n')
    var [firstLine, ...headers] = header.split('\r\n')
    var header = parseHeaders(headers)
    var [method, url] = firstLine.split(' ')
    var urlObj = new URL(`http://${headers.host}${url}`)
    if (urlObj.search) {
      var name = urlObj.searchParams.get('name')
      var message = urlObj.searchParams.get('message')
      messages.push({ name, message })
      // conn.write('HTTP/1.1 200 OK\r\n')
      // conn.write('Content-Type: text/html; charset=UTF-8\r\n')
      // conn.write('\r\n')
      // conn.write('留言已成功')
      // conn.end()
    } else {

    }
    conn.write('HTTP/1.1 200 OK\r\n')
    conn.write('Content-Type: text/html; charset=UTF-8\r\n')
    // conn.write('Content-Length:20\r\n')
    conn.write(`Date:${new Date()}\r\n`)
    conn.write('\r\n')
    conn.write(`
    <form mothod="GET" action="/">
    Name:<br>
    <input type="text" name="name"><br>
    Message:<br>
    <input type="text" name="message"><br>
    <button>summit</button>
    </form>
${messages.map(msg => {
      return `<fieldset>
    <legend>${msg.name}</legend>
    <div>${msg.message}</div>
    </fieldset>
    `
    }).join('\n')
      }
    `)
    conn.end()

  })
  conn.on('error', () => {

  })
})

server.listen(10086, () => {
  console.log('服务器正在', port, '端口监听')
})

function parseHeaders(headers) {
  var obj = {}
  for (var h of headers) {
    var [k, v] = h.split(':')
    obj[k] = v
  }
  return obj

}