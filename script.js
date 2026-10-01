// script.js


// ==============================
// LOADING
// ==============================

window.addEventListener("load", function() {

    setTimeout(function() {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 900);

});



// ==============================
// DANH SÁCH TRÁI TIM
// ==============================

const icons = [

    "❤️",
    "💗",
    "💖",
    "💕",
    "💓",
    "💞"

];



// ==============================
// TẠO TRÁI TIM BAY
// ==============================

function spawnHearts(x, y, count = 20) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "flying";


        heart.textContent =
            icons[
                Math.floor(
                    Math.random() *
                    icons.length
                )
            ];


        heart.style.setProperty(
            "--sx",
            x + "px"
        );


        heart.style.setProperty(
            "--sy",
            y + "px"
        );


        heart.style.setProperty(
            "--x",
            (
                (Math.random() - .5)
                * 500
            ) + "px"
        );


        heart.style.setProperty(
            "--y",
            (
                -100 -
                Math.random() * 430
            ) + "px"
        );


        heart.style.animationDuration =
            (
                1.5 +
                Math.random() * 1.3
            ) + "s";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => heart.remove(),
            3000
        );

    }

}



// ==============================
// TẠO LẤP LÁNH
// ==============================

function sparkle(count = 25) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        const spark =
            document.createElement("div");


        spark.className =
            "spark";


        spark.style.left =
            Math.random() * 100 + "vw";


        spark.style.top =
            Math.random() * 100 + "vh";


        document.body.appendChild(
            spark
        );


        setTimeout(
            () => spark.remove(),
            1400
        );

    }

}



// ==============================
// HIỆU ỨNG TRÁI TIM
// ==============================

function burst() {

    spawnHearts(
        window.innerWidth / 2,
        window.innerHeight / 2,
        35
    );

    sparkle(35);

}



// ==============================
// CLICK TRÁI TIM
// ==============================

document
    .getElementById("bigHeart")
    .addEventListener(
        "click",
        function() {

            burst();

            openModal();

            ping();

        }
    );



// ==============================
// NÚT YÊU THƯƠNG
// ==============================

document.getElementById("loveBtn")
    .addEventListener(
        "click",
        function() {

            burst();

            ping();

        }
    );



// ==============================
// LỜI NHẮN NGẪU NHIÊN
// ==============================

const messages = [

    "Mong Nhím luôn có thật nhiều niềm vui mỗi ngày 🌷",

    "Hy vọng hôm nay của em có thêm một chút dễ thương ✨",

    "Chúc những điều tốt đẹp luôn tìm được đường đến với em 💗",

    "Một ngày bình thường cũng có thể trở nên thật đáng nhớ 🌙",

    "Gửi Nhím một chút ấm áp và thật nhiều nụ cười 💕"

];


document
    .getElementById("wishBtn")
    .addEventListener(
        "click",
        function() {

            const text =
                messages[
                    Math.floor(
                        Math.random() *
                        messages.length
                    )
                ];


            document
                .getElementById("wishText")
                .textContent =
                text;


            sparkle(15);

        }
    );



// ==============================
// BỨC THƯ
// ==============================

const letter = `Gửi Nhím 💌,

Có những lời đôi khi khó nói thành tiếng,
nên tớ để chúng ở đây.

Mong em luôn được vui vẻ,
được trân trọng và có thật nhiều
khoảnh khắc khiến em mỉm cười.

Cảm ơn em vì đã xuất hiện
và làm cho những điều nhỏ bé
cũng trở nên đáng nhớ hơn. 💗`;


let letterOpened = false;


document
    .getElementById("letterBtn")
    .addEventListener(
        "click",
        function() {

            if (letterOpened) {

                return;

            }


            letterOpened = true;


            this.textContent =
                "Đã mở 💌";


            let i = 0;


            const timer =
                setInterval(
                    function() {

                        document
                            .getElementById(
                                "letterText"
                            )
                            .textContent +=
                            letter[i++] || "";


                        if (
                            i >=
                            letter.length
                        ) {

                            clearInterval(
                                timer
                            );

                        }

                    },
                    28
                );

        }
    );



// ==============================
// DARK MODE
// ==============================

document
    .getElementById("themeBtn")
    .addEventListener(
        "click",
        function() {

            document
                .body
                .classList
                .toggle("dark");


            if (
                document
                    .body.classList
                    .contains("dark")
            ) {

                this.textContent =
                    "☀️";

            } else {

                this.textContent =
                    "🌙";

            }

        }
    );



// ==============================
// ÂM THANH
// ==============================

let audioCtx = null;


function ping() {

    try {

        audioCtx ||=
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        const oscillator =
            audioCtx.createOscillator();


        const gain =
            audioCtx.createGain();


        oscillator.frequency.value =
            520;


        oscillator.type =
            "sine";


        gain.gain.value =
            .035;


        oscillator.connect(gain);

        gain.connect(
            audioCtx.destination
        );


        oscillator.start();


        gain.gain
            .exponentialRampToValueAtTime(
                .001,
                audioCtx.currentTime + .35
            );


        oscillator.stop(
            audioCtx.currentTime + .35
        );

    }

    catch (error) {

    }

}



// ==============================
// NÚT ÂM THANH
// ==============================

document
    .getElementById("soundBtn")
    .addEventListener(
        "click",
        function() {

            ping();

            this.textContent =
                "🔊";


            setTimeout(
                () => {
                    this.textContent =
                        "🔇";
                },
                1200
            );

        }
    );



// ==============================
// MODAL
// ==============================

function openModal() {

    document
        .getElementById("modal")
        .classList
        .add("show");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList
        .remove("show");

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );



document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target.id ===
                "modal"
            ) {

                closeModal();

            }

        }
    );



// ==============================
// THÊM TRÁI TIM
// ==============================

document
    .getElementById("moreHeart")
    .addEventListener(
        "click",
        function() {

            spawnHearts(
                window.innerWidth / 2,
                window.innerHeight * .55,
                30
            );

            sparkle(20);

        }
    );