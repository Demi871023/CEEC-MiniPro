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
      * Exit 門可能刪除，改用 window 視窗，按下按鍵可以確定及取消（有視窗的同時防呆機制不能有其他動作）。
    * 可以加入機會命運系統（有機會加分也有機會扣分），增加遊戲的趣味性，例如吃到某個命運點就會彈出：「因為你的小論文被發現有抄襲嫌疑所以你的 "其他類別中的 人際支持參數歸零"」
      * 單一階段為主，選擇大類超過三次觸發事件。
  * 科目的回答
    * 改變回答的方式。
    * 原本的選項有困難度上的差異，可以用級距分成 5、10、15、20 分
    * 如果以吃某個掉落物（加分）的方式來收集分數去做選擇，如果吃到炸彈就結束（見圖二）。回答完成就得到行為經驗值。



> 圖一
<img src="https://img1.6949.com/litimg/20140527161/1-F01010P000K9.jpg">




## 可能遇到問題
* 點點之間的繪圖距離可能要做調整
* Bonus 可能可以結合機會命運(?)
* [解決 AJAX 沒辦法取得 CORS（跨網域存取）資料的問題](https://noob.tw/js-cors/)


## Phaser
> * [CDN 連結](https://phaser.io/download/stable)

#### API References
 - api 文件 [phaser3 docs](https://photonstorm.github.io/phaser3-docs/)
 - 遊戲設定 [Game Config](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig)
 - 場景設定 [Scenes Config](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Scenes.html)
 - 場景切換 [scene.start](https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.ScenePlugin.html#start__anchor)
 - 物理引擎 [Phaser.Physics](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.html)
 - 物理引擎設定 [PhysicsConfig](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.PhysicsConfig)
 - 反彈値 [Bounce](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html)
 - 物理邊界相關設定 [Physics Bounds](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html)
 - 物理邊界大小設定 [Physics Size](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Size.html)
 - 物理邊界變形設定 [Physics Transform](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.Components.Transform.html#setScale__anchor)
 - Arcade物件碰撞事件 [Physics Arcade.Collider](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Collider.html)
 - 將 GameObject (遊戲物件)加入到物理世界 [Physics existing](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#existing__anchor)
 - 物件碰撞移動設定 [Physics Arcade.Body.immovable](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#immovable__anchor)
 - 物件是否受到物理相關設定 [Physics Arcade.Body.moves](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#moves__anchor)
 - Arcade引擎相關api [Arcade.immovable](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#immovable__anchor)
 - 事件相關api [Phaser.Events](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Events.html)
 - 事件註冊器 [Phaser.Events. EventEmitter](https://photonstorm.github.io/phaser3-docs/Phaser.Events.EventEmitter.html)
 - 開啟物件互動設定 [setInteractive](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObject.html#setInteractive)
 - 圖片容器 [image](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html)
 - Sprite容器 [Sprite](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html)
 - TileSprite容器 [TileSprite](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.TileSprite.html)
 - TileSprite水平位移 [TileSprite.tilePositionX ](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.TileSprite.html#tilePositionX__anchor)
 - 載入資源-圖片 [load.Image](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.FileTypes.ImageFile.html)
 - 載入資源-SpriteSheet [load.SpriteSheet](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.FileTypes.SpriteSheetFile.html)
 - 物件水平翻轉 [Phaser.GameObjects Flip](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Flip.html)
 - 動畫設定 [Animations](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html)
 - 動畫控制器 [Animation](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Animation.html)
 - 文字物件 [Text](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html)
 - 文字設定 [setText](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html#setText__anchor)
 - 鍵盤控制器 [KeyboardPlugin](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html)
 - 特定鍵盤控制器 [keyboard.createCursorKeys](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html#createCursorKeys__anchor)
 - 鍵盤控制別名 [Keyboard](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Input.Keyboard.html)

## BootStrap
> * [BootStrap 官方 CDN 連結](https://www.bootstrapcdn.com/)

## 圖片連結
> * [圖片網址 IMGUR](https://imgur.com/a/O26iMVC)

## 網站佈署
> * [Heroku]
> * [Loopback 127.0.0.1](http://jdev.asika.tw/getting-started/create-web-server-in-my-computer.html)


## 暫時撰寫平台
> * [Demo版本(20200812)(Phaser+BootStrap)](https://codepen.io/demi871023/pen/GRZJQmY)

