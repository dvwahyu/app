import  Turbolinks from 'turbolinks';


Turbolinks.start();

Turbolinks.setProgressBarDelay(0);


document.addEventListener("turbolinks:load", function() {

    $('.select2').select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Select an option'
        },
        theme: "bootstrap4",
        tags: true
    });

    $('[data-toggle="kt-tooltip"]').tooltip();

    var initScroll = function() {
        $('[data-scroll="true"]').each(function() {
            var el = $(this);
            KTUtil.scrollInit(this, {
                mobileNativeScroll: true,
                handleWindowResize: true,
                rememberPosition: (el.data('remember-position') == 'true' ? true : false),
                height: function() {
                    if (KTUtil.isInResponsiveRange('tablet-and-mobile') && el.data('mobile-height')) {
                        return el.data('mobile-height');
                    } else {
                        return el.data('height');
                    }
                }
            });
        });
    }

    initScroll();

    
})