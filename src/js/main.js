"use strict";

// Drupal.behaviors.afterAjax = {
// 	attach: function (context, settings){
// 		maskPhone(context);
// 		popups(context);
// 		// Этот html нужно засунуть при успешной отправке.
// 		// <div fid="block-form-order" id="webform--submitted" style="display:none">Сообщение успешно отправлено</div>
// 		let wfsbmt = document.getElementById("webform--submitted");
// 		if (wfsbmt) {
// 			if (wfsbmt.getAttribute("fid")){
// 				document.getElementById(wfsbmt.getAttribute("fid")).classList.remove("active");
// 				document.getElementById("win-thanks").classList.add("active");
// 			};
// 		};
// 	}
// };

document.addEventListener("DOMContentLoaded", function() {

	// Мобильное меню
	const menuSwitcher = document.querySelectorAll('[mob-menu]'),
		  mobileMenu = document.querySelector('.mobile-menu');

	menuSwitcher.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			if (mobileMenu.classList.contains('active')) {
				document.querySelector('body').style.overflow = 'auto';
				mobileMenu.classList.remove('active');
			} else {
				document.querySelector('body').style.overflow = 'hidden'
				mobileMenu.classList.add('active');
			}
		})
	})
	

	// Окно "Есть ли вам 18 лет"
	const permissionAccept = document.querySelector('[permission-yes]'),
		  permissionDenied = document.querySelector('[permission-no]'),
		  permissionBlock = document.querySelector('.permission'),
		  permissionBody = document.querySelector('.permission__body');

	if (permissionBody) {
		permissionAccept.addEventListener('click', () => {
			document.cookie = "cookieAge=true";
			permissionBlock.classList.remove('active');
		});
	
		permissionDenied.addEventListener('click', () => {
			permissionBody.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.0085 59.8377L0 29.9189L29.9915 0L60 29.9189L30.0085 59.8377ZM2.77417 29.9189L30.0085 57.0718L57.2427 29.9189L30.0085 2.76589L2.77417 29.9189Z" fill="white"/><path d="M45.3341 27.1193L46.8058 24.9775C43.5749 22.7681 36.4196 21.2502 29.4503 21.2502C29.4165 21.2502 29.3826 21.2502 29.3657 21.2502V23.8475C29.3996 23.8475 29.4165 23.8475 29.4503 23.8475C35.8444 23.8306 42.5261 25.2136 45.3341 27.1193Z" fill="white"/><path d="M28.1804 26.6813V16.4441C30.058 16.8826 31.5297 18.4173 31.9695 20.3568C32.866 20.4074 33.7626 20.4749 34.6591 20.5592C34.1855 16.7139 30.9715 13.7119 27.0978 13.7119H25.5923V29.3797H27.0978C30.1088 29.3797 32.7138 27.5751 33.9486 24.9779C32.9844 24.8767 32.0203 24.8261 31.0561 24.7924C30.3118 25.7368 29.3137 26.4283 28.1804 26.6813Z" fill="white"/><path d="M27.1334 26.6138H25.5771V34.4392C26.3891 34.5235 27.2687 34.5741 28.1822 34.6079V29.3122C31.3454 29.8856 33.9335 32.972 33.9335 36.463C33.9335 39.7012 31.5146 42.2141 28.1822 42.6526V39.094C27.2856 39.0772 26.4229 39.0266 25.5771 38.9422V45.3173H27.1334C32.4957 45.3173 36.5216 41.5057 36.5216 36.463C36.5385 31.1168 32.225 26.6138 27.1334 26.6138Z" fill="white"/><path d="M29.4497 35.5694C19.9938 35.5694 14.3609 32.5843 14.3609 29.7003C14.3609 27.3898 17.9978 25.0118 24.3242 24.1686V21.5544C16.7291 22.4989 11.7559 25.5852 11.7559 29.7003C11.7559 34.6756 19.0296 38.1667 29.4328 38.1667C30.5154 38.1667 31.6149 38.1329 32.6806 38.0486C32.8497 37.5426 32.9681 37.0198 32.9681 36.4464C32.9681 36.1091 32.9174 35.7718 32.8667 35.4345C31.7502 35.5188 30.5999 35.5694 29.4497 35.5694ZM46.8559 34.3889L45.3843 32.2638C43.7604 33.377 40.8001 34.3214 37.3493 34.9117C37.417 35.4176 37.4846 35.9405 37.4846 36.4633C37.4846 36.8174 37.4677 37.1716 37.417 37.5258C41.426 36.8512 44.8768 35.7549 46.8559 34.3889Z" fill="white"/></svg><h2 class="low">Sorry, to visit The Hidgate Ltd website, you must be of legal drinking and purchasing age.</h2>`;		
		});
	}
	
	// Функция выравнивания окна по высоте мобильного экрана
	// function fullMobScreen (obj) {
	// 	let mobileScreenHeight = Math.max(
	// 		document.documentElement.clientHeight,
	// 		window.innerHeight || 0
	// 	  )
	// 	if (mobileScreenHeight < 640) {
	// 		mobileScreenHeight = 640;
	// 	}
	// 	obj.style.height = mobileScreenHeight + 'px';		
	// }

	// const fullScreenBlocks = document.querySelector('[fullscrn]');

	// if (fullScreenBlocks) {
	// 	if (window.screen.width < 900) {
	// 		fullMobScreen(fullScreenBlocks);
	// 	} else {
	// 		fullScreenBlocks.style.height = '100vh';
	// 	}
	// 	window.addEventListener('resize', () => {
	// 		if (window.screen.width < 900) {
	// 			fullMobScreen(fullScreenBlocks);
	// 		} else {
	// 			fullScreenBlocks.style.height = '100vh';
	// 		}
	// 	})
	// }

	

	// Инициализация анимации 
	AOS.init();

	// Появление и скрытие хедера при скролле
	let lastScrollTop = 0;

	const header = document.querySelector('.header'),
		  up = document.querySelector('.up');

	up.addEventListener('click', () => {
		document.querySelector('body').scrollIntoView({block: "start", behavior: "smooth"});
	})

	function headerControl() {
		let scrollTop = document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop && window.scrollY > 0) {
			header.classList.add('hide');
			header.classList.remove('visible');
		} else if (scrollTop < 5 && scrollTop >= 0 ) {
			header.classList.remove('hide');
			header.classList.remove('visible');
		} else {
			header.classList.remove('hide');
			header.classList.add('visible');
		}

		if (scrollTop > 600) {
			up.classList.add('active');
		} else {
			up.classList.remove('active');
		}
		lastScrollTop = scrollTop;
	}

	headerControl();

	window.addEventListener('scroll', headerControl);


	// Слайдер коктейлей на основном экране

	const mainSlider = document.querySelector('.main-coctails__slider');

	if (mainSlider) {
		const mainSliderNext = document.querySelector('.main-coctails__next'),
			  mainSliderPrev = document.querySelector('.main-coctails__prev'),
			  mainSliderPag = document.querySelector('.main-coctails__pagination'),
			  mainSliderBlock = document.querySelector('.main-coctails__wrapper');
		const mainSliderSwiper = new Swiper(mainSlider, {
			spaceBetween: 20,
			slidesPerView: 'auto',
			speed: 800,
			breakpoints: {
				920: {
					slidesPerView: 3,
					spaceBetween: 60,
				},
				600: {
					spaceBetween: 40,
					slidesPerView: 2,
				}
			},
			pagination: {
				el: mainSliderPag,
				type: "progressbar",
			},
			navigation: {
				nextEl: mainSliderNext,
				prevEl: mainSliderPrev,
			},
		});

		// Появление стрелок при наведении на слайдер 
		let width = window.screen.width;
		mainSliderBlock.addEventListener('mousemove', (e) => {
			if(((width / 2)-(width - e.clientX)) > 0) {				
				if (!mainSliderNext.classList.contains('swiper-button-disabled')) {
					mainSliderNext.classList.add('vis');
					mainSliderPrev.classList.remove('vis');
				}
				mainSliderPrev.classList.remove('vis');
			} else {
				if (!mainSliderPrev.classList.contains('swiper-button-disabled')) {
					mainSliderPrev.classList.add('vis');
					mainSliderNext.classList.remove('vis');
				}
				mainSliderNext.classList.remove('vis');
			}
			
		});
		mainSliderBlock.addEventListener('mouseleave', () => {
			mainSliderPrev.classList.remove('vis');
			mainSliderNext.classList.remove('vis');
		});
	}

	// Слайдер с цитататами на главной

	const quoteSlider = document.querySelector('.quote__slider '),
		  quoteBlock = document.querySelector('.quote__wrapper'),
		  quoteNext = document.querySelector('.quote__next'),
		  quoetPrev = document.querySelector('.quote__prev');

	if (quoteSlider) {
		const quoteSliderSwiper = new Swiper(quoteSlider, {
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 900,
			pagination: {
				el: ".quote__pagination",
				type: "progressbar",
			},
			navigation: {
				nextEl: '.quote__next',
				prevEl: '.quote__prev'
			}
		});

		// Появление стрелок над слайдером
		let width = window.screen.width;
		quoteBlock.addEventListener('mousemove', (e) => {
			if(((width / 2)-(width - e.clientX)) > 0) {				
				if (!quoteNext.classList.contains('swiper-button-disabled')) {
					quoteNext.classList.add('vis');
					quoetPrev.classList.remove('vis');
				}
				quoetPrev.classList.remove('vis');
			} else {
				if (!quoetPrev.classList.contains('swiper-button-disabled')) {
					quoetPrev.classList.add('vis');
					quoteNext.classList.remove('vis');
				}
				quoteNext.classList.remove('vis');
			}
			
		});
		quoteBlock.addEventListener('mouseleave', () => {
			quoetPrev.classList.remove('vis');
			quoteNext.classList.remove('vis');
		});
	}

	// Формирование обёртки для элементов на странице brunch-list
	const brunchList = document.querySelector('.brunch-list__body'),
		  brunchListItem = document.querySelectorAll('.brunch-list__body li');

	if (brunchList) {
		const groups = [];

		for (let i = 0; i < brunchListItem.length; i += 10) {
			groups.push(Array.from(brunchListItem).slice(i, i + 10));
		}

		groups.forEach(group => {
			const createWrapper = (className, elements) => {
			  const wrapper = document.createElement("div");
			  wrapper.classList.add(className);
			  elements.forEach((element) => {
				if (element) {
					wrapper.appendChild(element);
				}});
			  if (wrapper.innerHTML) {
				return wrapper;
			  }
			  
			};
			
			const array = [];

			const wrapper1 = createWrapper("wrapper-double", [group[0], group[1]]);
			array.push(wrapper1);
			const wrapper2 = createWrapper("wrapper-triple", [group[2], group[3], group[4]]);
			array.push(wrapper2);
			const wrapper3 = createWrapper("wrapper-once", [group[5]]);
			array.push(wrapper3);
			const wrapper4 = createWrapper("wrapper-once", [group[6]]);
			array.push(wrapper4);
			const wrapper5 = createWrapper("wrapper-triple", [group[7], group[8], group[9]]);
			array.push(wrapper5);

			array.forEach(item => {
				if (item) {
					brunchList.append(item);
				}
			})
		});

		const rawHtml = brunchList.innerHTML;

		function initSwiper () {
			const tripleWrap = document.querySelectorAll('.wrapper-triple');
			tripleWrap.forEach(item => {
				item.classList.add('swiper');
				const liElements = item.querySelectorAll('li');

				const div = document.createElement('div');
				div.classList.add('swiper-wrapper');

				const pagination = document.createElement('div');
				pagination.classList.add('swiper-pagination');

				for (let i = 0; i < liElements.length; i++) {
					const li = liElements[i];
					const slide = document.createElement('div');
					slide.classList.add('swiper-slide');
					slide.appendChild(li)
					div.appendChild(slide);
				}
				
				item.innerHTML = div.outerHTML;
				item.appendChild(pagination);

				let slider = new Swiper(item, {
					speed: 500,
					spaceBetween: 20,
					slidesPerView: 'auto',
					pagination: {
						el: item.querySelector('.swiper-pagination'),
						type: "progressbar",
					},
					breakpoints: {
						500: {
							spaceBetween: 31,
						}
					}
				})
			})
		}

		if (window.screen.width < 1300) {
			initSwiper ();
		}

		window.addEventListener('resize', () => {
			if (window.screen.width < 1300) {
				initSwiper ();
			} else {
				brunchList.innerHTML = rawHtml;
			}
		});

		// Формирование обёртки слайдера для групп элементов с тремя элементами
		
	}

	// Слайдер на странице awfully english
	var awfullySwiper = null; 

	function initializeSwiper() {
		awfullySwiper = new Swiper('.awfully__imgList', {
			slidesPerView: 1,
			speed: 900,
			spaceBetween: 20,
			pagination: {
				el: ".awfully__pagination",
				type: "progressbar",
			},
		});
	}

	function destroySwiper() {
		awfullySwiper.destroy();
		awfullySwiper = null;
	}

	function checkScreenWidth() {
		if (window.matchMedia("(max-width: 600px)").matches) {
			// Инициализация Swiper, если ширина экрана меньше или равна 600 пикселей
			if (!awfullySwiper) {
				initializeSwiper();
			}
		} else {
			// Отмена инициализации Swiper, если ширина экрана больше 600 пикселей
			if (awfullySwiper) {
				destroySwiper();
			}
		}
	}

	// Проверяем при загрузке страницы
	checkScreenWidth();

	// Проверяем при изменении размера экрана
	window.addEventListener('resize', checkScreenWidth);

	// Инициализация слайдера на странице awfully при низком разрешении экрана
	// const awfullySlider = document.querySelector('.awfully__imgList');

	// if (awfullySlider) {
	// 	window.addEventListener("resize", () => {
	// 		if (window.screen.width < 601) {
	// 			const awfullySliderSwiper = new Swiper(awfullySlider, {
	// 				slidesPerView: 1,
	// 				speed: 900,
	// 				spaceBetween: 20,
	// 				pagination: {
	// 					el: ".awfully__pagination",
	// 					type: "progressbar",
	// 				},
	// 			})
	// 		} else {

	// 		}
	// 	});
		
	// }

	// Слайдер на странице рецепта коктейля
	const otherSlider = document.querySelector('.other__slider'),
		  otherBlock = document.querySelector('.other__wrapper'),
		  otherNext = document.querySelector('.other__next'),
		  otherPrev = document.querySelector('.other__prev'),
		  otherPag = document.querySelector('.other__pagination');

	if (otherSlider) {

		const otherSliderSwiper = new Swiper(otherSlider, {
			slidesPerView: 'auto',
			spaceBetween: 20,
			navigation: {
				nextEl: otherNext,
				prevEl: otherPrev
			},
			breakpoints: {
				1030: {
					spaceBetween: 60,
					slidesPerView: 4,
				},
				700: {
					spaceBetween: 40,
					slidesPerView: 3,
				}
			},
			pagination: {
				el: otherPag,
				type: "progressbar",
			},
		});

		// Появление стрелок
		let width = window.screen.width;

		otherBlock.addEventListener('mousemove', (e) => {
			if(((width / 2)-(width - e.clientX)) > 0) {				
				if (!otherNext.classList.contains('swiper-button-disabled')) {
					otherNext.classList.add('vis');
					otherPrev.classList.remove('vis');
				}
				otherPrev.classList.remove('vis');
			} else {
				if (!otherPrev.classList.contains('swiper-button-disabled')) {
					otherPrev.classList.add('vis');
					otherNext.classList.remove('vis');
				}
				otherNext.classList.remove('vis');
			}
			
		});
		otherBlock.addEventListener('mouseleave', () => {
			otherPrev.classList.remove('vis');
			otherNext.classList.remove('vis');
		});
	}

	// Анимация аккордеона
	const accTitle = document.querySelectorAll(".acc-title ");
	
	if (accTitle.length) {
		function openAcc(e) {
			e.classList.add("active");
			let t = e.nextElementSibling;
			t.style.maxHeight = t.scrollHeight + "px";
		}
		function closeAcc(e) {
			e.classList.remove("active"),
			e.nextElementSibling.style.maxHeight = null;
		}
		accTitle.forEach(e=>{
			e.addEventListener("click", ()=>{
				if(window.screen.width < 1401) {
					if (e.classList.contains("active"))
					closeAcc(e);
					else {
						let t = document.querySelector(".accTitle.active");
						t && closeAcc(t),
						openAcc(e)
					}
				}

			}
			)
		}
		)
	}


	// Появление окна с ссылками социальных сетей
	const cocktailForward = document.querySelector('.recipe__forward'),
		  cocktailBox = document.querySelector('.recipe__box'),
		  cocktailClose = document.querySelector('.recipe__close');

	if (cocktailForward) {
		cocktailForward.addEventListener('click', () => {
			cocktailBox.classList.add('active');
		})
		cocktailClose.addEventListener('click', () => {
			cocktailBox.classList.remove('active');
		})
	}

	const ratioImg= document.querySelectorAll('.ratioImg');

	if (ratioImg.length) {
		ratioImg.forEach(item => {
			item.style.height = (item.clientWidth * 1.23) + 'px';
		})
		window.addEventListener('resize', () => {
			ratioImg.forEach(item => {
				item.style.height = (item.clientWidth * 1.23) + 'px';
			})
		})
	}

	const ratioImg2= document.querySelectorAll('.ratioImg_2');

	if (ratioImg2.length) {
		ratioImg2.forEach(item => {
			item.style.height = (item.clientWidth * 0.666) + 'px';
		})
		window.addEventListener('resize', () => {
			ratioImg2.forEach(item => {
				item.style.height = (item.clientWidth * 0.666) + 'px';
			})
		})
	}

});

