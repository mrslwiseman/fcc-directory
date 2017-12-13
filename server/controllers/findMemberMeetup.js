const axios = require('axios')

let count;
let i;
let page = 200;
let meetupUrl = "freecodecampmelbourne"
//let meetupUrl = "Yarra-YUkers"

function searchPage(name, offset = 0) {
    // const only = "id,name"
    const only = "id,name,photo"
    const url = `https://api.meetup.com/${meetupUrl}/members?&sign=true&photo-host=public&offset=${offset}&only=${only}`
    return axios({
        method: 'get',
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(res => {
            if (count == undefined) {
                count = res.headers["x-total-count"];
            }
            return res.data.filter(member => member.name.includes(name) // {name,id,group_profile}
            )
        })
        .catch(e => e)
}

async function findAllMembers(name) {
    try {
        let members = [];
        i = 0
        while (true) {
            members.push(
                await searchPage(name, i)
            )
            console.log(count + ' records remaining...')

            if (count <= page) {
                break;
            } else {
                count -= page;
                i++
            }

        }
        console.log("*******************")
        return members
    } catch (err) {
        console.log(err)
    }
}

exports.find = function (name) {
    return findAllMembers(name)
        .then(res => {
            return res[0].map(m => {
                return {
                    id: m.id,
                    name: m.name,
                    photo: m.photo && m.photo.thumb_link
                }
            })
        })
}