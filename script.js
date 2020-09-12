'use strict';
//質問に対する答え
let ans = [
    'こんにちは！',
    'お前の名前は？',
    '調子どう？',
];

//ロボットの返答の合計
//これを利用して。相手の返答を配列から指定
let chatCount = 0;

const chatBtn = document.getElementById('chat-button');
const inputText = document.getElementById('chat-input');

//画面に出力
//val is message content,person is speaking person
function output(val,perosn){
    const field = document.getElementById('field');
    field.scroll(0,field.scrollHeight - field.clientHeight);

    const ul = document.getElementById('chat-ul');
    const li = document.createElement('li')
    //このdivにテキストを指定
    const div = document.createElement('div');
    div.textContent = val;

    if (person === 'me'){
        //自分の場合
        div.classList.add('chat-right');
        li.classList.add('right');
        ul.appendChild(li);
        li.appendChild(div);
    } else if (person === 'character'){
        chatBtn.disabled = true;
        setTimeout( ()=> {
            chatBtn.disabled = false;
            li.classList.add('left');
            div.classList.add('chat-left');
            ul.appendChild(li);
            li.appendChild(div);
            //ロボットのトークの合計数に+1
            chatCount++
        },2000)
    }
}

//送信ボタンの処理
function btnFunc() {
    if (!inputText.value) return false;
    //自分のテキスト送信
    output(inputText.value,me);

    setTimeout( ()=> {
        //入力を空欄に
        //value獲得返信に利用
        inputText.value = '';
    },1)
    switch(chatCount){
        case 2:
            output(`こんにちわ${inputText.value}!`,'character');
            setTimeout( ()=> {
                output(ans[2],'character');
            },2000);
            break;
            //
    }
}

output(ans[0],'character');

setTimeout( ()=> {
    output(chat[1],'character');
},2000);
