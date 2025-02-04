import Button from "./components/atoms/Button"
import CardLayout from "./components/organisms/CardLayout"

function App() {

  return (
    <div className="flex flex-col min-h-screen items-center px-12 py-8 gap-5">
      <h1 className="font-bold text-4xl text-black">React Component</h1>
      <div className="flex flex-col gap-4">
        <Button>BUTTON</Button>
        <Button disabled>BUTTON</Button>
        <Button variant="secondary">BUTTON</Button>
        <Button variant="secondary" disabled>BUTTON</Button>
      </div>
      <CardLayout disabled>
        <div className="w-60 h-28 flex justify-center items-center">Content Area</div>
      </CardLayout>

      <CardLayout>
        <div className="w-28 h-60 flex justify-center items-center">Content Area</div>
      </CardLayout>
    </div>
  )
}

export default App
