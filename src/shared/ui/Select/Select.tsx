"use client";

import { HTMLAttributes, useState } from "react";
import { Button } from "../Button/Button";
import { OpenArrowBottomIcon } from "../icons/OpenArrowBottomIcon";
import styles from "./Select.module.scss";

export const Select = ({ className, children, ...attributes }: HTMLAttributes<HTMLDivElement>) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpenClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className={[styles.wrap, className].join(" ")} {...attributes}>
         <Button
            onClick={handleOpenClick}
            defaultHover={false}
            variant="filled"
            rightIcon={<OpenArrowBottomIcon />}
         >
            Length
         </Button>
         {isOpen && <div className={styles.options}>{children}</div>}
      </div>
   );
};
