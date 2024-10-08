let images = [
    "image/eeem/eeem-01.png",
    "image/eeem/eeem-02.png",
    "image/eeem/eeem-03.png",
    "image/eeem/eeem-04.png",
    "image/eeem/eeem-05.png",
    "image/eeem/eeem-06.png",
    "image/eeem/eeem-07.png",
    "image/eeem/eeem-08.png",
    "image/eeem/eeem-09.png",
    "image/eeem/eeem-10.png",
    "image/eeem/eeem-11.png",
    "image/eeem/eeem-12.png",
    "image/eeem/eeem-13.png",
    "image/eeem/eeem-14.png",
    "image/eeem/eeem-15.png",
    "image/eeem/eeem-16.png",
    "image/eeem/eeem-17.png",
    "image/eeem/eeem-18.png",
    "image/eeem/eeem-19.png",
    "image/eeem/eeem-20.png",
    "image/eeem/eeem-21.png",
    "image/eeem/eeem-22.png",
    "image/eeem/eeem-23.png",
    "image/eeem/eeem-24.png",
    "image/eeem/eeem-25.png",
    "image/eeem/eeem-26.png",
];

function ImageSlider (parent, images) {
    let currentIndex = 0;
    //선택자
    let Slider = {

        parent : parent,
        images : parent.querySelector(".slider__img"),
        thumnail : parent.querySelector(".slider__thumnail"),
        PreviousBtn : parent.querySelector(".slider__btn .previous"),
        NextBtn : parent.querySelector(".slider__btn .next")
    }

    //이미지를 화면에 출력
    Slider.images.innerHTML = images.map((image, index)=>{
        return `<img src="${image}" alt="이미지${index}">`
    }).join("");

    //큰 활성화 시 효과
    let imageNode = Slider.images.querySelectorAll("img");
    imageNode[currentIndex].classList.add("active");
    
    //썸네일에 이미지 출력
    Slider.thumnail.innerHTML = Slider.images.innerHTML;

     //썸네일에 active 활성화
     let thumnailNode = Slider.thumnail.querySelectorAll("img");
     thumnailNode[currentIndex].classList.add("active");


    
    //썸네일 클릭 시 이동
    // for(let i=0; i<thumnailNode.length; i++){
    //     thumnailNode[i].addEventListener("click", function(){
    //         Slider.thumnail.querySelector("img.active").classList.remove("active");
    //         thumnailNode[i].classList.add("active");

    //         imageNode[currentIndex].classList.remove("active");
    //         currentIndex = i;
    //         imageNode[currentIndex].classList.add("active")
    //     });
    // }

    thumnailNode.forEach((el, i) => {
        el.addEventListener("click", function(){
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        el.classList.add("active");

        imageNode[currentIndex].classList.remove("active");
        currentIndex = i;
        imageNode[currentIndex].classList.add("active")
        });
    });

    //왼쪽 버튼 클릭
    Slider.PreviousBtn.addEventListener("click", function(){
       imageNode[currentIndex].classList.remove("active");
       currentIndex--;

       if(currentIndex < 0) currentIndex = images.length - 1;
       imageNode[currentIndex].classList.add("active");

        //활성화 되는 이미지와 같은 썸네일에 active 활성화
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        thumnailNode[currentIndex].classList.add("active");

    });

    //오른쪽 버튼 클릭
    Slider.NextBtn.addEventListener("click", function(){
        imageNode[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;
        imageNode[currentIndex].classList.add("active");

        //활성화 되는 이미지와 같은 썸네일에 active 활성화
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        thumnailNode[currentIndex].classList.add("active");
    });
}
ImageSlider(document.querySelector(".slider__wrap"),images);