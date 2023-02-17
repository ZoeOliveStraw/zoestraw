(function()
{
    function DisplayNavBar()
    {
        console.log("Hello, World!");
        $('#header').load("navbar.html");
    }

    
    function AddBackgroundImage()
    {
        console.log("Adding background image!");
        $('body').css({'background-image':'url("../art/background.jpg")',
                        'background-size' : 'cover'});
        $('body').addClass("has-bg-img");
    }

    function StyleCards()
    {
        $("[id='cards']").css('background-color', 'rgb(219, 224, 255,0.8)')
    }

    //named function
    function Start()
    {
        DisplayNavBar();
        AddBackgroundImage();
        StyleCards();
    }

    window.addEventListener("load", Start());

})();