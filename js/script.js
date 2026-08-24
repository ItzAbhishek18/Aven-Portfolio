/* =========================================================
   AVEN PORTFOLIO — INTERACTION SYSTEM
========================================================= */

const root = document.documentElement;

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");


/* =========================================================
   CURSOR MOVEMENT
========================================================= */

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;


    /* Ambient light */

    root.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    root.style.setProperty(
        "--mouse-y",
        `${y}px`
    );


    /* Cursor dot */

    cursorDot.style.left =
        `${x}px`;

    cursorDot.style.top =
        `${y}px`;


    /* Cursor ring */

    cursorRing.style.left =
        `${x}px`;

    cursorRing.style.top =
        `${y}px`;

});