import { Navbar } from "@/components";



export default function GeneralLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
      <>
        <Navbar/>
        <main className="flex flex-col p-24 items-center">
          <h1 className="text-lg">Hola mundo</h1>
              {children}
        </main>
      </>
    );
  }