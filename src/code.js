const btn = document.querySelectorAll('.box>span')
  const message = document.querySelector('h1')
  const h2 = document.querySelector('h2')
  const box = document.querySelector('.box')
  const gradient = document.querySelector('.gradient')
  const goli = document.querySelector('.goli>span')
  const _html = document.documentElement
  const audio =document.querySelector('audio')
  const audio1 =document.getElementById('music')
  const audioOrg=document.getElementById('audioOrg')
  let flag = 1
  
  btn.forEach(function(val){
    val.addEventListener('click' , ()=>{
      if(val.getAttribute('data-status')=='off'){
        audio.play()
        if(flag%2){
          val.innerText='X'
          val.style.transform='rotateX(360deg)'
          setTimeout( ai , 500)
          
          
        }else{
          val.innerText='O'
           val.style.transform='rotateX(360deg)'
        }
        flag++
      }
      // change status
      val.setAttribute('data-status' , 'on')
      // change status
      // phaze2
      let arr = []
      switch(true){
        case (btn[0].innerText==btn[1].innerText) && (btn[0].innerText==btn[2].innerText) && (btn[2].innerHTML!=''):arr=[ 0 , 1 , 2]; break;
        case (btn[3].innerText==btn[4].innerText) && (btn[3].innerText==btn[5].innerText) && (btn[5].innerHTML!=''):arr=[ 3 , 4 , 5]; break;
        case (btn[6].innerText==btn[7].innerText) && (btn[6].innerText==btn[8].innerText) && (btn[8].innerHTML!=''):arr=[ 6 , 7 , 8]; break;
        case (btn[0].innerText==btn[3].innerText) && (btn[0].innerText==btn[6].innerText) && (btn[6].innerHTML!=''):arr=[ 0 , 3 , 6]; break;
        case (btn[1].innerText==btn[4].innerText) && (btn[1].innerText==btn[7].innerText) && (btn[7].innerHTML!=''):arr=[ 1 , 4 , 7]; break;
        case (btn[2].innerText==btn[5].innerText) && (btn[2].innerText==btn[8].innerText) && (btn[8].innerHTML!=''):arr=[ 2 , 5 , 8]; break;
        case (btn[0].innerText==btn[4].innerText) && (btn[0].innerText==btn[8].innerText) && (btn[8].innerHTML!=''):arr=[ 0 , 4 , 8]; break;
        case (btn[2].innerText==btn[4].innerText) && (btn[2].innerText==btn[6].innerText) && (btn[6].innerHTML!=''):arr=[ 2 , 4 , 6]; break;
      }
      // phaze2
      // winner
      arr.forEach(function(item){
        btn[item].style.background='green'
      })
    
      // winner
      if(arr.length==3){
        box.setAttribute('inert' , 'inert')
        message.innerHTML=`You are Winner <img src="img/happy.gif" alt="" class="w-[50px] sm:w-[30px]  object-cover lg:w-[60px]">` 
        gradient.classList.add('neon')
        
        
        audio1.play()
        clearInterval(timer)
        message.style.color='white'
      }else if(arr.length===0 &&[...btn].every(d => d.innerText !=='')){
       message.innerHTML=`You are lozer <img src="img/output-onlinegiftools.gif" alt="" class="w-[50px] sm:w-[30px]  object-cover lg:w-[60px]">`
        navigator.vibrate([200 , 100 , 200])
        audioOrg.play()
        clearInterval(timer)
        message.style.color='gray'
        message.pointerEvents='none'
      }
    })
  })
  // timerrrrrr
  let timer ; 
  let timeleft = 10 ;
  function startTimer(){
    timeleft=10;
    h2.innerText=`${timeleft}`
    h2.style.color='black'
    timer=setInterval(() => {
      timeleft--
      h2.innerText=`${timeleft}`
      if(timeleft<=5){
        h2.style.color='red'
      }
      if(timeleft<0){
        alert('Time is Up')
        clearInterval(timer)
        startTimer()
      }
    }, 1000);
  }
  startTimer()
  // /////////////////////////////////////////////play agin
  function _again(){
    if(confirm('Do You Want To Continue Playing?')){
      location.reload()
    }
  }
  
  // ..................................ai
   function ai(){
        let empty = [...btn].filter(d => d.innerText==='')
        if(empty.length>0){
            let random = empty[Math.floor(Math.random()*empty.length)]
            random.click()
        }
    }
    // dark mooooooooooooooooooooooooood
    // === Dark Mode ===

const body = document.querySelector('body')

if (localStorage.getItem('theme') === 'dark') {
   _html.classList.add('dark')
    body.style.background = 'linear-gradient(to bottom right, #1f1f1f, #2c2c2c, #000000)';
   
    goli.style.left = '30px'
    
}

 
function toggleState() {
 const isDark = _html.classList.toggle('dark')

  if (isDark) {
    goli.style.left = '30px'
    body.style.background = 'linear-gradient(to bottom right, #1f1f1f, #2c2c2c, #000000)';
     goli.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white p-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`
    localStorage.setItem('theme', 'dark')
  } else {
    goli.style.left = '-2px'
      body.style.background = 'linear-gradient(to bottom right, #7e22ce, #2563eb, #ec4899)';
    goli.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white p-0.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>`
      
    localStorage.setItem('theme', 'light')
  }
}
