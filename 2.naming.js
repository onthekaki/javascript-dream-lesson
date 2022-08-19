// cmd / 주석을 달면 됨
/**
 * 여러줄 주석은 이런식으로
 * 다음 줄로 자동으로 넘어감
 */

/** 변수 규칙!
 * 라틴 문자(0-9, a-z, A-Z), _(underscore)
 * 대소문자를 구분함
 * 추천 : camelCase ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_ $ 두 가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미 있게, 구체
 */

let apple;
let redApple;

// 나쁜 예제 💩
let num = 20;

// 좋은 예제 ✨
let myAge = 20;

// 나쁜 예제 💩
let audio1;
let audio2;

// 좋은 예제 ✨
let backgroundAudio;
let windAudio;

// 꿀팁 🍯
// 이렇게 하면 나중에 'audio'만 쳐도 관련된 변수명들이 자동으로 뜸
let audioBackground;
let audioWind;