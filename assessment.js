'use strict';
const userNameInput = document.getElementById('user_name')
const assessmentButton = document.getElementById('assessment')
const resultDivided = document.getElementById('result-area')
const tweetDivided = document.getElementById('tweet-area')

/**
 * 指定したHTML要素の子要素をすべて削除する。
 * @param ｛HTMLElement } element HTMLの要素
 */

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }

    userNameInput.onkeydown = (event) => {
        if (event.key === 'Enter') {
            assessmentButton.onclick() 
        }
      };

    removeAllChildren(resultDivided);

    //診断結果の表示について

    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const result = assessment(userName);

    const paragraph = document.createElement('p')
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    //ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a')
    const hrefVlue =　'https://twitter.com/intent/tweet?button_hashtag=あなたのぬいぐるみ&ref_src=twsrc%5Etfw'

    anchor.setAttribute('href', hrefVlue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのぬいぐるみ';

    tweetDivided.appendChild(anchor);
    twttr.widgets.load();
}



const answers = [
'{userName}のぬいぐるみはミッフィーです。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のぬいぐるみはベイブです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のぬいぐるみはにょろにょろです。{userName}の情熱に周りの人は感化されます。',
'{userName}のぬいぐるみはムーミンの先祖です。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のぬいぐるみはウッドストックです。博識な{userName}を多くの人が頼りにしています。',
'{userName}のスヌーピーです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のぬいぐるみはりねずみのハリーです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のぬいぐるみはくまのふわふわです。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のぬいぐるみはスイカです。{userName}がする決断にいつも助けられる人がいます。,',
'{userName}のぬいぐるみはネッシーの赤ちゃんです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のもふもふです。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のぬいぐるみはふわふわくじらです。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のぬいぐるみはふわふわカニさんです。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のぬいぐるみはふわふわヒトデです。{userName}の配慮が多くの人を救っています。',
'{userName}のぬいぐるみはひつじのあかちゃんです。ありのままの{userName}自身がいいところなのです。',
'{userName}のぬいぐるみはどーもくんです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
'{userName}のぬいぐるみはレモンちゃんです。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す
 * @param {String} userName ユーザーの名前
 * @return {String}　診断結果
 */
function assessment(userName)  {
    let sumOfCharCode =0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode += userName.charCodeAt(i);
    }
     let  index = sumOfCharCode % answers.length;
     let result = answers[index];
     result = result.replace(/\{userName\}/g, userName);

    return result
}
