module.exports = {
    tgToken : "693027940:AAF8J9PMNX_uFg4uERKtygOly7MzOVZx1EE",
    admin_id : 333402933,
    port : 3000,
    // URL: "https://f256e1a12a87.ngrok.io",
    URL: "https://0c887638ce18.ngrok.io",

    
    tinderURL: "https://api.gotinder.com",
    headers: {
        'X-Auth-Token': '77dd30fc-c38e-432a-ab7f-97eec84b9dad'
    },

    requests: {
        profile:{
            path: '/v2/profile?include=account%2Cuser',
        },
        matches:{
            path:"/v2/matches?count=10",
        },
        like:{
            path:"/like/"
        },
        disLike:{
            path:"/pass/"
        },
        nearMe:{
            path:"/v2/recs/core"
        }
    }
}