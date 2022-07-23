import React, { useEffect } from 'react'
import { gsap } from "gsap";

import image1 from 'assets/img/card/card-blue.png'
import image2 from 'assets/img/card/card-grey.png'
import image3 from 'assets/img/card/card-black.png'

import './Slider.css'

export const Slider = (props) => {

    useEffect(() => {

        const myTimer = setInterval(() => {
            if (!document.getElementById('timer').classList.contains('pause'))
                buttons.next.click()
        }, 7000);

        const buttons = {
            prev: document.querySelector(".btn--left"),
            next: document.querySelector(".btn--right"),
        };
        const cardsContainerEl = document.querySelector(".cards__wrapper");
        const cardInfosContainerEl = document.querySelector(".info__wrapper");

        buttons.next.addEventListener("click", () => swapCards("right"));
        buttons.prev.addEventListener("click", () => swapCards("left"));
        buttons.next.addEventListener("mouseover", () => document.getElementById('timer').classList.add('pause'))
        buttons.next.addEventListener("mouseout", () => document.getElementById('timer').classList.remove('pause'))
        buttons.prev.addEventListener("mouseover", () => document.getElementById('timer').classList.add('pause'))
        buttons.prev.addEventListener("mouseout", () => document.getElementById('timer').classList.remove('pause'))

        function swapCards(direction) {
            const currentCardEl = cardsContainerEl.querySelector(".current--card");
            const previousCardEl = cardsContainerEl.querySelector(".previous--card");
            const nextCardEl = cardsContainerEl.querySelector(".next--card");

            changeInfo(direction);
            swapCardsClass();

            removeCardEvents(currentCardEl);

            function swapCardsClass() {
                currentCardEl.classList.remove("current--card");
                previousCardEl.classList.remove("previous--card");
                nextCardEl.classList.remove("next--card");

                currentCardEl.style.zIndex = "50";

                if (direction === "right") {
                    previousCardEl.style.zIndex = "20";
                    nextCardEl.style.zIndex = "30";

                    currentCardEl.classList.add("previous--card");
                    previousCardEl.classList.add("next--card");
                    nextCardEl.classList.add("current--card");

                } else if (direction === "left") {
                    previousCardEl.style.zIndex = "30";
                    nextCardEl.style.zIndex = "20";

                    currentCardEl.classList.add("next--card");
                    previousCardEl.classList.add("current--card");
                    nextCardEl.classList.add("previous--card");

                }
            }
        }

        function changeInfo(direction) {
            let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
            let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
            let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

            gsap.timeline()
                .call(() => {
                    swapInfosClass(direction);
                })
                .call(() => initCardEvents())
                .fromTo(
                    direction === "right"
                        ? nextInfoEl.querySelectorAll(".text")
                        : previousInfoEl.querySelectorAll(".text"),
                    {
                        opacity: 0,
                        translateY: "40px",
                    },
                    {
                        duration: 0.4,
                        stagger: 0.1,
                        translateY: "0px",
                        opacity: 1,
                    }
                )
                .to([buttons.prev, buttons.next], {
                    duration: 0.2,
                    opacity: 1,
                    pointerEvents: "all",
                });

            function swapInfosClass() {
                currentInfoEl.classList.remove("current--info");
                previousInfoEl.classList.remove("previous--info");
                nextInfoEl.classList.remove("next--info");

                if (direction === "right") {
                    currentInfoEl.classList.add("previous--info");
                    nextInfoEl.classList.add("current--info");
                    previousInfoEl.classList.add("next--info");
                } else if (direction === "left") {
                    currentInfoEl.classList.add("next--info");
                    nextInfoEl.classList.add("previous--info");
                    previousInfoEl.classList.add("current--info");
                }
            }
        }

        function updateCard(e) {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const centerPosition = {
                x: box.left + box.width / 2,
                y: box.top + box.height / 2,
            };
            let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
            gsap.set(card, {
                "--current-card-rotation-offset": `${angle}deg`,
            });

            const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
            gsap.set(currentInfoEl, {
                rotateY: `${angle}deg`,
            });
        }

        function resetCardTransforms(e) {
            const card = e.currentTarget;
            const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
            gsap.set(card, {
                "--current-card-rotation-offset": 0,
            });
            gsap.set(currentInfoEl, {
                rotateY: 0,
            });
        }

        function initCardEvents() {
            const currentCardEl = cardsContainerEl.querySelector(".current--card");
            currentCardEl.addEventListener("pointermove", updateCard);
            currentCardEl.addEventListener("pointerout", (e) => {
                resetCardTransforms(e);
            });
        }

        initCardEvents();

        function removeCardEvents(card) {
            card.removeEventListener("pointermove", updateCard);
        }

        function init() {

            gsap.timeline()
                .to(cardsContainerEl.children, {
                    delay: 0.1,
                    duration: 0.5,
                    stagger: {
                        ease: "power4.inOut",
                        from: "right",
                        amount: 0.1,
                    },
                    "--card-translateY-offset": "0%",
                })
                .to(cardInfosContainerEl.querySelector(".current--info"), {
                    delay: 0.5,
                    duration: 0.4,
                    stagger: 0.1,
                    opacity: 1,
                    translateY: 0,
                })
                .to(
                    [buttons.prev, buttons.next],
                    {
                        duration: 0.4,
                        opacity: 1,
                        pointerEvents: "all",
                    },
                    "-=0.4"
                );
        }

        const initSlider = () => {
            gsap.set([buttons.prev, buttons.next], {
                pointerEvents: "none",
                opacity: "0",
            });

            gsap.timeline()
                .call(() => init());
        };

        initSlider();

        return () => {
            buttons.next.removeEventListener("click", () => swapCards("right"));
            buttons.prev.removeEventListener("click", () => swapCards("left"));
            clearInterval(myTimer);
        }
    })

    return (
        <div className="slider_container">
            <input type="hidden" id="timer" />
            <div className="cardList">
                <button className="cardList__btn btn--left" onClick={() => props.clickHandler('left')}>
                    <span>left</span>
                </button>

                <div className="cards__wrapper">
                    <div className="card current--card">
                        <div className="card__image">
                            <img src={image1} alt="" />
                        </div>
                    </div>

                    <div className="card next--card">
                        <div className="card__image">
                            <img src={image2} alt="" />
                        </div>
                    </div>

                    <div className="card previous--card">
                        <div className="card__image">
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </div>

                <button className="cardList__btn btn--right" onClick={() => props.clickHandler('right')}>
                    <span>right</span>
                </button>
            </div>

            <div className="infoList">
                <div className="info__wrapper">
                    <div className="info current--info">
                    </div>

                    <div className="info next--info">
                    </div>

                    <div className="info previous--info">
                    </div>
                </div>
            </div>

            <svg className="icons" style={{ display: "none" }}>
                <symbol id="arrow-left" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <polyline points='328 112 184 256 328 400'
                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }} />
                </symbol>
                <symbol id="arrow-right" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <polyline points='184 112 328 256 184 400'
                        style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }} />
                </symbol>
            </svg>
        </div>
    )
}