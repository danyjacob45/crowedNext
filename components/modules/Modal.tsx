import { ReactNode, useEffect } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
  onClose?: Function;
  title: string;
};

const Modal = ({ children, title, onClose }: Props) => {
  useEffect(() => {
    showAnimation();
  }, []);

  const showAnimation = () => {
    const tl = gsap.timeline();

    tl.to(".modal-container", 0.3, {
      opacity: 1,
    })
      .to(".modal-content", 0.3, {
        opacity: 1,
      })
      .from(".modal-content", 0.4, {
        y: 30,
        skewY: 3,
        delay: -0.3,
        ease: "Expo.InOut",
      });
  };

  const closeModal = () => {
    const tl = gsap.timeline();

    tl.to(".modal-content", 0.4, {
      opacity: 0,
    }).to(".modal-contentainer", 0.1, {
      opacity: 0,
      delay: -0.3,
      onComplete: () => {
        if (onClose) onClose();
      },
    });
  };

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="card px-md-5 py-md-4">
          <div className="card-header d-flex justify-content-between">
            <h2 className="ff-bold fs-16 mb-3 text-center">{title}</h2>
            <span onClick={closeModal} className="cp">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <line
                  x1="0.353553"
                  y1="0.646447"
                  x2="16.3536"
                  y2="16.6464"
                  stroke="black"
                />
                <line
                  x1="16.342"
                  y1="1.36477"
                  x2="0.341972"
                  y2="16.3648"
                  stroke="black"
                />
              </svg>
            </span>
          </div>

          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
