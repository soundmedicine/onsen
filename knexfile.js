require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///onsen'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
      
  }

}
