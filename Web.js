process.env.PWD = process.cwd();

app.use('/partials', express.static(process.env.PWD + '/partials'));
app.use('/node_modules/ejs/lib', express.static(process.env.PWD + '/node_modules/ejs/lib'));