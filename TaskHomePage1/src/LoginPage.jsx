// import React, { useState } from "react";

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email && password && username) {
//       onLogin;
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div>
    
//       <form onSubmit={handleSubmit}>
//         <div>
       
//           <input type="username"  placeholder="Username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} required/><br/><br/>
//           <input type="email"  placeholder="Email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
//           <input type="password"  placeholder="Password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
         
//         </div>
//         <div>
          
//         </div>
//         <button >Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import Style from "./User.module.css"; 

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && email && password) {
//       onLogin(); // Correctly invoke the `onLogin` function
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
    
//     <div  className={Style.login-page}>
//        <form className={Style.login-form } onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <br />
//           <br />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <br />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <br />
//           <br />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import styles from "./User.module.css"; 

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      onLogin(); 
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={styles["login-page"]}>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
