const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;


// const Button = ({
//   label,
//   iconURL = "",
//   backgroundColor = "bg-red-500",
//   textColor = "text-white",
//   borderColor = "border-red-500",
//   fullWidth = false,
// }) => {

//   return (
//     <button
//       className={`relative z-50 p-4 border border-black ${backgroundColor} ${textColor} ${borderColor} ${fullWidth ? "w-full" : ""}`}
//     >
//       {label}

//       {iconURL && (
//         <img
//           src={iconURL}
//           alt="button icon"
//           className="ml-2 w-5 h-5"
//         />
//       )}
//     </button>
//   );
// };

// export default Button;
