const Member = require('../models/member')
    , fs = require('fs')
    , path = require('path')
    , membersData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', './data/dummy-data-members.json'), 'utf-8')); // remove this when hoooked up to db

exports.populateDB = function () {

    async function resetData() {
        try {
            await Member.remove();
            console.log('Data removed...');
            await Member.insertMany(membersData);
            console.log('Data added...');
        } catch (e) {
            console.log(e);
        }
    }

    resetData()
}