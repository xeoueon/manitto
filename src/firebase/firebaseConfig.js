// Firebase SDK에서 필요한 함수 불러오기
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Firebase 프로젝트 설정 (네가 Firebase에서 받은 설정값이야!)
const firebaseConfig = {
  apiKey: "AIzaSyAihasEUJ7VoRuLr8NzWfUK6b-JPSJRJCo",
  authDomain: "manitto-19fdf.firebaseapp.com",
  projectId: "manitto-19fdf",
  storageBucket: "manitto-19fdf.firebasestorage.app",
  messagingSenderId: "49800344567",
  appId: "1:49800344567:web:84a18e052c912ab68334f2",
  measurementId: "G-CLEHJPSPGP"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("✅ Firebase 연결 성공! DB 객체:", db);

export { db };
export default app;
