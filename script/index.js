// const.js

const cw = $(window).width();
const ch = $(window).height();
const bg1Scale = 4;
const gamebgScale = 0.7;
const playerScale = 0.3;
const beansScale = 0.2;
const classScale = 0.5;
const scale = 0.6;
const monsterScale = 0.7;

// 課目類別名稱及個數
const subjectN = 8;
const subject_name = ['語文', '自然科學', '綜合活動', '數學', '科技', '健康與體育', '社會', '藝術'];
const subject_nameen = ['Langugage', 'Science', 'Integrative', 'Math', 'Technology', 'Health', 'Social', 'Art'];

var eat = false;    // 偵測是否執行動作：吃
var spaceCounter = 0;

var donteat = false;

var beansTmp;

// 使用者選擇科目
var subject_select = -1;
// 科目亂數座標
var subject_xy = [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}];

// 取得亂數函式
const getRandom = (range, start) =>{
    return Math.floor(Math.random() * range) + start;
};

// 取絕對值
const abs = (num1, num2) =>{
    if(num1 - num2 > 0)
        return num1 - num2;
    else
        return (num1 - num2) * -1;
};

function modalOpen(index)
{
    console.log("eat");
    $("#btn_modal").click();
    $("#subject_name").text(subject_name[index]);
}

function cancelModalClose()
{
    console.log("Don't eat");
    $("#cancel").click();
    
    $("#btn_modal").click();
    $("#cancel").click();
}

function sureModalClose()
{
    console.log("確定選擇" + subject_name[subject_select]);
    // 等待 Debug
    $("#cancel").click();

    $("#btn_modal").click();
    $("#cancel").click();
}


window.addEventListener('keypress', function(e) {
    var keyID = e.code;
    
    // 按 Q 即丟棄已選擇科目
    if (keyID == 'KeyQ')
    {
        console.log("Q");
//         $("#btn_modal").click();
        $('#modal_subjectSelect').modal('show');
        $("#subject_name").text(subject_name[1]);
        
  }
}, false);



// playerSelect.js 選取角色

const mainpScale = 0.5;
const otherpScle = 0.3;

// 縮小放大
var shrinkScale = mainpScale, enlargeScale = otherpScle;

var now_select = 0;

const playerArr = new Array(6);
// 判斷按鍵是否按下，並判斷角色是否目前處於移動狀態
var keydwon = false;
var playerMove = false;

var timeCount = 1;



const playerSelect = {
    key: 'playerSelect',
    preload: function(){
        this.load.image('player1', 'image/Character/player1.png');
        this.load.image('player2', 'image/Character/player2.png');
        this.load.image('player3', 'image/Character/player3.png');
        this.load.image('player4', 'image/Character/player4.png');
        this.load.image('player5', 'image/Character/player5.png');
        this.load.image('player6', 'image/Character/player6.png');
    },
    create: function(){

        // var timer = scene.time.create(false);
        // timer.repeat(500, 10, ()=>{
        //     shrinkScale = shrinkScale - 0.05;
        //     enlargeScale = enlargeScale + 0.05;
        //     playerArr[now_select].setScale(enlargeScale);
        //     playerArr[now_select - 1].setScale(shrinkScale);
        // }, this);


        player1 = this.physics.add.sprite(cw/2, ch/2 - ch/4, 'player1');
        player1.setScale(mainpScale);
        playerArr[0] = player1;

        player2 = this.physics.add.sprite(cw/2 + cw/4, ch/2 - ch/4, 'player2');
        // player2.setScale(otherpScle);
        playerArr[1] = player2;
        playerArr[1].setScale(otherpScle);


        player3 = this.physics.add.sprite(cw/2 + 2 * cw/4, ch/2 - ch/4, 'player3');
        player3.setScale(otherpScle);
        playerArr[2] = player3;

        player4 = this.physics.add.sprite(cw/2 + 3 * cw/4, ch/2 - ch/4, 'player4');
        player4.setScale(otherpScle);
        playerArr[3] = player4;

        player5 = this.physics.add.sprite(cw/2 + 4 * cw/4, ch/2 - ch/4, 'player5');
        player5.setScale(otherpScle);
        playerArr[4] = player5;

        player6 = this.physics.add.sprite(cw/2 + 5 * cw/4, ch/2 - ch/4, 'player6');
        player6.setScale(otherpScle);
        playerArr[5] = player6;


    },
    update: function(){
        let keyboard = this.input.keyboard.createCursorKeys();
        
        if(keyboard.left.isDown)
        {
            if(!keydwon)
            {
                console.log("右邊");
                shrinkScale = mainpScale, enlargeScale = otherpScle;
                keydwon = true;
                now_select = now_select + 1;
                timer = this.time.addEvent({
                    delay: 100,           
                    callback: () => {
                        shrinkScale = shrinkScale - 0.04;
                        enlargeScale = enlargeScale + 0.04;
                        playerArr[now_select].setScale(enlargeScale);
                        playerArr[now_select - 1].setScale(shrinkScale);
                    },
                    loop: false,
                    repeat: 4
                });
                for(var i = 0 ; i < 6 ; i++)
                {
                    playerArr[i].setVelocityX(-875);
                }
            }
            
        }
        

        if(keyboard.right.isDown)
        {
            if(!keydwon)
            {
                console.log("左邊");
                shrinkScale = mainpScale, enlargeScale = otherpScle;
                keydwon = true;
                now_select = now_select - 1;
                timer = this.time.addEvent({
                    delay: 100,           
                    callback: () => {
                        shrinkScale = shrinkScale - 0.04;
                        enlargeScale = enlargeScale + 0.04;
                        playerArr[now_select].setScale(enlargeScale);
                        playerArr[now_select + 1].setScale(shrinkScale);
                    },
                    loop: false,
                    repeat: 4
                });
                for(var i = 0 ; i < 6 ; i++)
                {
                    playerArr[i].setVelocityX(875);
                }
            }
            
        }

        if(shrinkScale.toFixed(1) == otherpScle)
        {
            console.log("相同");
            keydwon = false;
            for(var i = 0 ; i < 6 ; i++)
            {
                playerArr[i].setVelocityX(0);
            }
            
        }

       
        // if(shrinkScale.toFixed(1) == otherpScle)
        // {
        //     console.log("相同");
        //     keydwon = false;
        //     for(var i = 0 ; i < 6 ; i++)
        //     {
        //         playerArr[i].setVelocityX(0);
        //     }
        // }
      
    },
}

