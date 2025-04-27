export default function Home() {
    return (
      <>
        
        {/* Hero Section */}
        <div className="bg-gray-100 p-8 text-center h-screen">
          <h1 className="text-3xl font-bold mb-4">
            Best Website to Get All the <span className="text-blue-600">Car Auction Data</span> You Need
          </h1>
          <p className="text-lg mb-6">
            Find real-time auction prices, vehicle history, and market trends
          </p>
          
          {/* Your existing dropdown - I've improved the Tailwind classes */}
          <div className="dropdown bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
            <label htmlFor="cars" className="block mb-2 font-medium">
              Select Auction House:
            </label>
            <select 
              id="cars" 
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="anglian-car-auctions">Anglian Car Auctions</option>
              <option value="copart-uk">Copart UK</option>
              <option value="g3-auctions">G3 Auctions</option>
              <option value="bca">BCA</option>
            </select>
          </div>
  
          {/* Simple CTA Button */}
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Search Auctions
          </button>
        </div>
      </>
    );
  }