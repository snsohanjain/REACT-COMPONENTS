interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};
export default Button;

//BUTTON
// function App() {
//     return (
//       <div>
//         <Button onClick={() => console.log("Clicked")}>My Button</Button>
//       </div>
//     );
//   }
