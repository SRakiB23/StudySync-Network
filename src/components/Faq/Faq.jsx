import React from "react";

function Faq() {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl py-4">
        Frequently Asked Question
      </h2>
      <div className="max-w-7xl mx-auto md:flex gap-4 p-5">
        <div className="w-full">
          <img
            src="https://i.ibb.co/9wF3yQb/Young-man-raising-his-finger-to-ask-a-question.jpg"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
