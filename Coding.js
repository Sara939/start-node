// const fs = require('fs');
// const EventEmitter = require('events').EventEmitter;


// class Coding extends EventEmitter{
//     constructor(){
//         super();
//        this.onReading();
//        this.onWriting();

//     }

//     ReadFromWiki = ()=>{
//         fs.readFile('./wiki.txt',{encoding: 'utf-8'},(err, data)=>{
//             if(err) return console.log(err);
//             this.emit("reading");
//             this.WriteToWiki(data)

//         })
//     };

//     WriteToWiki = (somedata)=>{
//         fs.appendFile('./upperwiki.txt', somedata.toUpperCase(), (err) =>{
//             if(err) return console.log(err);
//             this.emit("writing ");
//         })
//     };
    
//     onReading = ()=>{
//     this.on('reading', ()=>{
//         console.log('comleted reading');

//     })}
//     onWriting = ()=>{
//     this.on('writing ', ()=>{
//         console.log('comleted writing');

//     })}

// }

// module.exports = new Coding();