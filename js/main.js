$(document).ready(function(){

    
    $('.slider-modal').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      });

    // click anywhere else to close all selec boxes
    $('html , body').click(function(e){
        $(".option-list").slideUp();
        $(".arrow-down").removeClass("arrow-up");
    });

    let triggersModal = document.querySelectorAll(".js-show-modal");
    let modals = document.querySelectorAll(".js-modal");

    function closeModal() {
        modals.forEach(modal => {
        if (modal.classList.contains("is-open")) {
            modal.classList.remove("is-open");
        }
        });
    }


    modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
        const isOutside = !event.target.closest(".modal__inner");
        const isCloseButton = event.target.matches(".js-close-modal");
        if (isCloseButton || isOutside) {
            closeModal();
        }
        });
    });

    triggersModal.forEach((button) =>
    button.addEventListener("click", function (e) {
        e.preventDefault();
        let modalID = this.dataset.modal;

        modals.forEach(function (modal) {
        if (modal.dataset.modal == modalID) {
            modal.classList.add("is-open");
        }
        });
    }));
  
    

});