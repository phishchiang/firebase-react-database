let express = require("express");
const path = require("path");
let app = express();

const INDEX = path.join(__dirname, "./client/build/index.html");
const PORT = process.env.PORT || 3000;

app
  .use(express.json({ extended: false }))
  .use(express.static("client/build"))
  .use((req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
// app.use(express.static("www"));

// 初始化 Firebase
// let admin = require("firebase-admin");
// let serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://javascriptsnode.firebaseio.com"
// });

// // 操作資料庫
// let database = admin.database();
// let ref = database.ref("/messages");
