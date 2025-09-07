import Button from "./components/Button.jsx"
import CardLayout from "./components/CardLayout.jsx"

function App() {
  
  return (
    <div className="flex flex-col min-h-screen items-center p-8 gap-10">
      <h1 className="font-bold text-4xl">React Component</h1>
      <div className="flex flex-col gap-5">
        <Button>BUTTON</Button>
        <Button variant="secondary">BUTTON</Button>
      </div>
        <CardLayout>
          <div className="w-56 h-28 flex items-center justify-center border">
            Content Area
          </div>
        </CardLayout>
        <CardLayout>
          <div className="w-28 h-56 flex items-center justify-center border">
            Content Area
          </div>
        </CardLayout>
    </div>
  )
}

export default App
