import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/AppRouter"

export const JournalApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}
