
document.addEventListener('DOMContentLoaded', function(){
  var mainSwiper = new Swiper(".mainSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter:true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiperIconMenu = new Swiper(".swiper-icon-menu", {
      spaceBetween: 30,
      slidesPerView: 2,
      freeMode: {
          enabled: true,
          sticky: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        }
      }
  }); 

  var swiperEventos = new Swiper(".swiper-eventos", {
      spaceBetween: 30,
      slidesPerView: 1,
      freeMode: {
          enabled: true,
          sticky: true,
      },            
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      breakpoints: {
        567: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
  });

  var swiperBlog = new Swiper(".swiper-blog", {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
          prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
          },
          next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
          },
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: false,
      },
  });

  swiperBlog.on('slideChange', function () {
      let active = this.activeIndex;
      let slide = this.slides[active];
      let video = slide.querySelector('video');
      let paused = video.paused;
      console.log(paused);
      paused ? video.play() : video.pause();
      let dir = this.swipeDirection;
      let prevSlide = dir === 'next' ? this.slides[active - 1] : this.slides[active + 1];
      let prevVideo = prevSlide.querySelector('video');
      prevVideo.pause();
  });

  var logosGovCo = new Swiper(".logos-gov-co", {
      spaceBetween: 30,
      slidesPerView: 1,
      freeMode: {
          enabled: true,
          sticky: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        567: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
      }
  });

  var swiper_1 = new Swiper(".slidesPerView-1", {
    slidesPerView: 1,           
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper_3 = new Swiper(".slidesPerView-3", {
    spaceBetween: 40,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true,
    },            
    pagination: false,
    breakpoints: {
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }
  });

  var swiper_4 = new Swiper(".slidesPerView-4", {
    spaceBetween: 40,
    slidesPerView: 1,
    freeMode: {
        enabled: true,
        sticky: true,
    },            
    pagination: false,
    breakpoints: {
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }
  });


  if(location.port == 3000 ){
    let bad = [0,1,8,9];
    let lnks = document.querySelectorAll("#OffCanvasMenu .nav-link");
    bad.forEach(el => {lnks[el].classList.add('disabled');});
    let page = location.pathname.slice(1);
    let link = document.querySelector(`a[href="${page}"]`);
    if(link != undefined)link.classList.add('active');
  }
});