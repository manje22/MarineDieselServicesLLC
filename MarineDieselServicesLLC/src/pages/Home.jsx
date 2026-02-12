import Gallery from "../components/gallery";

function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-24">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Marine Diesel Services LLC
          </h1>

          <h2 className="text-2xl font-medium text-slate-600">
            Diesel Engine Service, Sales & Parts
          </h2>

        </section>

        <div className="flex justify-center">
            <Gallery />
        </div>
        

        <section className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 
                            hover:shadow-md transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-slate-900">
            About Us
          </h3>

          <p className="text-slate-700 mb-6 leading-relaxed">
            We are a Florida-based company with over 30 years of experience 
            providing worldwide diesel engine expertise for commercial and 
            marine applications.
          </p>

          <p className="font-semibold text-slate-800 mb-4">
            Our Services Include:
          </p>

          <ul className="space-y-3 text-slate-700 flex flex-col items-center">
            {[
              "Engine inspections",
              "Repair and service",
              "Complete overhauls",
              "Engine replacements"
            ].map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 group cursor-default"
              >
                <span className="w-2 h-2 bg-slate-700 rounded-full 
                                 group-hover:bg-blue-700 transition-colors duration-300"></span>
                <span className="group-hover:text-slate-900 transition-colors duration-300">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-slate-900 text-white p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-3 text-lg text-slate-300">
            <p className="hover:text-white transition-colors duration-300">
              sergio@marinedieselservices.comcastbiz.net
            </p>

            <p className="hover:text-white transition-colors duration-300">
              (954) 326-7755
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Home;
