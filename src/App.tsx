import { Route, Routes } from "react-router-dom";
import Sub from "./views/sub";
import Main from "./views/main";
import { useStyles } from "./style";

const App = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/anchor" element={<Sub />}></Route>
      </Routes>
    </div>
  );
};

export default App;