// gameSelect.js 選擇課業學科或課外活動
const gameSelect = {
    key: 'gameSelect',
    preload: function(){
        this.load.image('bg1', 'image/Background/jungle-clipart-background-6.jpg');
        this.load.image('subject', 'image/Background/zoo.png');
        this.load.image('activity', 'image/Background/sloth.png');
    },
    create: function(){
        bg1 = this.add.sprite(cw/2, ch/2, 'bg1');
        bg1.setScale(bg1Scale);
        // bg1.setTint(0x2d2d2d);

        mask = this.add.graphics(0, 0);
        mask.fillStyle(0xffffff);

        // 課業學科按鈕
        subject = this.add.sprite(cw/2 - cw/4, ch/2, 'subject');
        subject.setScale(classScale);
        // 開啟互動
        subject.setInteractive({ useHandCursor: true });
        subject.on('pointerover', function(){
            subject.setScale(0.55);
            subject.setTint(0x5d5d2d);
        });
        subject.on('pointerout', function(){

            subject.setScale(classScale);
            subject.setTint(0xffffff);
        });
        subject.on('pointerdown', () => this.scene.start('gameSubject'));

        // 課外活動按鈕
        activity = this.add.sprite(cw/2 + cw/4, ch/2, 'activity');
        activity.setScale(classScale);

        activity.setInteractive({ useHandCursor: true });
        activity.on('pointerover', () => activity.setScale(0.55));
        activity.on('pointerout', () => activity.setScale(classScale));
        activity.on('pointerdown', () => this.scene.start('gameActivity'));

        // 嘗試點擊後隱藏 phaser canvas
        // activity.on('pointerdown', function(){
        //     var app = document.getElementById('app');
        //     app.style.display = 'none';
        // });
            
    },
    update: function(){
    
    }
}


// gameActivity.js
const gameActivity = {
    key: 'gameActivity',
    preload: function(){

    },
    create: function(){

    },
    update: function(){
        
    }
}


