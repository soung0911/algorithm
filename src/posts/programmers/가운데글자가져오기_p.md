# 문제 설명
```
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
```

# 제한사항
```
s는 길이가 1 이상, 100이하인 스트링입니다.
```

# 입출력 예

| s     | return   | 
|-------|----------|
|"abcde"| "c"      |
|"qwer" |	"we"     |


---

```javascript
function solution(s) {
    let answer = '';
    
    let len = s.length;
    let val = Math.floor(len/2);
    
    if(len % 2) {
        answer = s.charAt(val)
    } else {
        answer = s.substring(val-1, val+1);
    }
    
    return answer;
}
```