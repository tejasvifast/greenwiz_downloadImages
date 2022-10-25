// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');

// Create a Write Stream 
var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");


async function  downController(req,res){
 request('https://www.growpital.com/', (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was success ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);
        console.log($("img"))

        $("img").each((index, image)=>{
            var img = $(image).attr('src');
            var baseUrl = 'https://www.growpital.com';
            var Links = baseUrl + img;
            WriteStream.write(Links);
            console.log(Links)
            WriteStream.write("\n");
        });
        console.log(">>>>>>>>>>>>>>>>")

    }else{
        console.log("Request Failed ");
    }

});
}

module.exports={downController}