
// This will determine which "page" to load. Product is the default/home page
let page = "product";




$(document).ready(() => {

    
    if(page === "product") {

        $("#myMain").html(`
            <div>
                <h2>Welcome to my eShop guys!</h2>

                <div class="slider">
                    <img src="./myImages/slider01.png" />
                    <img src="./myImages/slider03.png" />
                    <img src="./myImages/slider02.png" />
                    <img src="./myImages/slider04.png" />
                </div>

                <h2>Games For Sale</h2>

                <div class="container mt-5">
                    <div class="row g-4">
                        
                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>
                        
                        <div class="col-md-4">
                            <div class="p-3 border bg-light text-center">
                                <img src="./myImages/01.jpg">
                            </div>
                        </div>
                        
                    </div>

            </div>

        `);


        // Slider Setup //
        $('.slider').sss({
            slideShow : true,    // Set to false to prevent SSS from automatically animating.
            startOn   : 0,       // Slide to display first. Uses array notation (0 = first slide).
            transition: 400,     // Length (in milliseconds) of the fade transition.
            speed     : 3500,    // Slideshow speed in milliseconds.
            showNav   : true     // Set to false to hide navigation arrows.
        });



    } else if(page === "about") {

        $("#myMain").html(`
            <h1>About Us</h1>
        `);


    } else if(page === "contact") {

        $("#myMain").html(`
            <h1>Contact Us</h1>
        `);



    } else {

        $("#myMain").html(`
            <h1>Something went wrong :(</h1>

        `);


    }
    

})



////////////////////////////////////////////////////////////////////////////////

// Modal //

// This code is from the developer's code pen demo
document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init({
        onClose: () => { console.log('close') }
    })

    MicroModal.show('modal-1')
    MicroModal.close('modal-1')

});

/////////////////////////////////////////////////////////////



$(() => {
    console.log("Helloss");
    
})



