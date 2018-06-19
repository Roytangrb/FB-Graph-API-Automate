// ==UserScript==
// @name         graph api automater
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automate api requesting of posts
// @author       Roy Tang
// @match        https://github.com/Roytangrb/FB-Graph-API-Automate
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var dataArray = []
    const post_count = prompt("fetch 100/200/300/... posts?")
    var fetch_count = post_count /100
    var pageName = prompt("Public Page Name", "paste here")
    var token = prompt("Access Token", "paste here")
    const url = 'https://graph.facebook.com/'+pageName+'?access_token=' + token
    var id, endpoint = ''
    console.log(url)

    fetch(url).then(response=>{
       if (response.ok){
           return response.json()
       } else {
          throw new Error("Get page info response not ok")
       }
    }).then(responseJson =>{
        id = responseJson.id
        endpoint = 'https://graph.facebook.com/v2.6/' + id + '/posts/?fields=message,link,permalink_url,created_time,type,name,id,comments.limit(0).summary(true),shares,likes.limit(0).summary(true),reactions.limit(0).summary(true)&limit=100&access_token=' + token
        fetchNext(endpoint)
    })

    function replaceBrackets(s){
        return s.replace(/%28/g, '(').replace(/%29/g, ')')
    }

    //in synchronus dealing with responseJson, call recursively to sovle next link dependency
    function fetchNext(next_string){
        if (fetch_count === 0) return;
        fetch(next_string).then(response=>{
            if (response.ok){
                return response.json()
            } else {
                throw new Error("Fetch next failed")
            }
        }).then(responseJson=>{
            dataArray = dataArray.concat(responseJson.data)
            if (fetch_count === 1)console.log(dataArray)
            fetch_count = fetch_count - 1
            return fetchNext(replaceBrackets(responseJson.paging.next))
        })
    }
})();
