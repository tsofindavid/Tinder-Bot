module.exports = {
    tinderURL: "https://api.gotinder.com",
    headers: {
        'X-Auth-Token': '<your token>'
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