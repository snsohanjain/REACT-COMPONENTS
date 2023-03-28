import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        onClick={onClose}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

// Alert

// function App() {
//     return (
//       <Alert>
//         Hello <span>Sohan</span>
//       </Alert>
//     );
//   }

// Alert on Click Button and Close
// function App() {
//   const [alertVisable, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisable && (
//         <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   );
// }
