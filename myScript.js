


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



        // Axios Call

         axios.get('https://codethesolution.com/nscc/project2700-mike.php')
        .then(response => {

        console.log('Data fetched successfully:', response.data);


        
        //Adds skeleton
        $("#myMain").append(`

            <div id="pageContent">
            
            <h2>Games For Sale</h2>

            <div class="container mt-5">
                <div id="insertProduct" class="row g-4">
                    

                </div>

            </div>
            
            
        `);


   

        // data populate. creates 6 product cards
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


        let theFooter = `
            <footer class="footer-retro mt-5 py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
                            <h4 class="retro-logo">Mike's Retro Chest</h4>
                            <p class="mb-0">Your one-stop shop for legendary PlayStation classics and hidden gems.</p>
                        </div>
                        
                        <div class="col-md-6 text-center text-md-end">
                            <h5 class="text-uppercase small fw-bold">Stay Connected</h5>
                            <p class="small">Follow us for restock alerts & retro news!</p>
                            <div class="social-icons">
                                <span class="badge bg-primary px-3 py-2">Facebook</span>
                                <span class="badge bg-info text-dark px-3 py-2">Twitter</span>
                                <span class="badge bg-danger px-3 py-2">Instagram</span>
                            </div>
                        </div>
                    </div>
                    
                    <hr class="retro-hr">
                    
                    <div class="text-center">
                        <p class="copyright-text mb-0">&copy; 2026 Mike's Retro Chest. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        `;

        // Append this at the end of your initial load function
        $("#myMain").append(theFooter);



        // Modal initiate

        MicroModal.init({
            onClose: (modal) => console.log(`${modal.id} closed`),
            openTrigger: 'data-micromodal-trigger', 
            closeTrigger: 'data-micromodal-close',
            disableScroll: true
        });

        


        $("#addCart0").on('click', () => {
            alert("Silent Hill was added to the cart");
         
        })

        $("#addCart1").on('click', () => {
            alert("Final Fantasy VII was added to the cart");
         
        })

        $("#addCart2").on('click', () => {
            alert("Chrono Cross was added to the cart");
         
        })

        $("#addCart3").on('click', () => {
            alert("Metal Gear Solid was added to the cart");
         
        })

        $("#addCart4").on('click', () => {
            alert("Tomb Raider was added to the cart");
         
        })

        $("#addCart5").on('click', () => {
            alert("Crash Bandicoot was added to the cart");
         
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
        window.location.reload();
        
    })



    // About Button handler
    $("#about").on('click', () => {

        $("#homeBanner").css("display", "none");
        $("#pageContent").html(`

            <div id="aboutHeading">
                
                <img src="./myImages/game-controller.png">
                <h1>About Our Shop</h1>

                <div class="container">
                    <div class="row gx-5 gy-5">

                        <div class="col-md-6">
                            <div id="aboutBox1" class="p-4 h-100"> 
                                <p>
                                    We pride ourselves on delivering the classics that people grew up with, at a 
                                    price that wont break your budget. For nearly 10 years we've been devoted to 
                                    stocking our shop with a wide arange of games of all genres. 
                                    There's something for everyone at Mike's Retro Chest
                                </p>

                                <img src="./myImages/star.png">

                                <p>
                                    Ask us about our trade in policies, as we are always looking for retro consoles to
                                    fill our inventory. It's because of our loyal customers that we are able to keep our doors
                                    open. We can also custom order anything that you may be needing.
                                </p>

                            </div>
                        </div>

                        <div class="col-md-6">
                            <div id="aboutBox2" class="h-100">
                                <img id="gameShopStyle" src="./myImages/gameShop.png" class="img-fluid">
                            </div>
                        </div>
                        
                    </div>
                </div>

                
            
            </div>
            
        `)

    })



  
    // Contact Button handler
    $("#contact").on('click', () => {

       

        $("#homeBanner").css("display", "none");
        $("#pageContent").html(`

            
            <h1 id="contactHeading">Contact Us</h1>
            <h5>We would love to hear from you! Drop us a message and tell us how we are doing.
            We are always looking for feedback from our customer to help better grow the business to help
            our gaming community.</h5>

            <form method="post" action="#" id="form1">

                <label class="form-label mt-3" for="emailField">E-Mail:</label>
                <span class="errors" id="field1Error">*required</span>
                <input class="form-control" type="text" id="emailField" name="emailField" value="" placeholder="Enter Email">

                <label class="form-label mt-3" for="subjectField">Subject:</label>
                <span class="errors" id="field2Error">*required</span>
                <input class="form-control" type="text" id="subjectField" name="subjectField" value="" placeholder="Enter Subject">

                <label class="form-label mt-4" for="field6">Message:</label>
                <span class="errors" id="field3Error">*required</span>
                <textarea class="form-control" id="messageField" name="messageField" placeholder="Enter a message" rows="6" cols="40"></textarea>

                <button type="submit" id="submit" class="btn btn-primary w-100"> Submit </button>

            </form>
            
            

        `)

    })


    


      // -------- Form Submitting ------- //

    $(document).on("submit", "#form1", function(event) {
        
        // Stop the page from reloading
        event.preventDefault();


        
        const contactField1 = $("#emailField").val();
        const contactField2 = $("#subjectField").val();
        const contactField3 = $("#messageField").val();

        console.log("Email: " + contactField1);
        console.log("Subject: " + contactField2);
        console.log("Message: " + contactField3);


        // Error Detection
        let errors = 0;


       

        // Adds error message 
        if(contactField1.trim().length === 0) {
            errors = 1;
            $("#field1Error").css("display", "inline-block");
        } 

       
        if(contactField2.trim().length === 0) {
            errors = 2;
            $("#field2Error").css("display", "inline-block");
        } 


        if(contactField3.trim().length === 0) {
            errors = 3;
            $("#field3Error").css("display", "inline-block");
        } 


    
        // Removes error messages when text is detected in an input
        $(document).on("input", "#emailField", function() {
            $("#field1Error").hide();
            
        });


        $(document).on("input", "#subjectField", function() {
            $("#field2Error").hide();
            
        });


        $(document).on("input", "#messageField", function() {
            $("#field3Error").hide();
            
        });
                
        

        // Form Submits to a PHP file //

        if(errors == 0) {

            // Create form data
            const formData = new FormData();

            // email, subject and message
            formData.set('field1', contactField1); 
            formData.set('field2', contactField2); 
            formData.set('field3', contactField3);

           axios.post("send3.php", formData)
            .then(response => {

                console.log(response.data);

            })
            .catch(error => {
                console.error("Error:", error);
            });

        }
        
        
    });


   


})








