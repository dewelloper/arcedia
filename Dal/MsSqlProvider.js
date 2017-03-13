var sql = require('mssql');

var dbConfig = {
    server: 'localhost',
    database: 'HaselMap',
    user: 'sa',
    password: 'sa1234**',
    port: 1433
};

module.exports = {
    getMapData: function (callback) {
        var conn = new sql.Connection(dbConfig);
        var req = new sql.Request(conn);

        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return;
            }

            req.query('select * from HaselLocations', function (err, recordset) {
                if (err) {
                    console.log(err);
                }
                else {
                    callback(recordset);
                }
                conn.close();
            });
        });
    }
}