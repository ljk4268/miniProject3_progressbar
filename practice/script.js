;(function () {
  'use strict'

  let timerId
  const get = (target) => {
    return document.querySelector(target)
  }

  const throttle = (callback, time) => {
    if(timerId) return
    timerId = setTimeout(()=>{
      callback()
      timerId = undefined
    }, time)
  }

  const $progressBar = get('.progress-bar')

  const onScroll = ()=>{
    // 보여지는 영역을 제외한 나머지 스크롤 높이를 구할 수 있다. 
    // 화면 옆에 보여지는 스크롤 크기가 내가 보고있는 화면의 크기. 
    // 전체 스크롤에서 내가 보고있는 화면의 크기 (= 스크롤의 크기)를 빼주면 
    // 내가 움직일 수 있는 전체 스크롤의 길이가 나옴 
    // 그게 height
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    // 스크롤 위치에 따라서 퍼센트가 계산되어져야 하니까 스크롤 높이를 적어줌
    // 현재 나의 스크롤 위치 >> 내가 얼만큼 내려왔는지 
    const scrollTop = document.documentElement.scrollTop;

    // 현재 스크롤이 맨 위에서 맨 아래까지 몇퍼센트 내려갔는지 알아보기 위한 식 
    // 그러려면 현재 스크롤의 위치를 알아야하고 = scrollTop
    // 전체 스크롤의 길이를 알아야해. 
    // 현재 나의 스크롤 위치 / 나머지 스크롤 전체 길이 를 하면 전체길이 대비 지금 내가 있는 스크롤 위치가 퍼센트로 나옴. 
    const width = (scrollTop / height) * 100
    
    $progressBar.style.width = width + '%'

  }
  // 스크롤을 내릴때마다 이벤트 발생시키게 한건데 
  // 컴퓨터 과부하 막기 위해서 시간을 정해두고 이벤트 발생시킴. throttle(callback(), time)
  window.addEventListener('scroll',()=> throttle(onScroll(), 100))
})()
