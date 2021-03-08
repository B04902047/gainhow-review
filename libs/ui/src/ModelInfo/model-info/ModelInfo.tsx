
import { Product } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';





  import './ModelInfo.module.css';
  

/* eslint-disable-next-line */
export interface ModelInfoProps {
  product: Product
  isHidden: boolean;
}



export function ModelInfo(props: ModelInfoProps) {
  let style: CSSProperties = {
    height: "calc(100vh - 175px)",
    width: (props.isHidden)? 40: 300,
    backgroundColor: "#F7F7F7"
  };
  let headerStyle: CSSProperties = {
    height: 21,
    border: "2px solid #E4E4E4"
  };
  let bodyStyle: CSSProperties = {
    padding: 27
  }
  let titleStyle: CSSProperties = {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    borderBottom: "2px solid #E4E4E4",
  };
  let productNameStyle: CSSProperties = {
    paddingTop: 30,
    paddingBottom: 14,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 18,
  };
  let productInfoStyle: CSSProperties = {
    fontSize: 16,
    padding: 3
  }
  return (
    <div style={style}>
      <div style={headerStyle}/>
      <div style={bodyStyle}>
        <div style={titleStyle}>
          訂單資訊
        </div>
        <div style={productNameStyle}>
          {props.product.productSubTypeChineseName}
        </div>
        {props.product.getInfo().map(info => {
          return (
            <li style={productInfoStyle}>
              {info}
            </li>
          );
        })}
      </div>
    </div>
  );
};


export default ModelInfo;
