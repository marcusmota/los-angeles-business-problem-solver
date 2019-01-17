
const _ = require("lodash");
const request = require("request");
const moment = require("moment");

const getTheMostLocationsInLA  = (data) => {

    if(data.length === 0){
        return "";
    }else {

        let arrayObj = [];

        data.forEach(el => {
            
            if(el.city === "LOS ANGELES"){
                let i = _.findIndex(arrayObj, function(o) { return o.business_name === el.business_name; });
                if(i != -1){
                    arrayObj[i].count = arrayObj[i].count +1;
                }else{
                    arrayObj.push({
                        business_name : el.business_name,
                        count : 1,
                    });
                }
            }

        });

        if(arrayObj.length > 0){
            arrayObj.sort((a,b) => {
                if(a.count < b.count){
                    return 1;
                }else if(a.count >= b.count){
                    return -1;
                }
            });

            return arrayObj[0].business_name;
        }else{
            return "";
        }


    }


};

const getJsonDataFromUrl = (url) => {

    return new Promise((resolve, reject) => {

        request(url, function (error, response, body) {
            
            resolve(JSON.parse(body));

        });

    })


};

const resolveProblemOne = async () => {

    let response = await getJsonDataFromUrl("https://data.lacity.org/resource/ngkp-kqkn.json");

    return getTheMostLocationsInLA(response);

};

const getTheOldestActiveBusiness = (arrayData) => {

    if(arrayData.length === 0){
        return "";
    }else {

        arrayData.sort((a,b) => {
            if(moment(a.location_start_date) > moment(b.location_start_date)){
                return 1;
            }else if(moment(a.location_start_date) <= moment(b.location_start_date)){
                return -1;
            }
        });

        return arrayData[0].business_name;
    }

};

const resolveProblemTwo = async () => {

    let response = await getJsonDataFromUrl("https://data.lacity.org/resource/ngkp-kqkn.json");

    return getTheOldestActiveBusiness(response);

};

module.exports = {
    getTheMostLocationsInLA,
    getJsonDataFromUrl,
    resolveProblemOne,
    resolveProblemTwo,
    getTheOldestActiveBusiness
}