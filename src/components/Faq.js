import React, { useEffect } from "react";
import '../styles/Faq.css';

function Faq() {
    const faq = async () => {

        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
        accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {
                const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
                if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                    currentlyActiveAccordionItemHeader.classList.toggle("active");
                    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
                }

                accordionItemHeader.classList.toggle("active");
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                }
                else {
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    };
    useEffect(() => {
        faq();
    }, []);
    return (
        <div>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-item-header">
                        ¿Lorem ipsum dolor sit amet?
                    </div>
                    <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-item-header">
                        ¿Lorem ipsum dolor sit amet?
                    </div>
                    <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-item-header">
                        ¿Lorem ipsum dolor sit amet?
                    </div>
                    <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-item-header">
                        ¿Lorem ipsum dolor sit amet?
                    </div>
                    <div className="accordion-item-body">
                        <div className="accordion-item-body-content">
                            Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Faq;