popups();
// maskPhone();


// Окна
function popups(elem = document){
	// Открыть
	let buttonOpenPopup = elem.querySelectorAll("[data-popup]");
	if(buttonOpenPopup.length){

		//buttonOpenPopup = once("popups",buttonOpenPopup);

		buttonOpenPopup.forEach(function(item){
			item.addEventListener("click", function(e){
				e.preventDefault();
				let popup_id = item.getAttribute("data-popup");
				elem.querySelector("#"+popup_id+"").classList.add("active");
			});
		});
	};
	// Закрыть
	let popup = elem.querySelectorAll(".popup");
	if (popup.length < 1 && elem.classList.contains("popup")) {
		popup = [ elem ];
	};
	if(popup.length){

		//once("popups",popup);
		
		popup.forEach(function(item){
			item.addEventListener("click", function(e){
				if(e.target.matches(".popup") || e.target.matches(".popup__close")){
					item.classList.remove("active");
				};
			});
		});
	};
};




// Маска телефона
function maskPhone(elem = document) {
	let inputs = elem.querySelectorAll('input[type="tel"]');
	if (inputs.length) {

		//inputs = once("inputs",inputs);

		inputs.forEach(phone=>{
			let code = '+7',
			find = /\+7/;
			code = '+7';
			find = /\+7/;
			phone.addEventListener('focus', function () {
				phone.value = code + " " + phone.value.replace(code + ' ', '');
			});
			phone.addEventListener('input', function () {
				let val = phone.value.replace(find, ''),
				res = code + " ";
				val = val.replace(/[^0-9]/g, '');
				for (let i = 0; i < val.length; i++) {
					res += i === 0 ? ' (' : '';
					res += i == 3 ? ') ' : '';
					res += i == 6 || i == 8 ? '-' : '';
					if (i == 10) break;
						res += val[i];
				};
				phone.value = res;
			});
			phone.addEventListener('blur', function () {
				let val = phone.value.replace(find, '');
				val = val.trim();
				if (!val) phone.value = null;
			});
		});
	};
};


