const Sequelize = require('sequelize');
const {v4:uuidv4} = require('uuid')
const config = require('./config');
console.log('>>>>>> db.js init sequelize......');

function generateId(){
  return uuidv4()
}

const sequelize = new Sequelize(config.database,config.username,config.password,{
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

sequelize.authenticate().then(() => {
  console.log('>>>>>> db.js ====== sequelize connect success ======')
}).catch((error) => {
  console.log('>>>>>> db.js ====== sequelize connect mysql error: ======',error)
})

const id_type = Sequelize.SMALLINT(50);

function defineModel(name,attributes){
  let attrs = {};
  for(let key in attributes){
    let value = attributes[key];
    if(Object.prototype.toString.call(value) === '[object Object]' && value.type){
      value.allowNull = value.allowNull || false;
      attrs[key] = value
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      }
    }
  }
  attrs.id = {
    type: id_type,
    primaryKey: true
  }
  attrs.createAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.updateAt = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  }
  return sequelize.define(name,attrs,{
   tableName: name,
   timestamps: false,
   hooks: {
     beforeValidate: function(obj){
       let now = new Date().getTime();
       if(obj.isNewRecord){
        if (!obj.id) {
          obj.id = generateId();
        }
        obj.createdAt = now;
        obj.updatedAt = now;
        obj.version = 0;
       } else {
        obj.updatedAt = Date.now();
        obj.version++;
       }
     }
   } 
  })
}

let exp = {
  defineModel: defineModel,
  sync: () => {
    sequelize.sync({
      force: true
    })
  }
};

module.exports = exp;