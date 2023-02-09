$(document).ready(function(){
    $(".stores-items").owlCarousel({
        items: 6,
        touchDrag: true,
        loop: true,
        responsive : {
            320:{
                items: 2
            },
            768: {
                items: 4
            },
            1024:{
                items: 6
            },
            1440: {
                items: 6
            },
            1920: {
                items: 6
            }
        }
    });
    $(".collections-items").owlCarousel({
        loop: true,
        nav: true,
        touchDrag: true,
        autoplay: true,
        responsive : {
            320:{
                items: 1
            },
            768: {
                items: 1
            },
            1024:{
                items: 2
            },
            1440: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });
    $(".header-banner-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });
    $('.stores-slider ').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    })
    $(".product-cards").owlCarousel({
        loop: true,
        responsive : {
            320:{
                items: 1
            },
            768: {
                items: 2
            },
            1024:{
                items: 3
            },
            1280: {
                items: 4
            },
            1440: {
                items: 4,
            },
            1920: {
                items: 4,
            }
        }
    });
    $('.lookbook-items').owlCarousel({
        
        margin:10,
        responsive : {
            320:{
                items: 1
            },
            768: {
                items: 2
            },
            1024:{
                items: 3,
            },
            1280: {
                items: 3,
            },
            1440: {
                items: 3,
            },
            1920: {
                items: 3,
            }
        }
    })
    $('.open-submenu').click(function () {
        $(this).children('.submenu').slideToggle("slow");
    })
    $('.product-color').click(function(){
        if ( $('.product-color').hasClass('product-color-is-active')) {
            $('.product-color').removeClass('product-color-is-active')
        }
        $(this).addClass('product-color-is-active')
       
    })
    $('.hit-product-menu li').click(function(){
        if ($('.hit-product-menu li').hasClass('active-hit')) {
            $('.hit-product-menu li').removeClass('active-hit') 
        }
        $(this).addClass('active-hit')
        
    })
    
    let lastEl;
    $('.stores-progressbar-item').each(function(i, el) { 
        let timerId = setTimeout(function tick() {
            if (lastEl) {
                lastEl.removeClass('active-progressbar');
            }
            lastEl = $(el).addClass('active-progressbar');
            
            timerId = setTimeout(tick, $('.stores-progressbar-item').length * 5000);
        }, i * 5000);
        
    });
    $('.stores-item').click(function () {
        $('.stores-popap').show();
    })
    $('.stores-popap-close-btn').click(function () {
        $('.stores-popap').hide();
    })
  });




const menuItem = document.querySelectorAll('.submenu');
const menuLinkBtn =  document.querySelectorAll('.menu-link');
const burgerBtn = document.querySelector('.burger');
const productFavoritesBtn = document.querySelectorAll('.product-favorites');
const productSize = document.querySelectorAll('.product-size span');
const hitProductMenuItem = document.querySelectorAll('.hit-product-menu li');
const productCards = document.querySelectorAll('.product-cards');
const hitProductCards = document.querySelectorAll('.hit-product-block .product-cards');
const storesSliderItem = document.querySelectorAll('.stores-slider-item');
const storesProgressbar =document.querySelector('.stores-progressbar');


/* stores-progressbar */

if (storesSliderItem.length > 0) {
    const progressbarItemsLength = storesSliderItem.length;
    for (let i = 0; i < progressbarItemsLength; i++) {
        const progressbarItem = document.createElement('div')
        storesProgressbar.append(progressbarItem)
        progressbarItem.classList.add('stores-progressbar-item');
        progressbarItem.style.width = (100 / progressbarItemsLength) + '%'; 
        const span = document.createElement('span')
        progressbarItem.append(span)
        // setInterval(() => {
        //     span.classList.add("active-progressbar")
        // }, 5000);
    }
}
for (const menuItem of hitProductMenuItem) {
    menuItem.addEventListener('click', function () {
        for (const elem of hitProductCards) {
            if (this.id === elem.dataset.id) {
                elem.classList.remove("hide-product-cards")
            } else{
                elem.classList.add('hide-product-cards')
            }
        }
    })
}
/*basket and favorites count */
let favoritesCount = 0;
let basketCount = 0;

/* add and remove to basket*/
for (const item of productSize) {
    item.addEventListener('click', function(){
        if(item.classList.contains('added')){
            document.querySelector('.add-tobasket-popap').classList.remove('hide');
            document.querySelector('.add-tobasket-popap p').innerHTML='Remove to basket'
            item.classList.remove('added');
            basketCount--;
            document.querySelector('.basket-count').innerHTML = basketCount;
            if (basketCount < 0) {
                basketCount=0
            }
        }else{
            this.classList.add('added')
            document.querySelector('.add-tobasket-popap').classList.remove('hide');
            document.querySelector('.add-tobasket-popap p').innerHTML='Product is added';
            basketCount++;
            document.querySelector('.basket-count').innerHTML = basketCount;
        }
         setTimeout(() => {
            document.querySelector('.add-tobasket-popap').classList.add('hide');
         }, 2000);
    })
}

/* add and remove to favorites*/
for (const item of productFavoritesBtn) {
    item.addEventListener('click', function(){
        if ( this.firstElementChild.src.indexOf("img/heart-grey.svg") > 0) {
            this.firstElementChild.src = '../img/heart-grey-solid.svg';
            favoritesCount++;
            document.querySelector('.whislist-count').innerHTML = favoritesCount;
        } else{
            this.firstElementChild.src = '../img/heart-grey.svg';
            favoritesCount--;
            if (favoritesCount < 0) {
                favoritesCount=0
            }
            document.querySelector('.whislist-count').innerHTML = favoritesCount; 
        }
    })
}

menuItem.forEach((item) => {
    item.closest('.menu-item').classList.add('open-submenu')
    if (item.closest('.open-submenu')) {
        let span = document.createElement('span');
        item.previousElementSibling.append(span)
    }
})

for (const elem of menuLinkBtn) {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
        if (elem.closest('.open-submenu')) {
            let child = elem.firstElementChild
            child.classList.toggle('open-submenu-anim')
            console.log(elem.children)
        }
       
    })
}

burgerBtn.addEventListener('click', function () {
    
    if(burgerBtn.classList.contains('open-catalog-menu')){
        burgerBtn.classList.remove('open-catalog-menu')
        document.querySelector('.header-catalog-menu').classList.remove('catalog-menu-open');
        document.querySelector('.header-catalog-menu').classList.add('catalog-menu-close');
    } else{
        burgerBtn.classList.add('open-catalog-menu')
        document.querySelector('.header-catalog-menu').classList.add('catalog-menu-open');
        document.querySelector('.header-catalog-menu').classList.remove('catalog-menu-close');
    }
    
    
})
/*fixed menu*/
window.onscroll = function() {myStyckyMenu()};

const navbar = document.querySelector(".header-fix");
const sticky = navbar.offsetTop;

function myStyckyMenu() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


console.log('hello')