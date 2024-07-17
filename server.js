









const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Images Folder
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// Routers
const discoveryRouter = require('./routers/discoveryRouter');
const rawDetailRouter = require('./routers/rawDetailRouter');
const materialDetailRouter = require('./routers/materialDetailRouter');
const manufactureDetailRouter = require('./routers/manufactureDetailRouter');
const aboutRouter = require('./routers/aboutRouter');
const aboutHomeRouter = require('./routers/aboutHomeRouter');
const supportRouter = require('./routers/supportRouter');
const rawMainRouter = require('./routers/rawMainRouter');
const materialMainRouter = require('./routers/materialMainRouter');
const manufactureMainRouter = require('./routers/manufactureMainRouter');

app.use('/api/discoverys', discoveryRouter);
app.use('/api/rawDetails', rawDetailRouter);
app.use('/api/materialDetails', materialDetailRouter);
app.use('/api/manufactureDetails', manufactureDetailRouter);
app.use('/api/abouts', aboutRouter);
app.use('/api/aboutHomes', aboutHomeRouter);
app.use('/api/supports', supportRouter);
app.use('/api/rawMains', rawMainRouter);
app.use('/api/materialMains', materialMainRouter);
app.use('/api/manufactureMains', manufactureMainRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
