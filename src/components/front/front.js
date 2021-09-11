import React from "react";
import Button from "../button/button";
import "./front.scss";
import { scrollTo } from "../util";
import { front } from "../../config.json";

export default function Front() {
  return (
    <div className="front">
      <div className="front-card">
        <h1>{front.title}</h1>
        <p>{front.subtitle}</p>
        <Button className="resume">
            <a href="https://www.1111.com.tw/Resume/ResumePreview?resumeGuid=4290aeb0-5ea0-43a8-8d4e-2e5b01e253a5">我的履歷</a>
          </Button>
        <Button
          children="聯絡我"
          onClick={() => scrollTo(".contacts:not(.btn)")}
        />
      </div>
    </div>
  );
}
