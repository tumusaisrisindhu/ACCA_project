import RequestCallBack from "../RequestCallBack"

const KickOff = () => {
    return(
        <section className="bg-white px-6 py-16 lg:px-10">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

                <div>
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        Kick off Your ACCA Prep Journey with IndigoLearn
                    </h2>

                    <p className="mt-5 text-lg text-gray-600">
                        Sign in and get instant access to our FREE courses.
                    </p>

                    <button
                        type="button"
                        className="mt-7 rounded-md bg-[#32187f] px-6 py-3 font-semibold text-white transition hover:bg-[#271261]"
                    >
                        ACCA Learning Partner
                    </button>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                    <RequestCallBack />
                </div>

            </div>
        </section>
    )
} 

export default KickOff