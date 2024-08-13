import './App.css';
import Box from "./component/Box";

function BoxPage() {
  return (
    <div className="App">
      <Box name="보라돌이" num="1"/>
      <Box name="뚜비" num="2"/>
      <Box name="나나" num="3"/>
      <Box name="뽀" num="4"/>
    </div>
  );
}

export default BoxPage;
