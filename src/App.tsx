import AppRouter from "app/routers/AppRouter";
import { selectError } from "features/error/error-slice";
import { useAppSelector } from "hooks/redux";

function App() {
  const { isError, ...error } = useAppSelector(selectError);

  if (isError) {
    alert(`Error: ${error.errorMessage}\nCode: ${error.errorCode}`);
  }

  return <AppRouter />;
}

export default App;
