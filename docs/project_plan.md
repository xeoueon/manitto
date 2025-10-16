# 🎄 마니또 프로젝트 (Manitto Project)

## 1. 프로젝트 개요
매년 친구들과 진행하는 크리스마스 마니또를 손쉽게 관리하기 위한 웹 서비스입니다.  
현재 시중의 마니또 앱들은 대부분 유료로 제공되어 있어,  
친구들과 무료로 사용할 수 있는 나만의 마니또 시스템을 직접 만들고자 했습니다.

이 서비스는 **참가자 정보를 입력**하고,  
**자신을 제외한 랜덤 매칭**을 통해  
**각자에게 이메일로 마니또 이름을 전송**하는 시스템입니다.

---

## 2. 주요 기능
| 기능명 | 설명 |
|--------|------|
| 👥 참가자 등록 | 이름과 이메일 주소를 입력받아 최대 6명까지 등록 가능 |
| 🔄 랜덤 매칭 | 본인을 제외한 무작위 배정 알고리즘 구현 |
| ✉️ 이메일 발송 | Firebase 또는 EmailJS를 활용해 마니또 결과를 각자 이메일로 발송 |
| 🗂 관리자 기능 | 추첨 완료 후 결과를 확인 가능 (본인만) |

---

## 3. 개발 목적
- 연말 모임마다 반복되는 마니또 추첨을 **온라인으로 간편하게 자동화**  
- **React와 Firebase 학습** 및 실무 감각 향상  
- **UI/UX 중심의 사용자 친화적인 웹 앱** 제작

---

## 4. 개발 환경 및 기술 스택
| 항목 | 내용 |
|------|------|
| Frontend | React (CRA 기반), JavaScript |
| Backend | Firebase (Authentication, Firestore, Functions, Hosting) |
| Styling | CSS / TailwindCSS |
| Deploy | Firebase Hosting |
| Collaboration | Git & GitHub, VSCode |
| Communication | Notion (기획 문서 관리), Figma (UI 설계) |

---

## 5. 프로젝트 구조
- **frontend**: React 기반 SPA  
- **database**: Firebase Firestore  
- **email**: EmailJS (또는 Firebase Functions + Nodemailer)  

---

## 6. 기대 효과
- 별도 앱 설치 없이 웹 브라우저에서 마니또 자동 추첨 가능  
- 초대장 기능 등으로 서비스 확장성 확보  
- 소규모 모임이나 동아리에서도 손쉽게 사용 가능
