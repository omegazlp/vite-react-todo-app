import Moonicon from "./icons/moon"
import Xicon from "./icons/xicon"


const App = () =>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-gray-200
    bg-no-repeat min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button> <Moonicon fill="#fff" /> </button>
        </div>
        
        <form className="flex items-center gap-4 bg-white overflow-hidden rounded-md py-4 px-4 mt-8">
          <span className="inline-block h-6 w-6 rounded-full border-2"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full text-gray-400 outline-none"/>
        </form>

      </header>
      <main className="container mx-auto px-4 mt-4 rounded-md">
        <div className="items-center gap-4 bg-white  rounded-s-md">
          <article className="flex items-center gap-4 justify-between border-b-2 px-4 border-b-gray-300 py-4">
            <button className="inline-block h-6 w-6 rounded-full border-2"></button>
            <p className="text-gray-300 grow">Complete Online Javascript Curse In Bluuweb</p>
            <button><Xicon/></button>
          </article>
          <article className="flex items-center gap-4 justify-between border-b-2 px-4 border-b-gray-300 py-4">
            <button className="inline-block h-6 w-6 rounded-full border-2"></button>
            <p className="text-black grow">Complete Online Javascript Curse In Bluuweb</p>
            <button><Xicon/></button>
          </article>
          <article className="flex items-center gap-4 justify-between border-b-2 px-4 border-b-gray-300 py-4">
            <button className="inline-block h-6 w-6 rounded-full border-2"></button>
            <p className="text-black grow">Complete Online Javascript Curse In Bluuweb</p>
            <button><Xicon/></button>
          </article>
          <article className="flex items-center gap-4 justify-between border-b-2 px-4 border-b-gray-300 py-4">
            <button className="inline-block h-6 w-6 rounded-full border-2"> </button>
            <p className="text-black grow">Complete Online Javascript Curse In Bluuweb</p>
            <button><Xicon/></button>
          </article>
        </div>
        

        <section className="flex items-center gap-4 justify-between border-b-2 px-4 rounded-b-md bg-white py-4">
          <span className='text-gray-400'>5 Items Left</span>
          <button className='text-gray-400'>Clear Complete</button>
        </section>
        
        <section className="flex items-center gap-4 justify-center w-full container mx-auto px-4 py-4 rounded-md mt-4 bg-white">
          <button className='text-blue-400'>All</button>
          <button className='text-gray-600 hover:text-blue-400'>Active</button>
          <button className='text-gray-600 hover:text-blue-400'>Completed</button>
        </section>

        <p className="text-center mx-auto mt-8 text-gray-600">Drag and drop to reorder list</p>
         
      </main>
      
    </div>
  )
}

export default App