# <img src='images/ott.png' width=40px > 당신만의 온라인 옷장 ㅇㅗㅅ

<img src='images/ottmain.PNG' width=1000px >

## Index

#### &emsp; [➤ 프로젝트 소개](#프로젝트-소개)<br>

#### &emsp; [➤ 개발 환경](#개발-환경)<br>

#### &emsp; [➤ 기능 소개](#기능-소개)<br>

#### &emsp; [➤ 산출물](#산출물)<br>

#### &emsp; [➤ 팀 소개](#팀-소개)<br>

## 프로젝트 소개

**사용자만의 온라인 옷 관리 서비스**

- 직접 옷을 등록하고 조합
- 다른 사용자의 옷, 코디 추천과 AI를 통한 가상 시착
- webRTC를 통한 다른 사용자와의 중고 거래

### 프로젝트 기간

**2024.07.08 ~ 2024.08.16 (총 7주)**

## 개발 환경

- BE: SpringBoot 3.3.1, Java 17.0.12
- FE: React, TailwindCSS, Zustand, JavaScript
- AI: Python 3.9, Uvicorn 0.22.0, FastAPI 0.111, OOTDiffusion
- DB: MySQL 8.0.39
- Infra: Ubuntu 20.04, Docker, Portainer, caddy-docker-proxy
- Third Party : OAuth2.0, OpenVidu, Firebase Cloud Messaging

### 협업 관리 툴

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/mattermost-0058CC?style=for-the-badge&logo=mattermost&logoColor=white"><br/>

## 기능 소개

### 로그인

- **로그인 화면**: 카카오,네이버,구글 소셜 로그인을 통해 로그인을 할 수 있습니다.
- **스타일 조사 화면**: 사용자 정보와 신체 정보, 선호하는 스타일에 대한 스타일 조사를 할 수 있습니다.
<div style="display: flex; gap:10px ">
  <img src="images/login.jpeg" alt="로그인 화면" width="200">
  <img src="images/survey1.jpeg" alt="설문조사 화면" width="200">
  <img src="images/survey2.jpeg" alt="설문조사 화면" width="200">
  <img src="images/survey3.jpeg" alt="설문조사 화면" width="200">
  <img src="images/survey4.jpeg" alt="설문조사 화면" width="200">
</div>

### 홈

- **추천 탭**: 스타일 조사를 통해 얻은 정보에 맞게 다른 사용자들의 추천 코디를 확인 할 수 있습니다.
- **피드 탭**: 팔로우하는 사용자들의 룩북을 확인 할 수 있습니다.
- **내룩북 탭**: 자신의 룩북을 태그로 모아 볼 수 있습니다.

<div style="display: flex; gap:10px ">
  <img src="images/recomm.gif" alt="추천 화면" width="200">
  <img src="images/feed.gif" alt="피드 화면" width="200">
  <img src="images/my.gif" alt="내룩북 화면" width="200">
</div>

### 옷장

- **옷장 메인 페이지**: 옷장에 옷을 등록할 수 있으며 카테고리 별로 옷을 모아볼 수 있습니다.
- **옷 상세보기**: 등록된 옷의 정보를 상세하게 확인 할 수 있습니다.

<div style="display: flex; gap:10px ">
  <img src="images/closet1.jpeg" alt="옷장 화면" width="200">
  <img src="images/closet2.jpeg" alt="옷장 화면" width="200">
  <img src="images/closet3.jpeg" alt="옷장 화면" width="200">
  <img src="images/closet4.jpeg" alt="옷장 화면" width="200">
  <img src="images/closet5.jpeg" alt="옷장 화면" width="200">
  <img src="images/closet6.jpeg" alt="옷장 화면" width="200">
</div>

### 룩북

- **룩북 생성**: 옷장에 등록된 옷들을 조합해 직접 룩북을 만들 수 있습니다.
- **룩북 상세보기**: 조합된 코디의 옷 정보를 확인 할 수 있습니다. 댓글을 남겨 소통 할 수 있으며 댓글을 통해 중고 거래 신청이 가능합니다.

<div style="display: flex; gap:10px ">
  <img src="images/lookbook1.jpeg" alt="옷장 화면" width="200">
  <img src="images/lookbook2.jpeg" alt="옷장 화면" width="200">
  <img src="images/lookbook3.jpeg" alt="옷장 화면" width="200">
  <img src="images/lookbook4.jpeg" alt="옷장 화면" width="200">
  <img src="images/lookbook5.jpeg" alt="옷장 화면" width="200">
</div>

### webRTC

- **중고거래**: webRTC를 통해 다른 사용자와 중고거래를 할 수 있습니다.

<div style="display: flex; gap:10px ">
  <img src="images/webrtc1.jpeg" alt="중고거래 화면" width="200">
  <img src="images/webrtc2.jpeg" alt="중고거래 화면" width="200">
</div>

### AI 가상 시착

- **가상시착**: AI를 통해 원하는 옷을 가상 시착해 볼 수 있습니다.
<div style="display: flex; gap:10px ">
  <img src="images/ai1.jpeg" alt="중고거래 화면" width="200">
  <img src="images/ai2.jpeg" alt="중고거래 화면" width="200">
  <img src="images/ai3.jpeg" alt="중고거래 화면" width="200">
</div>

## 산출물

### **[Notion](https://jang-jaehun.notion.site/OTT-fabdbe1999c24fedb9a3e9baf6a364ab?pvs=4)**

### ERD

![ERD](images/erd.png)

### Architecture 구조도

![Architecture](images/architecture.png)

## 팀 소개

<table>
<thead>
<tr>
<th style="text-align: center;"><strong>박지응</strong></th>
<th style="text-align: center;"><strong>인호현</strong></th>
<th style="text-align: center;"><strong>장재훈</strong></th>
<th style="text-align: center;"><strong>전가현</strong></th>
<th style="text-align: center;"><strong>최승필</strong></th>
<th style="text-align: center;"><strong>최승현</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a href="https://github.com/JiEung2"><img src="https://avatars.githubusercontent.com/u/127590064?v=4" height="150" width="150" style="max-width: 100%;"> <br> @JiEung2</a></td>
<td align="center"><a href="https://github.com/inhohyun"><img src="https://avatars.githubusercontent.com/u/96523102?v=4" height="150" width="150" style="max-width: 100%;"> <br> @inhohyun</a></td>
<td align="center"><a href="https://github.com/JaeHunJang"><img src="https://avatars.githubusercontent.com/u/46174355?v=4" height="150" width="150" style="max-width: 100%;"> <br> @JaeHunJang</a></td>
<td align="center"><a href="https://github.com/gahyoenj"><img src="https://avatars.githubusercontent.com/u/156265385?v=4" height="150" width="150" style="max-width: 100%;"> <br> @gahyoenj</a></td>
<td align="center"><a href="https://github.com/piilll"><img src="https://avatars.githubusercontent.com/u/156265354?v=4" height="150" width="150" style="max-width: 100%;"> <br>@piilll</a></td>
<td align="center"><a href="https://github.com/cshyun7097"><img src="https://avatars.githubusercontent.com/u/113087570?v=4" height="150" width="150" style="max-width: 100%;"> <br> @cshyun7097</a></td>
</tr>
<tr>
<td align="center"><b>BE</td>
<td align="center"><b>FE</td>
<td align="center"><b>BE | Infra</td>
<td align="center"><b>FE</td>
<td align="center"><b>FE</td>
<td align="center"><b>BE | 팀장</td>
</tr>
</tbody>
</table>

<br>
