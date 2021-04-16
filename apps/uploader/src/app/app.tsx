import React, { CSSProperties, useState } from 'react';
import { Button, UploadFileRegistration, UploadFileStatusRow } from '@gainhow-review/ui';
export function App() {
  return <Uploader/>;
}

export default App;


function Uploader(): JSX.Element {
  return (
    <div style={{
      backgroundColor: '#F3F6F9',
      width: '1150px',
      height: "800px"
    }}>
      <div style={{padding: 30}}>
        <UploadFileRegistration
          width='1090px'
          height="500px"
        />
      </div>
      <UploadReminder
        title="注意事項 / 上傳格式"
        contents={[
          "可上傳多檔不同款，每個檔案都會為您成立一筆訂單（提醒您無合併運費之服務）",
          "雙面檔案若分兩檔，請壓縮成同一檔案",
          "單一檔案大小限制5GB",
          "支援XXX、XXX、XXX、XXX、XXX、XXX、XXX、XXX 檔案格式"
        ]}
        style={{
          paddingLeft: 52,
          paddingTop: 43,
          display: 'inline-block',
          width: 609
        }}
      />
      <div style={{
        display: 'inline-block',
        position: 'relative',
        left: 130,
        bottom: 38
      }}>
        <Button style={{ width: 130, marginRight:15 }} onClick={() => {}}>
          上一頁
        </Button>
        <Button style={{ width: 184 }} onClick={() => {}}
          isPrimary
        >
          確認
        </Button>
      </div>
    </div>
  )
}

interface UploadReminderProps {
  title: string;
  contents: string[];
  style?: CSSProperties;
}

function UploadReminder(props: UploadReminderProps): JSX.Element {
  let titleStyle: CSSProperties = {
    color: "#333333",
    fontWeight: 'bold',
    fontSize: 18
  };
  let contentsStyle: CSSProperties = {
    fontSize: 16,
    color: '#333333',
    paddingLeft: 20,
  }
  return (
    <div style={props.style}>
      <div style={titleStyle}>
        {props.title}
      </div>
      <ol style={contentsStyle}>
        {props.contents.map((content) => 
          <li key={content}>{content}</li>
        )}
      </ol>
    </div>
  )
}