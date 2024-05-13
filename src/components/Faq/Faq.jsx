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
              What is a group study website?
            </div>
            <div className="collapse-content">
              <p>
                A group study website is an online platform designed to
                facilitate collaborative learning among students. It allows
                users to create or join study groups, collaborate on shared
                documents or projects, schedule study sessions, and communicate
                with group members through chat or video conferencing.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I benefit from using a group study website?
            </div>
            <div className="collapse-content">
              <p>
                Collaboration: Work with classmates on assignments, projects, or
                exam preparation in a collaborative and interactive environment.
              </p>
              <p className="pt-2">
                Peer support: Receive assistance and support from peers who may
                have expertise in certain subjects or topics.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can we mark each other assignment?
            </div>
            <div className="collapse-content">
              <p>Thats what it is! Let's Start.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can we create assignment?
            </div>
            <div className="collapse-content">
              <p>Yes! Give it a try.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can we mark each other assignment?
            </div>
            <div className="collapse-content">
              <p>Thats what it is! Let's Start.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
