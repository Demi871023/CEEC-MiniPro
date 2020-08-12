# CEEC-MiniPro

> [Reference](https://jsfiddle.net/v4yx5ba0/416/)


## 遊戲架構
主要分成四大部分：高一、高二、高三



## 20200812 Meeting
* 增加故事性
  * 在 GM 對話的時候塞入故事情節，類似養成模擬遊戲，現在做的選擇都會影響結果。
* 於選擇科目時以遊戲的方式做選擇。
  * 選擇科目類別
    * 以 Random 的方式在畫面中出現各個點，使用者可以透過上下左右鍵去控制角色吃點。（見圖一）
    * 畫面左側有 Exit 門（作為選擇完科目的出口），右側有 Bonus 門（增加 “其他” 參數，但可能一個階段有限制加分的次數）
    * 可以加入機會命運系統（有機會加分也有機會扣分），增加遊戲的趣味性，例如吃到某個命運點就會彈出：「因為你的小論文被發現有抄襲嫌疑所以你的 "其他類別中的 人際支持參數歸零"」
  * 科目的回答
    * 改變回答的方式。
    * 原本的選項有困難度上的差異，可以用級距分成 5、10、15、20 分
    * 如果以吃某個掉落物（加分）的方式來收集分數去做選擇，如果吃到炸彈就結束（見圖二）。回答完成就得到行為經驗值。



> 圖一
<img src="https://img1.6949.com/litimg/20140527161/1-F01010P000K9.jpg">

> 圖二
<img src="https://lh3.googleusercontent.com/proxy/H44p8eAvHLsSpd8xbqTgXUqBmNxqDKaYFNleLsImgWiR5B3BCRmDYk1anqrwxU51eSt_hVv5hNPGlUM7nuGUBOS7mGmKNdLpkJX-30v7eK-ZDvOsgki-rOIZ2A">



## 可能遇到問題
* 點點之間的繪圖距離可能要做調整
* Bonus 可能可以結合機會命運(?)



## 8/11 - 8/13
進入系統與角色選取

