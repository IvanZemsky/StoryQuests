type Props = {}

const Loading = ({}: Props) => {
   return (
      <div
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <p>...Loading...</p>
      </div>
   )
}

export default Loading
