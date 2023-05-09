// import clsx from "clsx";
// import css from "Test.module.css";

// export function Test({ variant, outlined, elevated, children }) {
//     return (
//         <p
//             className={clsx(css[variant],
//                 {
//                     [css.isOutlined]: outlined,
//                     [css.isElevated]: elevated,
//                 })}
//         >
//             {children}</p>);
// };





//  Бібліотека clsx

// import clsx from "clsx";
// import "Test.css";

// export function Test({ variant, outlined, elevated, children }) {
//     return (
//         <p
//             className={clsx(
//                 "alert",
//                 variant,
//                 {
//                 "is-outlined": outlined,
//                 "is-elevated":elevated
//                 }
//     // outlined && "is-outlined",
//     // elevated && "is-elevated"
//             )}
//         >
//         {children}</p>);
// };






//  ВАНІЛЬНИЙ  CSS
// import "Test.css";

// export function Test({ variant, outlined, elevated, children }) {
//     // console.log(variant);

//     const className = ["alert", variant];
//     // console.log(className.join(" "));
//     console.log(variant);

//     if (outlined) (className.push("is-outlined"));
//     if (elevated) (className.push("is-elevated"));

//     return (<p className={className.join(" ")} >
//         {children}</p>);
// };





//  ВБУДОВАНІ СТИЛІ
// const alertStyles = {
//     margin: 8,
//     padding: "12px 16px",
//     borderRadius: 4,
//     backgroundColor: "gray",
//     color: "white",
// };

// export function Test ({ variant, children }){
//     return (<p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//         {children}</p>);
// };


// const getBgColor = variant => {
//     switch (variant) {
//         case "info": return "blue";
//         case "success": return "green";
//         case "error": return "red";
//         case "warning": return "orange";
//         default: return "grey";
//     }
// };

