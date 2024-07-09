document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    const videos = document.querySelectorAll('.video-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    function showSlide(index) {
        if (index >= videos.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = videos.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        videoContainer.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);
});
// 1번코스 나타났다 사라지기 시작
document.addEventListener('scroll', function() {
    const element = document.querySelector('.overlay-text1');
    const position = element.getBoundingClientRect();

    // 윈도우의 높이와 요소의 위치를 비교하여 요소가 보일 때 클래스 추가
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
});
// 1번코스 나타났다 사라지기 종료

// 2번코스 나타났다 사라지기 시작
document.addEventListener('scroll', function() {
    const element = document.querySelector('.overlay-text2');
    const position = element.getBoundingClientRect();

    // 윈도우의 높이와 요소의 위치를 비교하여 요소가 보일 때 클래스 추가
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
});
// 2번코스 나타났다 사라지기 종료
// 2번코스 나타났다 사라지기 시작
document.addEventListener('scroll', function() {
    const element = document.querySelector('.overlay-text3');
    const position = element.getBoundingClientRect();

    // 윈도우의 높이와 요소의 위치를 비교하여 요소가 보일 때 클래스 추가
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
});
// 2번코스 나타났다 사라지기 종료