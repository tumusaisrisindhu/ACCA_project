import RequestCallBack from "../RequestCallBack"
import { status } from "../../data/data.jsx"

const BecomeAcca = () => {
  return (
    <section className="bg-[#f4f8ff] px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

    
        <div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Become ACCA in 18 months
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Acquire globally recognized accountancy qualification, ACCA
            (also called Global CA), and get placed in top MNCs and Big4s.
          </p>

        
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {status.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm"
              >
                <span className="block text-sm font-medium text-gray-500">
                  {item.label}
                </span>

                <strong className="mt-2 block text-base font-bold text-[#32187f]">
                  {item.value}
                </strong>
              </div>
            ))}
          </div>

          
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-md bg-[#32187f] px-6 py-3 font-semibold text-white transition hover:bg-[#271261]"
            >
              Download Brochure
            </button>

            <button
              type="button"
              className="rounded-md bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              ACCA Learning Partner
            </button>
          </div>
        </div>

        
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg md:p-8">
          <RequestCallBack />
        </div>

      </div>
    </section>
  )
}

export default BecomeAcca