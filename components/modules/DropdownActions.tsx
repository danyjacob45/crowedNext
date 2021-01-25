import { ReactNode, useEffect, useState } from "react";
import gsap from "gsap";
import EventEmmiter from "../../helpers/EventEmitter";

const DropDownEvent = new EventEmmiter();

type Props = {
  children: ReactNode;
  btClass?: string;
};

const DropdownActions = ({ children, btClass }: Props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    DropDownEvent.on("hide_list", () => {
      setToggle(false);
    });
  }, []);

  const toggleAnimation = () => {
    console.log(DropDownEvent.events);
    DropDownEvent.trigger("hide_list");

    const tl = gsap.timeline();

    if (!toggle) {
      setToggle(true);
      tl.from(".dropdown-actions-list", 0.5, {
        opacity: 0,
        y: 10,
        skewY: -3,
        ease: "Expo.InOut",
      });
    } else {
      tl.to(".dropdown-actions-list", 0.2, {
        y: 10,
        opacity: 0,
        ease: "Expo.InOut",
      }).to(".dropdown-actions-list", 0, {
        y: 0,
        opacity: 1,
        onComplete: () => setToggle(false),
      });
    }
  };

  return (
    <div
      className={
        toggle ? "active dropdown-actions ml-2" : "dropdown-actions ml-2"
      }
    >
      <div className="text-right">
        <button onClick={toggleAnimation} className={btClass}>
          <svg width="12" height="3" viewBox="0 0 12 3" fill="none">
            <path
              d="M7.125 1.25C7.125 0.652344 6.59766 0.125 6 0.125C5.36719 0.125 4.875 0.652344 4.875 1.25C4.875 1.88281 5.36719 2.375 6 2.375C6.59766 2.375 7.125 1.88281 7.125 1.25ZM10.2188 0.125C9.58594 0.125 9.09375 0.652344 9.09375 1.25C9.09375 1.88281 9.58594 2.375 10.2188 2.375C10.8164 2.375 11.3438 1.88281 11.3438 1.25C11.3438 0.652344 10.8164 0.125 10.2188 0.125ZM1.78125 0.125C1.14844 0.125 0.65625 0.652344 0.65625 1.25C0.65625 1.88281 1.14844 2.375 1.78125 2.375C2.37891 2.375 2.90625 1.88281 2.90625 1.25C2.90625 0.652344 2.37891 0.125 1.78125 0.125Z"
              fill="#131515"
            />
          </svg>
        </button>
      </div>

      <ul className="dropdown-actions-list p-0">{toggle ? children : null}</ul>
    </div>
  );
};

export default DropdownActions;
