import React from 'react';
import "./ourAdvantages.sass"

const OurAdvantages = () => {
    return (
        <section className={"our_advantages"}>
            <div className="container">
                <div className="our_advantages_content">
                    <div className="our_advantages_item high_quality">
                        <div className="our_advantages_item_content">
                            <div className={"title_our_advantages_item"}>
                                <img src="/image/shield-b.svg" alt=""/>
                                <h3>Висока якість</h3>
                            </div>
                            <p>Ми працюємо з виробниками, які дотримуються високих виробничих стандартів.</p>
                        </div>
                    </div>
                    <div className="our_advantages_item convenience_of_shopping">
                        <div className="our_advantages_item_content">
                            <div className={"title_our_advantages_item"}>
                                <img src="/image/hand-b.svg" alt=""/>
                                <h3>Зручність покупок</h3>
                            </div>
                            <p>Можливість замовляти товари з будь-якого місця і будь-який час</p>
                        </div>
                    </div>
                    <div className="our_advantages_item expert_knowledge">
                        <div className="our_advantages_item_content">
                            <div className={"title_our_advantages_item"}>
                                <img src="/image/best-employee-b.svg" alt=""/>
                                <h3>Експертні знання</h3>
                            </div>
                            <p>Ми експерти в цій справі та розуміємо потреби та вимоги професіоналів</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAdvantages;