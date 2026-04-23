import Navbar from "./components/Navbar" 

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-barber-black text-barber-light">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}