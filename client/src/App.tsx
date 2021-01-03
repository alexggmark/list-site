import { Providers } from "./Providers";
import { Test, LoginApp } from "./components/Test";

export const App = () => {
  return (
    <Providers>
      <h1>Testing</h1>
      <Test />
      <LoginApp />
    </Providers>
  )
}
