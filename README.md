## progress bar

- 프로그레스바 구현
- 스크롤을 내리면 상단 바가 스크롤한 길이만큼 늘어남
### 요소 사이즈와 스크롤

https://ko.javascript.info/size-and-scroll

![요소 사이즈와 스크롤](https://media.vlpt.us/images/wiostz98kr/post/dec62e7b-1432-4db2-8154-8539fb0b3689/image.png)

- 자바스크립트로 요소 사이즈나 스크롤 높이 등을 알 수 있음
- 주황색 보더를 기준
  - 보더 바깥쪽: offsetTop, offsetLeft
  - 보더 사이: clientTop, clinetLeft
  - 콘텐츠: clientWidth, clientHeight
  - 보더 포함한 콘텐츠: offsetWidth, offsetHeight
  - 콘텐츠의 전체 길이: scrollHeight
  - 스크롤바의 수직 위치: scrollTop

### throttle & debounce

https://css-tricks.com/debouncing-throttling-explained-examples/

- 시간이 지남에 따라 함수가 실행되도록 허용하는 횟수를 제어하는 방법

#### debounce

- debounce: 특정 시간이 지난 후 하나의 이벤트만 발생시키는 방법
- 예시) 버튼 중복 클릭 방지
- 버튼을 막 눌러도 일정시간 후에 클릭된 버튼이 실행된다. 

![debounce](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4rclV%2Fbtq0ApFD65V%2F34Jw0Gdel1hvvHohbxG2tk%2Fimg.png)

#### throttle

- throttle: 일정한 주기마다 이벤트를 발생시키는 방법
- 예시) 스크롤 이벤트
- 스크롤 될 때마다 width값을 계산해야하는데, 1초 간격으로 프로그레스바를 실행시키게 하면 프로그레스바는 1초마다 변하게 됨. 
- 연속해서 발생되지 않게 특정 주기마다 이벤트 발생되게 하는 방법임 
- FE는 화면과 상호작용 
- 사용자가 맘만 먹으면 이벤트 달아놨을 때 중복 이벤트 발생시킬 수 있고 이건 컴퓨터 부하걸림
- 사용자가 계속 누르든 말든 중복발생되지 않게 특정 주기마다 이벤트 발생시키는것. 
- 이벤트 발생됐는지 확인하고 발생됐으면 지정한 시간만큼 이벤트 발생 멈추고 
- 다시 주기 돌아오면 이벤트 발생시킴. 



![throttle](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkUExC%2Fbtq0zZf9s1c%2FQ559Kyka5nQc0dZL8OL1W1%2Fimg.png)
