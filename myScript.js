


$(document).ready(() => {


    // Slider code
    const initSlider = () => {

            $('.slider').sss({
            slideShow : true,
            startOn   : 0,
            transition: 400,
            speed     : 3500,
            showNav   : true
        });
        
    }
   
    

    // Slider and welcome message html
    let theSlider = `
        <div id="homeBanner">
            <h2>Mike's Retro Chest</h2>

            <div class="slider">
                <img id='imageTest' src="./myImages/slider01.png" />
                <img src="./myImages/slider03.png" />
                <img src="./myImages/slider02.png" />
                <img src="./myImages/slider04.png" />
            </div>
        </div>
        
    `;


    // Page content html
    let pageContent = `
        <div id = "pageContent">
            
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

    `;



    //Initial Home Page Load
    $(() => {

        console.log("Initial Load");
        
        $("#myMain").append(theSlider);
        $("#myMain").append(pageContent);

        // Activates slider
        initSlider();


    })



    // Home Button handler
    $("#home").on('click', () => {

        $("#homeBanner").css("display", "block");
        $("#pageContent").html(pageContent);
        
    })



    // About Button handler
    $("#about").on('click', () => {

        $("#homeBanner").css("display", "none");
        $("#pageContent").html(`
            <h1>About Us</h1>
        `)

    })



    // Contact Button handler
    $("#contact").on('click', () => {

        $("#homeBanner").css("display", "none");
        $("#pageContent").html(`
            <h1>Contact</h1>
        `)

    })


})



////////////////////////////////////////////////////////////////////////////////

// Modal //

// This code is from the developer's code pen demo
// document.addEventListener('DOMContentLoaded', () => {
//     MicroModal.init({
//         onClose: () => { console.log('close') }
//     })

//     MicroModal.show('modal-1')
//     MicroModal.close('modal-1')

// });

/////////////////////////////////////////////////////////////





