const express = require('express');
const {Client} = require('@notionhq/client');
const cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const app = express();

app.use(cors());


const PORT = 4000;
const HOST = "localhost";

const notion = new Client({auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5"})

 const databaseId = "3ef5c14683ce475684449516072586a6";
// const databaseId = "a43845d454314a25b2e705cd097f0b9e";


// a43845d454314a25b2e705cd097f0b9e

//Post request
app.post('/submitFormToNotion', jsonParser, async (req, res) => {

    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    const extraInfo = req.body.extraInfo;

    console.log(req.body);
    try {
        const response = await notion.pages.create({
            parent: {database_id: databaseId},
            properties: {
                Name: {
                    title: [
                        {
                            text: {
                                content: name
                            }
                        }
                    ]
                },
                "Phone Number": {
                    rich_text: [
                        {
                            text: {
                                content: phoneNumber
                            }
                        }
                    ]
                },
                "Extra Information": {
                    rich_text: [
                        {
                            text: {
                                content: extraInfo
                            }
                        }
                    ]
                }
            }
        })
        console.log(response);
        console.log("wohoooo");
    } catch(error){
        console.log(error);
    }

})



app.listen(PORT, HOST, () =>{
    console.log("Starting proxy at " + HOST + ":" + PORT) // Ger oss localhost
})