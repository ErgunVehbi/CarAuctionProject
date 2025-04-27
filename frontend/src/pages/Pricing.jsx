export default function Pricing() {
  return (
    <>
      <div className="bg-gray-100 p-8 text-center h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Your edge in the market starts{" "}
          <span className="text-blue-600">now</span>
        !</h1>
        <p className="text-lg mb-6">
          {" "}
          Get started with AutoScore AI today to
          experience the power of AI in your car research and find your edge in the market!
        </p>

        <div className="border-6 border-solid border-blue-600  w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-left">Pro plan</h1>
          <p className="text-md mb-6 text-left">
            Pro Plan Includes the following features:
          </p>
          <p className="text-5xl font-bold mb-6"> £30 <span className="text-lg">/per month</span></p>
          <button className="mb-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Get Started</button>
          <ul className="list-disc list-inside text-left">
            <li className="mb-2">Unlimited AI-powered car scoring and insights.</li>
            <li className="mb-2">Priority access to new features and updates.</li>
            <li className="mb-2">Advanced search and filter options for auction listings.</li>
            <li className="mb-2">Detailed market trend analysis and reports.</li>
            <li className="mb-2">Personalized recommendations based on your preferences.</li>
            <li className="mb-2">Exclusive access to premium customer support.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
