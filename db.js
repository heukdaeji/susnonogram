const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.get('/', function (req, res) {
    res.send('sus');
});

app.listen(port, () => console.log(`포트: ${port}`));

mongoose
    .connect(
        'mongodb+srv://heukdaeji:byun0114*@cluster0.4h0ye.mongodb.net/?retryWrites=true&w=majority',
        {
            useNewUrlPaser: true,
            useUnifiedTofology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.log(err);
    });

