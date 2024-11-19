
function App() {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col flex-1 bg-green-500 justify-center items-center">
          <p className="text-3xl font-bold" id="cookie_counter">0 Cookies</p>
          <p className="text-3xl font-bold" id="cookie_per_second">Y cookies par seconde</p>
          <img id="cookie_image" src="./cookie.png" className="h-80 mt-20 hover:h-96 cursor-pointer transition-all duration-300" alt="Image de cookie" />
      </div>
      <div className="flex flex-col flex-1 bg-yellow-500">
          <button id="reset-button" className="rounded m-3 p-3 bg-red-100 hover:bg-red-500 hover:text-red-900 hover:font-bold transition-all duration-300 ">🗑️ Relancer le jeu</button>
      </div>
      <div className="flex flex-col flex-1 bg-red-500">
          <div id="shop-container" className="flex flex-col gap-3 p-3">
          </div>
      </div>
  </div>
  );
}

export default App;
