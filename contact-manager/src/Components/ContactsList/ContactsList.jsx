import React, { useState, useRef, useEffect } from "react";
import "./ContactsList.scss";

function ContactsList() {
  const [active, setActive] = useState("all");

  const tabIndicatorRef = useRef();
  const activeRef = useRef();

  const setTabIndicatorStyle = (currentActiveElem) => {
    const widthOfElem = currentActiveElem.offsetWidth;
    const xPosOfElem = currentActiveElem.offsetLeft;
    tabIndicatorRef.current.style.width = `${widthOfElem}px`;
    tabIndicatorRef.current.style.left = `${xPosOfElem}px`;
  };

  useEffect(() => {
    setTabIndicatorStyle(activeRef.current);
  });

  const handleClick = (e) => {
    const clickedElemValue = e.target.getAttribute("data-value");
    setActive(clickedElemValue);
    setTabIndicatorStyle(e.target);
  };

  return (
    <div className="contactsList">
      <ul className="category-tabs">
        <li
          ref={active == "all" ? activeRef : null}
          onClick={handleClick}
          data-value="all"
          className={active == "all" ? "active tab-item" : "tab-item"}
        >
          all
        </li>
        <li
          ref={active == "colleague" ? activeRef : null}
          onClick={handleClick}
          data-value="colleague"
          className={active == "colleague" ? "active tab-item" : "tab-item"}
        >
          colleague
        </li>
        <li
          ref={active == "relative" ? activeRef : null}
          onClick={handleClick}
          data-value="relative"
          className={active == "relative" ? "active tab-item" : "tab-item"}
        >
          relative
        </li>
        <li
          ref={active == "friends" ? activeRef : null}
          onClick={handleClick}
          data-value="friends"
          className={active == "friends" ? "active tab-item" : "tab-item"}
        >
          friends
        </li>
        <li
          ref={active == "others" ? activeRef : null}
          onClick={handleClick}
          data-value="others"
          className={active == "others" ? "active tab-item" : "tab-item"}
        >
          others
        </li>
        <div ref={tabIndicatorRef} className="tab-indicator"></div>
      </ul>
    </div>
  );
}

export default ContactsList;
