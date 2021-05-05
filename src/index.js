const config = require('./config');
const tinder = require('./tinder-api');


const client = new tinder();
console.log(client)

// client.getProfile(res=>{
//     console.log(res)
// })


client.nearByMe(res=>{
    console.log(res.data)
})

