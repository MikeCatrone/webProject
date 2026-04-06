


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


    


    // -- Initial Home Page Load -- //

    $(() => {

        console.log("Initial Load");


        // Axios Call

         axios.get('https://codethesolution.com/nscc/project2700-mike.php')
        .then(response => {

        console.log('Data fetched successfully:', response.data);


        


        //Adds skeleton
        $("#myMain").append(`

            <div id = "pageContent">
            
            <h2>Games For Sale</h2>

            <div class="container mt-5">
                <div id="insertProduct" class="row g-4">
                    

                </div>

            </div>
            
            
        `);


   


        // Old data

        // Loop adds product blocks
        // for(el of response.data) {

        //     console.log(el);

        //     $("#insertProduct").append(`
            
        //     <div class="col-md-4">
        //                 <div class="p-3 border bg-light text-center">
        //                     <img class="gameCover" src="./myImages/${el.image_main}">
        //                     <h3>${el.title}</h3>
        //                     <h5>Price: $${el.price}</h5>
        //                     <button id="productButton${el}" type="button" class="btn btn-primary">More Info</button>
                            
        //                 </div>

        //     </div>
                        
        //     `);
 
        // }




        // Updated data
        $.each(response.data, (index, el) => {

        $("#insertProduct").append(`
            <div class="col-md-4">
                <div class="p-3 border bg-light text-center">
                    <img class="gameCover" src="./myImages/${el.image_main}">
                    <h3>${el.title}</h3>
                    <h5>Price: $${el.price}</h5>
                    
                    <button id="productButton${index}" 
                        type="button" 
                        class="btn btn-primary btn-info-click" 
                        data-id="${el.id}"
                        data-micromodal-trigger="modal-${index}">
                            
                        More Info
                    </button>

                    <div class="modal a micromodal-slide" id="modal-${index}" aria-hidden="true">
                    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
                        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">

                            <button class="modal__close" aria-label="Close modal" data-micromodal-close>X</button>
                            <img class="gameLarge" src="./myImages/${el.image_large}">
                            <h3>${el.title}</h3>
                            <h5>Price: $${el.price}</h5>
                            <p class="descriptionStyle">${el.description}</p>

                            <button id="addCart${index}" 
                                type="button" 
                                class="btn btn-primary btn-info-click addCart" 
                                data-id="${el.id}"
                                data-micromodal-trigger="modal-${index}">
                                
                                Add to cart
                            </button>

                            <div>

                                <a href="./myImages/${el.image_gallery_1}" data-fancybox data-caption="Single image">
                                    <img class="popup" src="./myImages/${el.image_gallery_1}" alt="Single image" />
                                </a>

                                <a href="./myImages/${el.image_gallery_2}" data-fancybox="gallery" data-caption="Caption #1">
                                    <img class="popup" src="./myImages/${el.image_gallery_2}" alt="Gallery image 1" />
                                </a>

                                <a href="./myImages/${el.image_gallery_3}" data-fancybox="gallery" data-caption="Caption #2">
                                    <img class="popup" src="./myImages/${el.image_gallery_3}" alt="Gallery image 2" />
                                </a>

                                <a href="./myImages/${el.image_gallery_4}" data-fancybox="gallery" data-caption="Caption #2">
                                    <img class="popup" src="./myImages/${el.image_gallery_4}" alt="Gallery image 2" />
                                </a>

                                <a href="./myImages/${el.image_gallery_5}" data-fancybox="gallery" data-caption="Caption #2">
                                    <img class="popup" src="./myImages/${el.image_gallery_5}" alt="Gallery image 2" />
                                </a>

                                <a href="./myImages/${el.image_gallery_6}" data-fancybox="gallery" data-caption="Caption #2">
                                    <img class="popup" src="./myImages/${el.image_gallery_6}" alt="Gallery image 2" />
                                </a>

                            </div>
                            
                            

                        </div>
                    </div>
                    </div>

                  


                </div>
            </div>
        `);
        });



        // Modal initiate

        MicroModal.init({
            onClose: (modal) => console.log(`${modal.id} closed`),
            openTrigger: 'data-micromodal-trigger', 
            closeTrigger: 'data-micromodal-close',
            disableScroll: true
        });

        


        $("#productButton1").on('click', () => {

            console.log("Button Pressed!!");
            
        })
        

        
        }) // Error Catching //
        .catch(error => {

        // Handle any errors that occurred during the request
        console.error('Error fetching data:', error);

        });
        


        // Adds Slider
        $("#myMain").append(theSlider);
        
        
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








