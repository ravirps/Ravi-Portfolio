jQuery(document).ready(function($) {

    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function(e) {
        e.preventDefault();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 62
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    $('.carousel').carousel({
        interval: 3500
    });

    // JavaScript Chart
    var doughnutData = [{
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

    // flexbox project
    function toggleopen() {
        this.classList.toggle('open');
    }
    let panels = document.querySelectorAll(".panel");
    panels.forEach(panel => {
        // panel.addEventListener('click', toggleopen);
        panel.addEventListener("mouseover", toggleopen)
        panel.addEventListener('mouseout', toggleopen)
    })

    // Bootstrap Chart
    var doughnutData = [{
            value: 90,
            color: "#1abc9c"
        },
        {
            value: 10,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("c").getContext("2d")).Doughnut(doughnutData);

    // WordPress Chart
    var doughnutData = [{
            value: 65,
            color: "#1abc9c"
        },
        {
            value: 35,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("sql").getContext("2d")).Doughnut(doughnutData);

    // HTML Chart
    var doughnutData = [{
            value: 80,
            color: "#1abc9c"
        },
        {
            value: 20,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

    // Photoshop Chart
    var doughnutData = [{
            value: 70,
            color: "#1abc9c"
        },
        {
            value: 30,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);

    // Illustrator Chart
    var doughnutData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("nodejs").getContext("2d")).Doughnut(doughnutData);
    var doughnutData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("git").getContext("2d")).Doughnut(doughnutData);
    var doughnutData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);
    var doughnutData = [{
            value: 50,
            color: "#1abc9c"
        },
        {
            value: 50,
            color: "#ecf0f1"
        }
    ];
    var myDoughnut = new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(doughnutData);

    $('#submitbutton').click(() => {
        let submitButton = this
        submitButton.disabled = true
        submitButton.html = "Sending"
        let message = "name: " + $('#contact-name').val() + "  ";
        message += "Email: " + $('#contact-email').val() + "  ";
        message += "subject: " + $('#contact-subject').val() + "  ";
        message += "message: " + $('#contact-message').val() + "  ";

        $.get("/sendmessage?message=" + message, function(data) {
                console.log(data)
                    // alert( "message send to node" );
            })
            .done(function(data) {
                console.log(data)
                alert("a whatsapp message has been sent to Ravi");
                $('#contact-name').val('')
                $('#contact-email').val('')
                $('#contact-subject').val('')
                $('#contact-message').val('')
            })
            .fail(function(data) {
                console.log(data)
                alert("an  error occured while sending the message better contact him on his phone");
            })
            .always(function() {
                submitButton.disabled = false
                submitButton.html = "Send Message"
            });

    });
});