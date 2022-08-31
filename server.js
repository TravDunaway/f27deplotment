const express = require('express')
const path = require('path')

const app = express()

//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
    //dirname is a variable, of the location of your currrent (directory name)file.
    //emphasis on the current, dirname is really like macmini/Document/Dev/Demo....to/server
    // the .. means go to, kind of like cd ..
}
)


const port = 4005

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

