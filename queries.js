const database = require("./database-connection");

module.exports = {
    list(){
        return database('onsen').select()
    },
    read(id){
        return database('onsen').where('id', id).first()
    },
    create(onsen){
        return database('onsen').insert(onsen).returning('*')
        .then(record => record[0])
    },
    update(id, onsen){
        return database('onsen').update(onsen).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
        return database('onsen').where('id', id).del()
    }
};
