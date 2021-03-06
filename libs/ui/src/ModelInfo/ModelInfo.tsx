
import { Product } from '@gainhow-review/data';
import React, { CSSProperties, useState } from 'react';
import DoubleLeftIcon from '../Icon/DoubleLeftIcon.svg';
import DoubleRightIcon from '../Icon/DoubleRightIcon.svg';
import MenuIcon from '../Icon/MenuIcon.svg';

  import './ModelInfo.module.css';
  

/* eslint-disable-next-line */
export interface ModelInfoProps {
  product: Product;
  isHidden: boolean;
  style: CSSProperties;
  onToggle(): void;
  hidable: boolean;
}

export function ModelInfo(props: ModelInfoProps) {
  let style: CSSProperties = {
    border: "2px solid #E4E4E4",
    borderBottom: "none",
    backgroundColor: "#F7F7F7",
    ...props.style
  };
  let headerStyle: CSSProperties = {
    height: 21,
    borderBottom: "2px solid #E4E4E4"
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
      <div style={headerStyle}>
        {props.hidable && <img
          style={{padding: 6}}
          src={(props.isHidden)? DoubleLeftIcon: DoubleRightIcon}
          onClick={props.onToggle}
        />}
      </div>
      {(props.isHidden)?
        <img
          style={{width: 20, padding: 8}}
          src={MenuIcon}
          onClick={props.onToggle}
        />
          :
        <div style={bodyStyle}>
          <div style={titleStyle}>
            訂單資訊
          </div>
          <div style={productNameStyle}>
            {props.product.productSubTypeChineseName}
          </div>
          {props.product.getInfo().map(info => {
            return (
              <li
                key={info}
                style={productInfoStyle}
              >
                {info}
              </li>
            );
          })}
        </div>
      }
    </div>
  );
};

export default ModelInfo;