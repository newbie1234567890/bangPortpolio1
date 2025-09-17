/* 01. 튕김 방지 */
$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
})

/* 02. 스크롤시 on클래스 부여 */
$(window).on('scroll resize',function(){
    let scrollTop = $(document).scrollTop()
    fixTab()
	fixBtn()
    fix()

    function fixTab(){
        if(scrollTop>0){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(0)').addClass('on');
        }
        if(scrollTop>800){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(1)').addClass('on');
        }
        if(scrollTop>3500){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(2)').addClass('on');
        }
        if(scrollTop>4500){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(3)').addClass('on');
        }
        if(scrollTop>6000){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(4)').addClass('on');
        }
        if(scrollTop>9000){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(5)').addClass('on');
            $('footer .footerWrap .conWrap').addClass('on');
        }
        if(scrollTop>13000){
            $('.main .tab li').removeClass('on');
            $('.main .tab li:eq(6)').addClass('on');
            $('footer .footerWrap .conWrap').addClass('on');
        }
    }

	function fixBtn(){
		if(scrollTop>6000){
            $('.main .topBtn a').removeClass('on');
            $('.main .topBtn a').addClass('on');
        }
		else{
            $('.main .topBtn a').removeClass('on');
		}
	}

    function fix(){
        if(scrollTop>1000){ $('.aboutMe .title').addClass('on')}
        else{$('.aboutMe .title').removeClass('on')}
        if(scrollTop>3400){$('.aboutMe .title').removeClass('on')}
    }
})

/* 03. skill */
$(function(){
    $(".skill ul li").on("mouseenter focus", function(){
        $(".skill ul li").removeClass("on");
        $(this).addClass("on")
    });
})

/* 04. header */
let lastScroll = 0;

$(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();

    if (currentScroll > lastScroll) {
        $("header").addClass("on"); // 스크롤 내릴 때
        $("#headerWrap").removeClass("active"); // ID 선택
    } else {
        $("header").removeClass("on"); // 스크롤 올릴 때
    }

    lastScroll = currentScroll;
});

/* 스크롤라 */
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false,
    })
});

/* 스플릿팅 */
$(function(){
    Splitting();
});


/* 사진 올리기 */
$(function(){
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.clonecoding ul li a').forEach(function(a){
    gsap.timeline({
        scrollTrigger:{
            trigger: ".clonecoding",
            start:'20% 60%',
            toggleClass:{targets: a, className: 'active'},
            //markers:true,
            scrub:1,
        }
    })
    })
});


/* 비 내리기 */
        const canvas = document.getElementById('rainCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight*3;

        function getRandomColor() {
            const r = 0
            const g = 178
            const b = 255
            return `rgba(${r}, ${g}, ${b}, 1)`;
        }

        class Drop {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 0;
                this.alpha = 1;
                this.color = getRandomColor();
                this.lineWidth = 2 + Math.random() * 5; // Random line width between 2 and 7
            }

            update() {
                this.radius += 1;
                this.alpha -= 0.004; // Slow down the fading to make ripples expand further
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                ctx.strokeStyle = this.color.replace('1)', `${this.alpha})`);
                ctx.lineWidth = this.lineWidth;

                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;  // 내부 흰색, 투명도는 alpha에 맞춤
                ctx.fill();

                ctx.stroke();
            }
        }

        let drops = [];

        function addDrop() {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            drops.push(new Drop(x, y));
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drops.forEach((drop, index) => {
                drop.update();
                drop.draw();
                if (drop.alpha <= 0) {
                    drops.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        }

        setInterval(addDrop, 1100);
        animate();

// 버튼
const menu = document.getElementById('menu');
const headerWrap = document.getElementById('headerWrap');

menu.addEventListener('click', function() {
  headerWrap.classList.toggle('active');
});

// 변경할 영상과 글자 데이터
const hobbiesData = [
  {
    video: "./img/video1.mp4",
    title: "Movies",
    sub: 'My creative is from <span style="color: #00B2FF;">movies</span>. Movie makes me relax and <br> They inspire me to understand various cultures and perspectives'
  },
  {
    video: "./img/video2.mp4",
    title: "Games",
    sub: 'I love <span style="color: #00B2FF;">Games</span>. Exploring new place and <br> meeting people from all around the world inspires my creativity.'
  },
  {
    video: "./img/video3.mp4",
    title: "Books",
    sub: 'Books gives me <span style="color: #00B2FF;">energy</span> and helps me <br> focus while working on creative projects.'
  }
];

let currentIndex = 0;

const videoEl = document.querySelector(".hobbiesWrap video");
const titleEl = document.querySelector(".hobbiesWrap .title h2");
const subTitleEl = document.querySelector(".hobbiesWrap .title .subTitle");

// 자동 변경 함수
function changeHobbiesContent() {
  currentIndex = (currentIndex + 1) % hobbiesData.length;

  // 영상 교체
  videoEl.src = hobbiesData[currentIndex].video;
  videoEl.load();

  // 영상 준비가 되면 재생
    videoEl.addEventListener("canplay", function onCanPlay() {
        videoEl.play().catch(err => console.log("재생 에러:", err));
    }, { once: true });

  // 글자 교체
  titleEl.textContent = hobbiesData[currentIndex].title;
  subTitleEl.innerHTML = hobbiesData[currentIndex].sub;
}

// 5초마다 변경
setInterval(changeHobbiesContent, 10000);




const skills = [
  { img: "./img/skill11.png", text: "TypeScript" },
  { img: "./img/skill12.png", text: "Vite" },
  { img: "./img/skill13.png", text: "MongoDB" },
  { img: "./img/skill14.png", text: "PWA" },
  { img: "./img/skill15.png", text: "Ngrok" },
  { img: "./img/skill16.png", text: "GPT" },
  { img: "./img/skill17.png", text: "Vercel" },
  { img: "./img/skill18.png", text: "jQuery" },
  { img: "./img/skill19.png", text: "NPM" },
  { img: "./img/skill20.png", text: "GSAP" },
];

const listItems = document.querySelectorAll("#skillList li");

// 초기 상태 저장
const originalData = Array.from(listItems).map(li => ({
  img: li.querySelector("img").src,
  text: li.querySelector("p").textContent
}));

let currentIndex2 = 0;   // li 순환 인덱스
let skillIndex = 0;      // skills 배열 순환 인덱스
let direction = 1;       // 1이면 skills → 끝까지, -1이면 originalData → 처음까지

function changeSkill() {
  const li = listItems[currentIndex2];

  // 현재 방향에 따라 적용할 데이터 결정
  const nextData = direction === 1 ? skills[skillIndex] : originalData[currentIndex2];

  // fade out
  li.classList.add("fade-out");

  setTimeout(() => {
    li.querySelector("img").src = nextData.img;
    li.querySelector("p").textContent = nextData.text;

    li.classList.remove("fade-out");
    li.classList.add("fade-in");

    setTimeout(() => {
      li.classList.remove("fade-in");
    }, 800);
  }, 800);

  // 인덱스 업데이트
  currentIndex2++;

  if (direction === 1) {
    skillIndex++;
    if (skillIndex >= skills.length) {
      // skills 끝까지 갔으면 원래 데이터로 돌아가는 모드로 전환
      direction = -1;
      currentIndex2 = 0; // 다시 처음 li부터 원래대로 돌림
    }
  } else {
    if (currentIndex2 >= listItems.length) {
      // 원래 데이터 복구 완료 → 다시 skills 순환 시작
      direction = 1;
      currentIndex2 = 0;
      skillIndex = 0;
    }
  }
}

// 2초마다 실행
setInterval(changeSkill, 2000);




