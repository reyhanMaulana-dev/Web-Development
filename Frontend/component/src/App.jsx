import Button from "./components/atoms/Button"

function App() {

  return (
    <div className="flex flex-col min-h-screen items-center px-12 py-8 gap-5">
      <h1 className="font-bold text-4xl text-black">React Component</h1>
      <Button>BUTTON</Button>
      <Button disabled>BUTTON</Button>
      <Button variant="secondary">BUTTON</Button>
      <Button variant="secondary" disabled>BUTTON</Button>

    </div>
  )
}

export default App
