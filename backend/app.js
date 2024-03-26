const express = require('express');
const app = express();
const path = require("path");


//app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Register endpoint
app.post('/register', (req, res) => {
    const { id, fullName, address, status } = req.body;
    let fee = 0;

    switch (status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
    }

    const confirmation = {
        id,
        fullName,
        address,
        status,
        fee
    };

    res.status(200).send(confirmation);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
