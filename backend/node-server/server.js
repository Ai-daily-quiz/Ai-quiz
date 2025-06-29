const app = require("./app");

// 환경 변수에서 포트 가져오기
const PORT = process.env.PORT || 4000;

// 서버 시작
const server = app.listen(PORT, () => {
  console.log(`🚀 Node.js server is running!`);
  console.log(`📡 Listening on http://localhost:${PORT}`);
  console.log(`🔗 Python server expected at http://localhost:5001`);
});