// Ебала с пейджером

const pager = document.querySelector('.pager');

if (pager) {
	const pagerItems = pager.querySelectorAll('.pager__item:not(.pager__item--previous):not(.pager__item--next)');
	if (pagerItems.length > 4 && window.screen.width < 500) {
		pagerItems.forEach((item, i) => {
			if (i > 3) {
				item.style.display = 'none';
			}
		})
	}	
}

// const mainSlider = document.querySelector(".swiper");
// if(mainSlider){
// 	const mainSliderSwiper = new Swiper(mainSlider, {
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 		navigation: {
// 			prevEl: '.main-slider .arrows__prev',
// 			nextEl: '.main-slider .arrows__next',
// 		},
// 	});
// };








// Обенуть таблицы
if(window.innerWidth < 768){
	let contentTable = document.querySelectorAll(".content table");
	if(contentTable.length){
		contentTable.forEach(function(item){
			let tableWrap = document.createElement('div');
			tableWrap.setAttribute("class", "table-wrap");
			item.parentNode.insertBefore(tableWrap, item);
			tableWrap.appendChild(item);
		});
	};
};


// // Fancybox
// Fancybox.bind(':not(.swiper-slide-duplicate) > [data-fancybox]', {
// 	groupAll: true,
// 	placeFocusBack: false, // Починить баг с фенсибоксом и свипером
// 	Image:{
// 		wheel: "slide",
// 	},
// });
// // Исправить баг с дублированием изображений в фенсибоксе, если свипер бесконечный
// document.addEventListener("DOMContentLoaded", function(){
// 	let fancyboxInSlider = document.querySelectorAll('.swiper-slide-duplicate [data-fancybox]');
// 	if(fancyboxInSlider.length){
// 		fancyboxInSlider.forEach(function(item){
// 			item.addEventListener("click", function(e){
// 				e.preventDefault();
// 				let href = item.getAttribute("href");
// 				item.closest(".swiper").querySelector(".swiper-slide:not(.swiper-slide-duplicate) [data-fancybox][href='"+href+"']").click();
// 			});
// 		});
// 	};
	
// });