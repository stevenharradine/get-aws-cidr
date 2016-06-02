var http = require('https')
var region = process.argv[2]

http.get("https://ip-ranges.amazonaws.com/ip-ranges.json", function(res){
  var body = ''

  res.on('data', function(chunk){
    body += chunk
  })

  res.on('end', function(){
    var response = JSON.parse(body).prefixes
        
    response.forEach (function (item) {
   	  if (item.region === region) {
        console.log (item.ip_prefix)
      }
    })
  })
}).on('error', function(e){
  console.log("Got an error: ", e)
})