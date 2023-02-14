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
    
    function isActive(elem, activeClass){
        $(elem).click(function () {
            if ( $(elem).hasClass(activeClass)) {
                $(elem).removeClass(activeClass)
            }
            $(this).addClass(activeClass)
        })
    }

    isActive('.popup-stores-item', 'popup-stores-item-active')
    isActive('.product-color', 'product-color-is-active')
    isActive('.pr-page-size-item', 'pr-page-size-item-active')
    isActive('.hit-product-menu li', 'active-hit')


    $('.search-close-btn button').click(function () {
        $('.search-popap').hide();
    })

    $('.menu-search').click(function () {
        $('.search-popap').show();
    });
    $('.search-del-btn').click(function () {
        $('.search-input').val('');
        console.log('hello')
    });
    // let lastEl;
    // $('.stores-progressbar-item').each(function(i, el) { 
    //     let timerId = setTimeout(function tick() {
    //         if (lastEl) {
    //             lastEl.removeClass('active-progressbar');
    //         }
    //         lastEl = $(el).addClass('active-progressbar');
            
    //         timerId = setTimeout(tick, $('.stores-progressbar-item').length * 5000);
    //     }, i * 5000);
    // });
    $('.stores-item').click(function () {
        $('.stores-popap').show();
    })
    $('.stores-popap-close-btn').click(function () {
        $('.stores-popap').hide();
    })
    $('.pr-page-quik-order').click(function () {
        $('.quik-order-popup').fadeIn();
    })
    $('.quik-order-close-btn').click(function () {
        $('.quik-order-popup').fadeOut()
    })
  });




const menuItem = document.querySelectorAll('.submenu');
const menuLinkBtn =  document.querySelectorAll('.menu-link');
const burgerBtn = document.querySelector('.burger');
const productFavoritesBtn = document.querySelectorAll('.product-favorites');
const hitProductMenuItem = document.querySelectorAll('.hit-product-menu li');
const productCards = document.querySelectorAll('.product-cards');
const hitProductCards = document.querySelectorAll('.hit-product-block .product-cards');
const storesSliderItem = document.querySelectorAll('.stores-slider-item');
const storesProgressbar =document.querySelector('.stores-progressbar');
const basketIconButton = document.querySelector('.menu-basket');
const basketCloseButton = document.querySelector('.basket-close-btn');
const basketCounter = document.querySelectorAll('.qwnt p')
const basketItemDeleteButton = document.querySelector('.basket-dell-btn');
const subscribeEmail = document.querySelector('#subscribe-email')
let counterValue = document.querySelector('#qwnt-numb');
let productTotalSum = document.querySelectorAll('.product-total-sum');
const addToBasketButton = document.querySelectorAll('.add-to-basket-button')

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

subscribeEmail.addEventListener('input', function () {
    let subscribeEmailValue =subscribeEmail.value
    if(subscribeEmailValue.match(emailPattern) ) {
        subscribeEmail.style.borderColor = '#b1b1b1';
        document.querySelector('.error').classList.add('hide')
        document.querySelector('.subscribe-send').disabled = false;
    }else{
        subscribeEmail.style.borderColor = 'red'
        document.querySelector('.error').classList.remove('hide')
        document.querySelector('.subscribe-send').disabled = true;
    }
})
document.querySelector('.subscribe-send').addEventListener('click', function (e) {
    e.preventDefault()
    let subscribeEmailValue =subscribeEmail.value
    if(subscribeEmailValue.match(emailPattern) ) {
        subscribeEmail.style.borderColor = '#b1b1b1';
        document.querySelector('.error').classList.add('hide')
        document.querySelector('.subscribe-send').disabled = false;
    }else if(subscribeEmail.value = ''){
        document.querySelector('.subscribe-send').disabled = true;
    }else{
        subscribeEmail.style.borderColor = 'red'
        document.querySelector('.error').classList.remove('hide')
        document.querySelector('.subscribe-send').disabled = true;
    }
})




for (const item of basketCounter) {

    item.addEventListener('click', function () {
        if (this.id === 'qwnt-minus') {
            for (const el of productTotalSum) {
                let resValue = el.innerHTML;
                el.innerHTML =  resValue / counterValue.innerHTML
            }
            counterValue.innerHTML--
            if (counterValue.innerHTML < 1) {
                counterValue.innerHTML = 1
            }
            
        } else if(this.id === 'qwnt-plus'){
            counterValue.innerHTML++
            for (const el of productTotalSum) {
                let resValue = el.innerHTML;
                el.innerHTML =  resValue * counterValue.innerHTML
            }
             
        } else{
            console.log(counterValue.innerHTML)
        }
    })
}


basketIconButton.addEventListener('click', function () {
    document.querySelector('.basket-popap-wrap').classList.add('basket-show');
    document.querySelector('.basket-popap-wrap').classList.remove('basket-hide');
    document.querySelector('.basket-popap').style.display = 'block';
})
basketCloseButton.addEventListener('click', function () {
    document.querySelector('.basket-popap-wrap').classList.remove('basket-show');
    document.querySelector('.basket-popap-wrap').classList.add('basket-hide');
    setTimeout(() => {
        document.querySelector('.basket-popap').style.display = 'none';
    }, 500);
})

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

basketItemDeleteButton.addEventListener('click', function () {
    let basketCount  = document.querySelector('.basket-count').innerHTML;
    basketCount--
    document.querySelector('.empty-basket').classList.remove('hide');
    document.querySelector('.full-basket').classList.add('hide');
    document.querySelector('.add-tobasket-popap p').innerHTML='Remove to basket';
    for (const item of productSize) {
        item.classList.remove('added');
        // document.querySelector('.basket-count').innerHTML = basketCount
        document.querySelector('.basket-count').innerHTML = 0
    }
})

for (const item of addToBasketButton) {
    
    item.addEventListener('click', function(){
        console.log(item)
        if(item.classList.contains('added')){
            
            document.querySelector('.add-tobasket-popap').classList.remove('hide');
            document.querySelector('.empty-basket').classList.remove('hide')
            document.querySelector('.full-basket').classList.add('hide')
            document.querySelector('.add-tobasket-popap p').innerHTML='Remove to basket'
            document.querySelector('.pr-page-add-to-basket').innerHTML='Add to basket'

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
            document.querySelector('.pr-page-add-to-basket').innerHTML='Remove to basket'
           
            basketCount++;
            document.querySelector('.basket-count').innerHTML = basketCount;
            document.querySelector('.full-basket').classList.remove('hide')
            document.querySelector('.empty-basket').classList.add('hide')
        }
         setTimeout(() => {
            document.querySelector('.add-tobasket-popap').classList.add('hide');
         }, 2000);
    })
}




/* add and remove to favorites*/
for (const item of productFavoritesBtn) {
    item.addEventListener('click', function(){
        if ( this.classList.contains('product-favorites-active')) {
            
            this.classList.remove('product-favorites-active');
            favoritesCount--;
            if (favoritesCount < 0) {
                favoritesCount=0
            }
            document.querySelector('.whislist-count').innerHTML = favoritesCount; 
        } else{
            this.classList.add('product-favorites-active');
            favoritesCount++;
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


// const currentUrl = window.location.pathname
if ( window.location.pathname.indexOf("detail-page.php") > 0) {
    document.querySelector('.bootom-bar').classList.add('white-bg')
    console.log(window.location.pathname)
}else{
    document.querySelector('.bootom-bar').classList.remove('white-bg')
    console.log(window.location.pathname)
}