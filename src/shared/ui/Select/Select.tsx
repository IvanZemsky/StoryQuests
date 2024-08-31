"use client";

import { HTMLAttributes, useState } from "react";
import { Button } from "../Button/Button";
import {Fade} from "../Transitions/Fade/Fade"
import { OpenArrowBottomIcon } from "../icons/OpenArrowBottomIcon";
import styles from "./Select.module.scss";

export const Select = ({ className, children, ...attributes }: HTMLAttributes<HTMLDivElement>) => {
   const [isOpen, setIsOpen] = useState(false);

   console.log(isOpen)

   const handleOpenClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className={[styles.wrap, className, isOpen && styles.opened].join(" ")} {...attributes}>
         <Button
            onClick={handleOpenClick}
            defaultHover={false}
            variant="filled"
            rightIcon={<OpenArrowBottomIcon />}
         >
            Length
         </Button>
         <Fade inProp={isOpen} timeout={300}>
            <div className={styles.options}>{children}</div>
         </Fade>
      </div>
   );
};
