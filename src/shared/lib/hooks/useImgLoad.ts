import { ChangeEvent, useState, useEffect } from "react"

/** */
export const useImgLoad = (
   defaultValue = "",
   onError: ((...args: any) => any) | undefined,
   onChange: ((...args: any) => any) | undefined,
) => {
   const [imgLink, setImgLink] = useState(defaultValue)
   const [isError, setIsError] = useState(false)
   const [isImageLoaded, setIsImageLoaded] = useState(false)
   const [pendingLoad, setPendingLoad] = useState(false)

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setImgLink(event.target.value)
      setIsError(false)
      setIsImageLoaded(false)
      setPendingLoad(true)
   }

   console.log(pendingLoad)

   const handleImageLoad = () => {
      setIsError(false)
      setIsImageLoaded(true)
      setPendingLoad(false)
   }

   const handleImageError = () => {
      setIsError(true)
      setIsImageLoaded(false)
      setPendingLoad(false)
      onError && onError()
   }

   const resetStateIfPending = () => {
      if (pendingLoad) {
         console.log("reset")
         onError && onError()
      }
   }

   useEffect(() => {
      resetStateIfPending()
   }, [])

   useEffect(() => {
      if (isImageLoaded) {
         onChange &&
            onChange({
               target: { value: imgLink } as EventTarget & HTMLInputElement,
            } as ChangeEvent<HTMLInputElement>)
      }
   }, [isImageLoaded, imgLink, onChange])

   return {
      setImgLink,
      imgLink,
      isError,
      isImageLoaded,
      handleInputChange,
      handleImageLoad,
      handleImageError,
      resetStateIfPending,
   }
}
