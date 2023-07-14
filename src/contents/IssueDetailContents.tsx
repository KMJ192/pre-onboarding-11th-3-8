/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";

import testImg from "assets/image.png";
import { Issue } from "@/modules/homeStore";
import { useLocation } from "react-router-dom";

export default function IssueDetailContents() {
  const issue: Issue = useLocation().state;
  const [year, month, date] = issue.created_at.split("T")[0].split("-");

  return (
    <div css={containerStyle}>
      <div css={profileStyle}>
        <div css={profileLeft}>
          <div>
            <img src={testImg} alt="testImg" />
          </div>
          <div>
            <p>{`#${issue.number}`} issue title</p>
            <p>
              작성자: {issue.user.login}, 작성일: {year}년 {month}월 {date}일
            </p>
          </div>
        </div>
        <p>코멘트: {issue.comments}</p>
      </div>
      <div css={contentsStyle}>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </div>
    </div>
  );
}

const containerStyle = css`
  width: 100%;
  height: auto;
`;

const profileStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  img {
    width: 50px;
    height: 20px;
    border-radius: 50px;
  }
`;

const profileLeft = css`
  display: flex;
  align-items: center;
  column-gap: 48px;
`;

const contentsStyle = css`
  border: 1px solid #ddddddff;
  overflow: auto;
  height: 672px;
  padding: 16px;
  border-radius: 8px;
`;
