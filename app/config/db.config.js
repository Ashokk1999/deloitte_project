/*module.exports = {
  
  HOST: "localhost",
  USER: "INCOIKSUDARSHAN",
  PASSWORD: "GITcontri9,.9",
  DB: "testdb",
  dialect: "mssql",
  port:0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};*/


const config = {
  user :'INCOIKSUDARSHAN',
  password :'GITcontri9,.9',
  server:'INCOIKSUDARSHAN',
  database:'CMS_DB',
  dialect:"mssql",
  options:{
      trustedconnection: true,
      //enableArithAbort : true, 
      instancename :'SQLEXPRESS'
  },
  port :55814 ,
}

module.exports = config;


