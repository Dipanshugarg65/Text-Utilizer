// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
//         <div className="col-md-4 d-flex align-items-center">
//           <span className="text-muted">
//             <h3 align="center"> Copyright © 2023 Text-Utilizer</h3>
//           </span>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer
import React from "react";

export default function Footer() {
  return (
    <div className="foot">
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          position: "absolute",
          fontSize: "15px",
          backgroundColor: "#8a8a8a",
          padding: "21px",
          left: "0",
        }}
      >
        <strong>Copyright © Text-Utilizer</strong>
      </footer>
    </div>
  );
}