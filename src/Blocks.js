// import { useState, useEffect } from "react";

// function Blocks() {
//   const [blockId, setBlockId] = useState("");

//   useEffect(() => {
//     const fetchBlock = async () => {
//       const notionKey = "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5";
//       const pageId = "3ef5c14683ce475684449516072586a6";
//       const blockId = "0ee66126a6d14ee794627642ed2c9844";
      
      
      
//       const response = await fetch(
//         `http://api.notion.com/v1/blocks/${blockId}`,
//         {
//           headers: {
//             "Notion-Version": "2021-05-15",
//             "accept": "application/json",
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             Authorization: `Bearer ${notionKey}`,
//           },
//         }
//       );

//       const blockData = await response.json();
//       setBlockId(blockData.id);
//     };

//     fetchBlock();
//   }, []);

//   return (
//     <div>
//       <p>The block ID is: {blockId}</p>
//     </div>
//   );
// }

// export default Blocks;
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'Notion-Version': '2021-05-13', 'Access-Control-Allow-Origin': '*'}
  };
  
  fetch('https://api.notion.com/v1/blocks/0ee66126a6d14ee794627642ed2c9844', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
