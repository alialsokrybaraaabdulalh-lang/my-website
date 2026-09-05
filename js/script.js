// زر ابدأ الآن

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    document
        .getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// نموذج التواصل

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        // منع إعادة تحميل الصفحة
        event.preventDefault();


        const name =
            document.getElementById("name").value;


        alert(
            "شكراً " +
            name +
            "، تم استلام رسالتك بنجاح."
        );


        // مسح البيانات بعد الإرسال
        contactForm.reset();

    }
);