const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Who Benefits Most?
        </h2>
        <div className="border-b-4 border-blue-500 mx-auto w-16 mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card Component 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Your Card Content */}
          </div>

          {/* Card Component 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Your Card Content */}
          </div>

          {/* Card Component 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Your Card Content */}
          </div>

          {/* Card Component 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Your Card Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
