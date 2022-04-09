# 老爸的私房錢
## 簡介
AlphaCamp 學期三作業

## 功能與規格
使用者可以：
- 註冊帳號
- 註冊之後，可以登入/登出
  - 只有登入狀態的使用者可以看到 app 內容，否則一律被導向登入頁
  - 在首頁一次瀏覽所有支出的清單
- 使用者只能看到自己建立的資料
- 在首頁看到所有支出清單的總金額
- 新增一筆支出 (資料屬性參見下方規格說明)
- 編輯支出的屬性 (一次只能編輯一筆)
- 刪除任何一筆支出 (一次只能刪除一筆)
- 根據「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和

其餘規格可參考[課程網頁](https://lighthouse.alphacamp.co/courses/118/assignments/3549)，有特定 wireframe 與 data model 設計

## 安裝
1. 開啟終端機，確認好路徑，`git clone` 此專案，cd 到底下
```
$ pwd
[current_path]
$ git clone https://github.com/kuangtsao/ac-restaurantList.git
$ cd ac-restaurantList
```
2. 透過 `npm install` 安裝需要的 package
```
$ npm install
```
3. 啟動前先檢查有沒有 nodemon，沒有的話請依照這個以下指令安裝
```
$ which nodemon
# 如果有出現路徑就代表已經安裝了
$ npm install nodemon
# 如果要讓他變成到處都可以用，多帶一個 -g 的 flag
```

4. 啟動 mongodb container(optional)
如果已經有裝 mongo 4.2 版，或者不喜歡 container 的可以跳過  
先確認自己有沒有裝 docker 和 docker-compose
```
$ which docker
$ which docker-compose
```
如果沒有出現路徑，可以參考 [docker installation guide](https://docs.docker.com/compose/install/) 安裝  

利用 docker-compose 開啟  
```
[project path] $ docker-compose up -d
```

5. 設定環境變數
參考 `.env.example` 這個檔案設定變數  
`FACEBOOK_ID` 與 `FACEBOOK_SECRET`需要到 [Meta for Developers](https://developers.facebook.com/) 進行申請，可參考[文件](https://developers.facebook.com/docs/facebook-login)與[課程文件](https://lighthouse.alphacamp.co/courses/118/units/25462)進行設定。  
`SESSION_SECRET` 可以依需求自行替換

6. 注入種子資料
請先確認是否還在 clone 下來的路徑
```
[project path] $ npm run seed
```
## 啟動專案
挑一個喜歡的
```
[project path] $ npm run start
[project path] $ node app.js
[project path] $ npm run dev
[project path] $ nodemon app.js
```
只要有看到這個訊息，就可以到瀏覽器輸入 `http://localhost:3000`，就可以使用該專案功能
```
ac-restaurantList is running on http://localhost:3000
```
## 開發工具
- node 14.16.0
- express 4.16.4
- express-handlebars 3.0.2
- bootstrap 5.1.3
- font-awesome 6.1.1
- mongoose 6.1.6
- handlebars-helpers 0.10.0
- dotenv 8.2.0
- bcryptjs 2.4.3
- express-session 1.17.1
- passport 0.4.1 
- passport-local 1.0.0
- passport-facebook 3.0.0

## 工作項目

### 前端
- [x] 依照 wireframe，利用 bootstrap 5 堆出 html

### Data Model
- [] 依據 Data Sheet 做 Mongo 的 Model
- [] 完成 recordSeeder.js
- [] 完成 categorySeeder.js

### 後端
- [] 註冊
  - [] 註冊後可登入登出
  - [] 登入後才能看到內容，否則轉到登入頁
- [] 首頁一次瀏覽所有項目
- [] 首頁看到所有支出的總金額
- [] 新增一筆支出
- [] 編輯一筆支出
- [] 依據類別篩選支出，並顯示總額
