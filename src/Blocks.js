import React, { useEffect, useState } from 'react';
import { Client } from '@notionhq/client';
import Header from './Header';


const NotionPage = () => {

  const [pageData, setPageData] = useState(null);
  const filter = {
    property: 'ProjectName',
    title: {
      equals: 'My First Project'
    }
  };

  useEffect(() => {
    const notion = new Client({ auth: "secret_Wl5t1vGZnQI6IhHZY6jX8YtOyAveLgi4DSd35Z1zRF5" });
     const pageId = '0ee66126a6d14ee794627642ed2c9844';
    // const pageId = '7497f1bd7b74402f80678de39005b422';

    // 7497f1bd7b74402f80678de39005b422

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
      <Header />
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
