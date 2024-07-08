$(document).ready(function(){
    tabControl(".destinatiMenu li");
    panelControl("input[value='apps']");
    askfor(".brandusasubbox > li");
    maintravelandexp(".tabBox input[type=button]");
    maintab(".mainContainer > div:nth-child(2) > div > div:not(:first-child)");
    scrollevent(".expcardSlot");
    popupEvent(".formbox form fieldset input[type='button']");
    moreboxEvent(".moreBox");
    listSlider();
    sideSlide();
    funnybox();
    mainslide();
    // maintrend(".mainContainer > div:nth-child(3)");
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
        var $expcardslot = $(".expcardSlot");
        var $cardsloteventon = $expcardslot.offset().top - 250;
        console.log($cardsloteventon)

        if($(this).scrollTop() > $cardsloteventon){
            $(".expcardSlot").addClass("active");
        }
    });
}

function maintrend(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var height = $(window).height();
        console.log(top);
        var test = $(".mainContainer > div:nth-child(3) > h2").offset().top

        $(".mainContainer > div:nth-child(3)").each(function(){
            if(top > test - height){
                $(this).addClass("active");
            }else{
                $(this).removeClass("active");
            }
        });
    });
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
        minslider:1,
    })
}
function mainslide(){
    $(".mainContainer > .mainSliderBox .mainCarouselSlider").bxSlider({
        pager : false,
    });
}