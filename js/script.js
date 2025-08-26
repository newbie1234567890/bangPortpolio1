/* 01. 튕김 방지 */
$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
})

/* 02. 스크롤시 on클래스 부여 */
$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop()
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

/* 스크롤라 */+
$(function(){
    $('.animate').scrolla({
        moblie: true,
        once:true
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
            trigger: clonecoding,
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
  videoEl.play();

  // 글자 교체
  titleEl.textContent = hobbiesData[currentIndex].title;
  subTitleEl.innerHTML = hobbiesData[currentIndex].sub;
}

// 5초마다 변경
setInterval(changeHobbiesContent, 10000);


