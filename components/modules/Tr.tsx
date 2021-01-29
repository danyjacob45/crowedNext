import { ReactNode, useEffect } from "react";
import gsap from "gsap";

type Props = {
  children: ReactNode;
  classes?: string;
};

const Tr = ({ classes, children }: Props) => {
  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    const tl = gsap.timeline();

    setTimeout(() => {
      tl.from("td", 0.4, {
        opacity: 0,
        x: -10,
        ease: "Expo.InOut",
      }).to("td", 1, {
        opacity: 1,
        x: 0,
        ease: "Expo.InOut",
        stagger: {
          amount: 0.1,
        },
      });
    }, 100);
  };

  return <tr className={classes + " animate"}>{children}</tr>;
};

export default Tr;
