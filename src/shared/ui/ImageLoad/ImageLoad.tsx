"use client"

import styles from "./ImageLoad.module.scss"
import { UploadIcon } from "./../icons/UploadIcon"
import { ChangeEvent, forwardRef, HTMLAttributes, Ref } from "react"
import { TextInput } from "../TextInput/TextInput"
import { useDebounce, useImgLoad } from "../../lib"

interface Props extends HTMLAttributes<HTMLInputElement> {
   label?: string
}

export const ImageLoad = forwardRef(
   ({ label, className, onChange, defaultValue, ...attributes }: Props, ref: Ref<HTMLInputElement>) => {
      const { imgLink, isError, handleInputChange, handleImageLoad, handleImageError } =
         useImgLoad(defaultValue as string)

         console.log(imgLink)

      const isImg = imgLink && !isError
      const isDefault = !imgLink || isError

      const handleChange = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
         handleInputChange(event)
         onChange && onChange(event)
      }, 600)

      return (
         <div className={[styles.load, className].join(" ")}>
            <TextInput
               placeholder="Image link"
               ref={ref}
               className={styles.input}
               onChange={handleChange}
               {...attributes}
            />
            <div className={styles.content}>
               {isDefault && (
                  <>
                     {!isError && <UploadIcon />}
                     {label && !isError && <p>{label}</p>}
                     {isError && (
                        <p>
                           Error
                           <br />
                           Please, try other link
                        </p>
                     )}
                  </>
               )}
               {isImg && (
                  <img
                     src={imgLink}
                     alt={label && ""}
                     onLoad={handleImageLoad}
                     onError={handleImageError}
                  />
               )}
            </div>
         </div>
      )
   },
)

ImageLoad.displayName = "ImageLoad"
