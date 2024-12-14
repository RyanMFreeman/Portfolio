//Hamburger menu
const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');


menu.onclick = () => {
    menu.classList.toggle('bx-x');

    nav.classList.toggle('active');
}

// Cursor glow effect
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
});


//Print resume function (Formats the resume content w/o styling for printing, opens a new window, and prompts the browser print function)
function printResume() {
    var resumeContent = document.getElementById('resume').innerHTML;
    console.log(resumeContent); 
    
    var printWindow = window.open('', '_blank', 'width=1200,height=800');
    

    printWindow.document.write(`
        <html>
            <head>
            </head>
            <body>
                ${resumeContent}
                <script>
                    window.onload = function() {
                        window.print();
                    };
                </script>
            </body>
        </html>
    `);
    

    printWindow.document.close();
}


//Text validation, and email sending functionality

document.addEventListener('DOMContentLoaded', function() {

    emailjs.init("jx9dKObGnT_eMBueC");


    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let isValid = true;

        // Validate name
        const fullName = document.getElementById("fullName").value;
        if (!fullName) {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("nameError").style.display = "none";
        }

        // Validate email
        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        // Validate company
        const company = document.getElementById("company").value;
        if (!company) {
            document.getElementById("companyError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("companyError").style.display = "none";
        }

        // Validate message
        const message = document.getElementById("message").value;
        if (!message) {
            document.getElementById("messageError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("messageError").style.display = "none";
        }

        // Validate qualities
        const qualities = document.getElementById("qualities").value;
        if (!qualities) {
            document.getElementById("qualitiesError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("qualitiesError").style.display = "none";
        }

        // Validate technologies
        const technologies = document.getElementById("technologies").value;
        if (!technologies) {
            document.getElementById("technologiesError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("technologiesError").style.display = "none";
        }

        // Validate referral
        const referral = document.getElementById("referral").value;
        if (!referral) {
            document.getElementById("referralError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("referralError").style.display = "none";
        }

        // send email w/ EmailJS
        if (isValid) {
            const formData = {
                fullName: fullName,
                email: email,
                company: company,
                qualities: qualities,
                technologies: technologies,
                referral: referral,
                message: message
            };


            emailjs.send("service_pgqcgm5", "template_vil5s6c", formData)
                .then(function(response) {
                    console.log("Success:", response);
                    alert("Your message has been sent successfully!");
                    document.getElementById("contactForm").reset();
                }, function(error) {
                    console.log("Error:", error);
                    alert("Oops! Something went wrong. Please try again.");
                });
        }
    });
});

  