// gameSubject.js
const gameSubject = {
    key: 'gameSubject',
    preload: function(){
      
        // 預先載入需要資源
        
        this.load.image('gamebg', 'image/Background/gamebg.jpg');
        this.load.image('bg2', 'image/Background/jungle-background-clipart.jpg');
        
        this.load.image('player', 'image/Character/afro-hair.png');
        this.load.image('beans', 'image/ClassGroup/dna.png');
        
        // 8 個課業學科
        this.load.image('Langugage', 'image/18College/13.png');
        this.load.image('Science', 'image/18College/11.png');
        this.load.image('Integrative', 'image/18College/7.png');
        this.load.image('Math', 'image/18College/3.png');
        this.load.image('Technology', 'image/18College/8.png');
        this.load.image('Health', 'image/18College/4.png');
        this.load.image('Social', 'image/18College/12.png');
        this.load.image('Art', 'image/18College/9.png');

    },
    create: function(){

        

        
        this.bg2 = this.add.sprite(cw/2,ch/2, 'bg2');
        gamebg = this.physics.add.sprite(cw/2, ch/2, 'gamebg');
        gamebg.setScale(0.7);
        gamebg.setCollideWorldBounds(true);
        

        //this.player = this.add.sprite(150, 150, 'player');
        player = this.physics.add.sprite(150, 150, 'player');
        
        // 開啟角色邊界限制，並自訂矩形邊界（以矩形左上角頂點為主）
        player.setCollideWorldBounds(true);
        player.body.setBoundsRectangle(new Phaser.Geom.Rectangle(gamebg.x - (gamebg.width * 0.7 /2), gamebg.y - (gamebg.height * 0.7 / 2), gamebg.width * 0.7, gamebg.height * 0.7 ));
        
        //this.player.setBounce(1); //設定彈跳值

        player.setScale(playerScale);
      
        beansGroup = this.add.group();
        beansGroup.enableBody = true;
        
        
//         grouptest = this.physics.add.sprite(subject_xy[0].x, subject_xy[0].y, 'beans');
        
        console.log(gamebg.width * gamebgScale, gamebg.height * gamebgScale, cw/2 - gamebg.width * gamebgScale / 2, 0 - ch/2 - gamebg.height * gamebgScale / 2);

        beansGroup = this.physics.add.group();
        for(var i = 0 ; i < subjectN ; i++)
        {
            let tempX = getRandom(gamebg.width * gamebgScale, cw/2 - gamebg.width * gamebgScale / 2 - 20);
            let tempY = getRandom(gamebg.height * gamebgScale, ch/2 - gamebg.height * gamebgScale / 2 + 20);

            subject_xy[i].x = tempX;
            subject_xy[i].y = tempY;

            
            console.log(subject_xy[i].x, subject_xy[i].y);
            beansGroup.create(subject_xy[i].x, subject_xy[i].y, subject_nameen[i]); 

            const config = {
                key: subject_nameen[i],
                setXY: {x: subject_xy[i].x, y: subject_xy.y},
            }
            beansGroup.create(config);
            
        }
   
        
        beansGroupChild = beansGroup.getChildren();
        for(var i = 0 ; i < beansGroupChild.length ; i++)
        {
            beansGroupChild[i].setScale(beansScale);           
        }

        
        
        beans = this.physics.add.sprite(subject_xy[0].x, subject_xy[0].y, 'beans');
        beans.setCollideWorldBounds(true);
        beans.setScale(beansScale);
        
        // this.physics.add.overlap(player, beans, collectStar, null, this);
        this.physics.add.overlap(player, beansGroupChild, collectStar, null, this);

        
        
        function collectStar (player, beans)
        {
            // 如果 player 座標與 beans 座標相差小於 10，且使用者按下空白鍵執行吃的動作，且此時沒有選擇的科目
            if(abs(player.x, beans.x) < 10 && abs(player.y, beans.y) < 10 && eat && subject_select == -1)
            {
                console.log("吃掉");
                // 開啟 modal：你確定選擇_____(科目)?
                console.log(beans.texture.key);
                console.log(subject_nameen.indexOf(beans.texture.key));
                subject_select = subject_nameen.indexOf(beans.texture.key);
                modalOpen(subject_nameen.indexOf(beans.texture.key));
                // 該科目豆消失 -> 等待改進，要 modal 按了確定才能消失
                beansTmp = beans;
                beans.setVisible(false);
            }
            else if(abs(player.x, beans.x) < 10 && abs(player.y, beans.y) < 10 && donteat && subject_select != -1)
            {
                console.log("吐出來");
                // beans.disableBody(false, false);
                subject_select = -1;
                beans.setVisible(true);
            }
        }
        //this.add.text(cw/2,ch/2, subject_name[2], {color: "#123455", fontSize:'60px'});
    },
    update: function(){
        
        // 偵測按鍵事件
        let keyboard = this.input.keyboard.createCursorKeys();
        
        // player 上下左右移動
        if(keyboard.right.isDown)
            player.setVelocityX(160);
        else if(keyboard.left.isDown)
            player.setVelocityX(-160);
        else
            player.setVelocityX(0);

        if(keyboard.up.isDown)
            player.setVelocityY(-160);
        else if(keyboard.down.isDown)
            player.setVelocityY(160);
        else
            player.setVelocityY(0);

        // player 吃科目豆
        if(keyboard.space.isDown)
        {
            
            if(!eat)
            {
                // 已經按過一次了又再按一次，代表他確定要選擇
                if(spaceCounter == 1 && subject_select != -1)
                {
                    sureModalClose();
                    spaceCounter = spaceCounter + 1;
                }
                console.log("空白鍵");
                eat = true;
                spaceCounter = spaceCounter + 1;
            }

        }
        else
            eat = false;
        
        if(keyboard.shift.isDown)
        {
            // 決定不吃該科目豆，因此將 spaceCounter 歸零，等待下次再吃
            if(!donteat)
            {
                if(subject_select != -1)
                {
                    cancelModalClose();
                    console.log("shift");
                    spaceCounter = 0;
                }
                donteat = true;
            }
        }
        else
            donteat = false
    }
}




// index.js

// $( window ).resize(function() {
//   $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
// });

const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            // debug: true,
        },
    },
    scene: [
        playerSelect,
        gameSelect,
        gameSubject,
        gameActivity
    ]
}

const game = new Phaser.Game(config);

