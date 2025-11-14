import Header from "@/components/layout/Header";

const Home: React.FC = () => {
    return(
        <div className="flex flex-col h-screen">
          {/* header from component */}
          <Header /> 

          {/* main body */}
          <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div>
              <h1 className="text-5xl font-bold">Welcom to our Application</h1>
              <p className="mt-4 text-white text-xl">We're glad you're here. Explore and enjoy your experience.</p>
              <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</button>
            </div>
          </main>

        </div>
    )
}

export default Home