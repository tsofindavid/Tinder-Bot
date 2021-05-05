const req = require('request');
const config = require('./config');

class API{
    constructor(){
        this.url = config.tinderURL;
        this.token = config.headers;
        this.profile = config.requests.profile;
        this.matches = config.requests.matches;
        this.nearMe = config.requests.nearMe;
        this.like = config.requests.like;
        this.disLikes = config.requests.disLike;
    }

    getProfile(callback){
        req.get({url:this.url + this.profile.path , headers: this.token}, (err, res, body)=>{
            if(err){
                return callback(JSON.parse(err));
            }else{
                return callback(JSON.parse(body));
            }
        });
    }

    getMatches(callback){
        req.get({url:this.url + this.matches.path, headers: this.token}, (err, res, body)=>{
            if(err){
                return callback(JSON.parse(err));
            }else{
                return callback(JSON.parse(body));
            }
        });
    }

    nearByMe(callback){
        req.get({url:this.url + this.nearMe.path, headers:this.token}, (err, res, body)=>{
            if(err){
                return callback(JSON.parse(err));
            }else{
                return callback(JSON.parse(body));
            }
        });
    }

    makeLike(callback, user_id){
        req.get({url:this.url + this.like.path + user_id.toString(), headers: this.token}, (err, res, body)=>{
            if(err){
                return callback(JSON.parse(err));
            }else{
                return callback(JSON.parse(body));
            }        
        });
    }

    makeDisLike(callback, user_id){
        req.get({url:this.url + this.disLikes.path + user_id.toString(), headers: this.token}, (err, res, body)=>{
            if(err){
                return callback(JSON.parse(err));
            }else{
                return callback(JSON.parse(body));
            }
        });
    }


}

module.exports = API;