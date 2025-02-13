"use client"

import styles from "./styles.module.scss"
import UploadIcon from "@/shared/assets/icons/upload.svg"
import { ChangeEvent, ComponentProps, forwardRef, Ref } from "react"
import { TextInput } from "../TextInput"
import { useDebounce, useImgLoad } from "../../lib"
import cn from "classnames"

type Props = {
   label?: string
   value?: string
   onError?: (...args: any) => any
} & ComponentProps<"input">

export const ImageLoad = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
   const { label, className, onChange, onError, defaultValue, ...attributes } = props

   const { imgLink, isError, handleInputChange, handleImageLoad, handleImageError } =
      useImgLoad(defaultValue as string, onError, onChange)

   const isImg = imgLink && !isError
   const isDefault = !imgLink || isError

   const handleChange = useDebounce((event: ChangeEvent<HTMLInputElement>) => {
      handleInputChange(event)
      onChange && onChange(event)
   }, 600)

   return (
      <div className={cn(styles.load, className)}>
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
               // eslint-disable-next-line @next/next/no-img-element
               <img
                  src={imgLink}
                  alt={label || ""}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
               />
            )}
         </div>
      </div>
   )
})

ImageLoad.displayName = "ImageLoad"
