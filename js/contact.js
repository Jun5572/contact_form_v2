let elm_checkbox_agree = document.getElementById('agree');

// プライバシーポリシーの窓スクロール　最下部検知
// ぷライバシーポリシーのスクロールする要素を取得
let elm_privacy_policy = document.getElementById('privacy-policy');

// スクロールする窓枠の高さを取得（padding含む）
let height = elm_privacy_policy.clientHeight;

//スクロールさせる要素の高さを取得 
let scroll_height = elm_privacy_policy.scrollHeight;

// スクロールさせる要素の最下部にきたときの窓枠のscrollTopの値と、窓枠要素の持つ高さを足した値が、
// スクロールさせる要素の高さと一致したとき＝最下部にスクロールしたとき。
// チェックボックスのdisable属性をfalseにする、それ以外はtrue。
elm_privacy_policy.onscroll = function(){
  if (scroll_height == (height + this.scrollTop) ){
    // elm_checkbox_agree.disabled = 'false';
  }
}