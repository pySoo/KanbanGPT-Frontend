# KanbanGPT

KanbanGPT는 **개발 생산성 향상**을 위해 칸반 보드와 Chat GPT를 연동한 React 기반 프로젝트입니다.

**개발 이슈를 칸반보드를 통해 관리**하고 GPT로부터 **요구사항을 구현한 코드**를 즉시 받아볼 수 있도록 구현되었습니다.

> 프로젝트 기간: 23.07.20 ~ 23.07.31

<br />

## 🌐 Demo

[KanbanGPT](https://kanban-gpt.vercel.app/)

<br />

## ⚒️ Tech Stack

|        Category        |                                                                                                                                                       Technologies                                                                                                                                                        |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **프레임워크 및 언어** |                                                  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black">                                                  |
|     **빌드 도구**      |                                                                                                          <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">                                                                                                           |
|     **상태 관리**      |                                                 <img src="https://img.shields.io/badge/React_query-FF4154?&style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?&style=for-the-badge&logo=recoil&logoColor=white">                                                  |
|      **스타일링**      |                                                                                                         <img src="https://img.shields.io/badge/Emotion-D26AC2?&style=for-the-badge&logo=emotion&logoColor=white">                                                                                                         |
|     **코드 관리**      | <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> |
|    **배포 플랫폼**     |                                                                                                        <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">                                                                                                         |

<br />

## ✨ Features

- #### 칸반 보드

  - **`드래그 앤 드랍`** 을 통해 이슈 상태를 업데이트합니다.

- #### ChatGPT 연동

  - KanbanGPT-backend에서 **`구현한 API 서버`** 를 사용합니다.

- #### 요구사항 코드 생성

  - 사용자는 GPT에게서 **`요구사항을 구현한 코드를 즉시 받아볼 수 있습니다.`**
  - 코드의 정확도를 높이기 위해 언어와 프레임워크를 입력할 수 있습니다.
  - 편의성을 위해 언어와 프레임워크 정보는 **`전역으로 관리`** 하여 **`재입력을 방지`** 합니다.

- #### 요구사항 검색

  - 검색어 생성과 이동을 한 번의 클릭으로 수행하여 사용자의 시간을 절약합니다.
  - 검색 버튼을 누르면 구현에 필요한 **`검색어가 자동 생성되어 클립보드에 복사`** 되며, 동시에 사용자는 **`GPT 사이트로 이동`** 합니다.

- #### 화면 조정 핸들러

  - 이슈 모달에서 사용하지 않는 공간을 최소화하기 위해 **`영역의 크기를 사용자가 조절`** 할 수 있습니다.

- #### 코드 블럭

  - **`언어마다 다른 하이라이터`** 기능을 적용하여 가독성을 높였습니다.
  - 해당 코드는 **복사** 하여 사용할 수 있습니다.

- #### 반응형 웹 구현 및 모바일 대응

  - 모바일, 타블렛, 데스크탑 사이즈에 대응되는 **`반응형 레이아웃`** 으로 구성하였습니다.
  - safe-area 속성을 이용하여 **`모바일 노치, 인디케이터 영역`** 내에서 웹이 그려지도록 모바일 환경에 대응하였습니다.

<br />

## 🤔 사용성을 위한 고민

- #### 입력은 간편하게

  - 모든 입력 필드는 Enter 키 또는 버튼 클릭으로 제출할 수 있습니다.
  - 이슈, 요구사항 등 자주 업데이트 되는 입력 필드에서는 **매번 제출 이벤트를 발생시키는 것이 번거롭게 느껴졌습니다.**
  - 따라서 **`포커스를 잃을 때에도 업데이트`** 가 되도록 구현하였습니다.

- #### 필요한 정보만

  - 요구사항이 많은 이슈가 다른 이슈를 가려 **`화면이 복잡해지는 것을 방지`** 하기 위해, 홈 화면에서 보여지는 **`요구사항의 개수를 제한`** 하였습니다.
  - 가독성을 위해 홈 화면에서는 각 요구사항을 최대 **`2줄까지만 표시하고 말줄임`** 을 사용합니다.

- #### 유저가 원하는 화면

  - 사용자가 **코드를 넓은 화면에서 확인**하거나 **요구사항에만 집중할 수 있도록**, **`화면 크기를 조절할 수 있게 핸들러`** 를 제공합니다.
  - 코드 검색이 필요할 때마다 이슈를 개별적으로 클릭하고 확인하는 번거로움을 줄이기 위해 **`코드 리스트만을 별도로 확인할 수 있는 페이지`** 를 추가하였습니다.

- #### 이어지는 유저 플로우

  - API 키를 입력했음에도 인증 에러가 발생하는 경우, 사용자를 **`API 안내 페이지로 바로 연결하는 커스텀 토스트`** 를 제공합니다.
  - 사용자의 **이동 거리를 줄이기 위해,** 칸반 보드에서 직접 요구사항의 완료 상태를 변경할 수 있게 하였습니다.

- #### 모바일 대응

  - 모바일 환경에서 **노치, 인디케이터 영역**으로 인해 **`웹 페이지가 꽉 차게 표시되지 않는 문제`** 를 **safe-area** 속성을 통해 해결하였습니다.
  - 모바일 환경에서는 칸반 보드를 좌우로 스크롤 해야 하기 때문에 **`스크롤 사용성을 높이기 위해 scroll snap`** 을 적용하였습니다.

- #### 실수 방지

  - 실수로 요소를 **삭제하는 것을 방지**하기 위해 확인 토스트를 표시하였습니다.
  - 입력 값이 없는 경우 토스트 메시지로 **누락된 정보를 채울 수 있게** 안내합니다.

- #### 웹 접근성

  - 웹 접근성을 향상시키기 위해, **시맨틱 태그와 aria-label**을 적절히 활용하였습니다.

<br />

## 📦 Project Structure

```
📦 src
├── 📂 api
├── 📂 assets
├── 📂 atoms
|── 📂 components
|   ├── 📂 CodeArchive
|   ├── 📂 Common
|   ├── 📂 Gpt
|   ├── 📂 Icons
|   ├── 📂 KanbanBoard
|   ├── 📂 Modal
|   ├── 📂 Requirement
|   └── 📂 Toast
├── 📂 constants
├── 📂 hooks
├── 📂 pages
├── 📂 styles
├── 📂 types
└── 📂 utils
```

## 🚀 Getting Started

```bash
yarn install
```

```bash
yarn dev
```
