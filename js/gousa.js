$(document).ready(function(){
    tabControl(".destinatiMenu li");
    panelControl("input[value='apps']");
    askfor(".brandusasubbox > li");
    maintravelandexp(".tabBox input[type=button]");
    maintab(".mainContainer > div:nth-child(2) > div > div:not(:first-child)");
    scrollevent();
    popupEvent(".formbox form fieldset input[type='button']");
    // moreboxEvent();
    listSlider();
    detailpagesScroll();
    sideSlide();
    funnybox();
    mainslide();
    maintrend(".mainContainer > div");
    subpages();
    comment();
});
function panelControl(target){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "#" + $(this).attr('data-panel');
        $(currentPanel).addClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function tabControl(target){
    var currentTab = null;
    var tabPages = $(".TabPage");
    $(target).click(function(){
        $(target).removeClass("active");
        $(this).addClass("active");
        currentTab = "." + $(this).attr("data-tabname");
        tabPages.removeClass("active");
        $(currentTab).addClass("active");
    });
}

function askfor(target){
    var $brandusasubbox = $(".brandusasubbox > li > p");

    $(target).click(function(){
        $brandusasubbox.toggleClass("open");
        $("input").toggleClass("rotate");
    });

}
function popupEvent(target){
    $(target).click(function(){
        $("#confirmPopup").addClass("active");
    });
    $("#confirmPopup input").click(function(){
        $("#confirmPopup").removeClass("active");
    });
}
function comment(){
    var btn = $(".top_menucontainer > div:nth-child(3) [type=button]")

    btn.$(this).click(function(){
        window.alert("입력이 완료되었습니다.");
    });
}

function maintravelandexp(target){
    var currenttab  = null;
    var tabboxs = $(".mainContainer > div:nth-child(2) > ul");

    $(target).click(function(){
        $(target).toggleClass("active");
        $(this).addClass("active");
        currenttab = "." + $(this).attr("data-tabName");
        tabboxs.removeClass("active");
        $(currenttab).addClass("active");
    });

}
function maintab(target){
    var tab = null;
    var tabcontroll = $(".mainContainer > div:nth-child(2) > div > div:not(:first-child");

    $(".tabBox input").click(function(){
        $(target).removeClass("active");
        $(this).addClass("active");
        tab = "." + $(this).attr("data-tabname");
        tabcontroll.removeClass("active");
        $(tab).addClass("active");
    });
    
};

function scrollevent(){
     $(window).scroll(function(){
        var expcardslot = $(".expcardSlot");
        var cardsloteventon = expcardslot.offset().top - 250;
        
    //     // console.log($cardsloteventon)

        if($(this).scrollTop() > cardsloteventon){
            $(".expcardSlot").addClass("active");
        }
    });
}
function detailpagesScroll(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var height = $(window).height();
        var box = $(".detailContainer div:nth-child(3) > h2").offset().top
        var floatbox = $(".floatBox").offset().top

        $(".detailContainer div:nth-child(3) > h2").each(function(){
            if(top > box - height){
                $(".detailContainer div:nth-child(3)").addClass("active");
            }else{
                $(".detailContainer div:nth-child(3)").removeClass("active");
            }
        });
        
        $(".floatBox").each(function(){
            if(top > floatbox - height){
                $(".floatBox").addClass("active");
            }else{
                $(".floatBox").removeClass("active");
            }
        });        
    });
}

function maintrend(){
    var observer = new IntersectionObserver((e) =>{
        e.forEach((box) =>{
            if(box.isIntersecting){
                div.addClass("active");
            }
        })
    });

    var div = $(".mainContainer > div")
    observer.observe(div[2])
    observer.observe(div[2] > div[1])
}

function subpages(){
    var observer = new IntersectionObserver((e) =>{
        e.forEach((content) =>{
            if(content.isIntersecting){
                img.addClass("active");
            }
        })
    });

    var img = $(".detailContainer > div")
    observer.observe(div[2]);
}

function moreboxEvent(){
    $(window).scroll(function(){
        var morebox = $(".moreBox");
        var moreboxevent = morebox.offset().top - 450;
    
        if($(this).scrollTop() > moreboxevent){
            $(".moreBox").addClass("active");
        }
    });
};
function listSlider(){
    $(".listContainer > .mainSliderBox > .mainCarouselSlider").bxSlider({
        pager: false,
        speed : 800,
        pause : 3000,
        auto : true,
    });
}
function sideSlide(){
    $(".sideSlide").bxSlider({
        pagerType : "short",
    });
}
function funnybox(){
    $(".funnystory").bxSlider({
        pager: false,
        control: true,
    })
}
function mainslide(){
    $(".mainContainer > .mainSliderBox .mainCarouselSlider").bxSlider({
        pager : false,
        speed : 800,
        pause : 3000,
        auto : true,
    });
}