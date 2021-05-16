const ApiKey = require('../models/apiKey-model');


exports.authorize = (oneKey, isAdmin) => {
    // i looked up promise and i'm able to use with await which will provide me with a answer

    return new Promise(async (resolve, reject) => {
        if (!oneKey) {
            reject("unauthorized!!")
        }
        const key = await ApiKey.findOne({'ApiKey': oneKey}).exec();

        if (key) {
            if (isAdmin) {
                if (key.Level !== "2") {
                    reject("Not a Admin!!")
                }
            }
            resolve(true)
        } else {
            reject("unauthorized!!")
        }
    })
};
