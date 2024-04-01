const http  = require('http')

const server = http.createServer((req,res)=>{
    console.log(res)
    const url = req.url
    const method = req.method
    if(url === '/home'){
        res.write('<html>')
        res.write('<h2>Welcome Home</h2>')
        res.write('</html>')

        return res.end

    }else if(url === 'about'){
        res.write('<html>')
        res.write('<h2>Welcome to about us page</h2>')
        res.write('</html>')
        return res.end

    }else if(url === '/node'){
        res.write('<html>')
        res.write('<h2>Welcome to my node js project</h2>')
        res.write('</html>')
        return res.end
    }
})




server.listen(3000)