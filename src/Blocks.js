// const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5" });

// (async () => {
//   const blockId = '0ee66126a6d14ee794627642ed2c9844';
//   const response = await notion.blocks.children.list({
//     block_id: blockId,
//   });
//   console.log(response);
//   {response.results.map((page) => (
//     <div key={page.id}>
//       {/* Render the page content here */}
//     </div>
//   ))}  
// })();

// const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5" });

// (async () => {
//   const pageId = '0ee66126a6d14ee794627642ed2c9844';
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   console.log(response);
// })();

import React, { useEffect, useState } from 'react';
import { Client } from '@notionhq/client';

const NotionPage = () => {

  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    const notion = new Client({ auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5" });
    const pageId = '0ee66126a6d14ee794627642ed2c9844';

    async function fetchPage() {
      const response = await notion.pages.retrieve({ page_id: pageId });
      setPageData(response);
      console.log(response);
    }

    fetchPage();
  }, []);
  if (!pageData) {
    return <div>Loading...</div>;
    }
    
    return <div>
    <h1>{pageData.properties.Name.title[0].text.content}</h1>
    {Object.keys(pageData.properties).map((key) => (
    <div key={key}>
    <h2>{key}</h2>
    <p>{JSON.stringify(pageData.properties[key])}</p>
    </div>
    ))}
    </div>
};

export default NotionPage;



// const { Client } = require('@notionhq/client');

// const notion = new Client({auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5"});

// (async () => {
//   const databaseId = '3ef5c14683ce475684449516072586a6';
//   const response = await notion.databases.query({
//     database_id: databaseId,
//     filter: {
//       or: [
//         {
//           property: 'Name',
//           checkbox: {
//             equals: true,
//           },
//         },
//         {
//           property: 'Cost of next trip',
//           number: {
//             greater_than_or_equal_to: 2,
//           },
//         },
//       ],
//     },
//     sorts: [
//       {
//         property: 'Last ordered',
//         direction: 'ascending',
//       },
//     ],
//   });
//   console.log(response);
// })();







//  import { useState, useEffect } from "react";

//  function Blocks() {
//    const [blockId, setBlockId] = useState("");

//    useEffect(() => {
//      const fetchBlock = async () => {
//        const notionKey = "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5";
//        const pageId = "3ef5c14683ce475684449516072586a6";
//        const blockId = "0ee66126a6d14ee794627642ed2c9844";
       
      
      
      
//        const response = await fetch(
//          `http://api.notion.com/v1/blocks/0ee66126a6d14ee794627642ed2c9844`,
//          {
//            headers: {
//             "Notion-Version": "2022-06-28",
//              "accept": "application/json",
//              "Content-Type": "application/json",
//              Authorization: `Bearer ${notionKey}`,
//            },
//         }
//        );

//        const blockData = await response.json();
//        setBlockId(blockData.id);
//      };

//      fetchBlock();
//    }, []);

//    return (
//      <div>
//       <p>The block ID is: {blockId}</p>
//       <p></p>
//      </div>
//    );
//  }
// export default Blocks;

// import { useState } from "react";


// function Blocks(){
//     const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [extraInfo, setExtraInfo] = useState("");

// fetch('https://api.notion.com/v1/databases/3ef5c14683ce475684449516072586a6/query', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Notion-Version': '2022-03-15',
//     'Authorization': 'Bearer secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5',
    
//   },
//   body: JSON.stringify({
//         name: name,
//         phoneNumber, phoneNumber,
//         extraInfo: extraInfo
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))
// }

// export default Blocks;




