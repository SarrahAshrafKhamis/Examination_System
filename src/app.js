const sql = require("mssql");

var config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "test",
      password: "test",
    },
  },
  options: {
    port: 1433,
    database: "ITI",
    rowCollectionOnDone: true,
    useColumnNames: false,
    trustServerCertificate: true,
  },
};

async function connect() {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query("Select * from Student");
    console.dir(res.recordset);
  } catch (err) {
    console.log(err);
  }
}

connect();
