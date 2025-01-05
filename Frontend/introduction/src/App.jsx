import Button from "./components/atoms/Button"
import ButtonPrimary from "./components/atoms/ButtonPrimary"
import ButtonSecondary from "./components/atoms/ButtonSecondary"

function App() {
  return (
    <div className="flex flex-col items-center h-screen gap-5">
      <h1 className='text-3xl font-bold'>Hello World</h1>
      <Button variant={ "primary" } > 1 </Button>
      <Button variant={ "secondary" } > 2 </Button>
      <ButtonPrimary text= { "3" } />
      <ButtonSecondary> 4 </ButtonSecondary>
    </div>
  )
}

export default App
