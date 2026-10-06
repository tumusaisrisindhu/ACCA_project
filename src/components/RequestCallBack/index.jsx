import { useState } from 'react'

const RequestCallBack = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        setIsModalOpen(true)
    }

    return(
        <>
            <div>
                <h2 className="text-center text-xl font-bold text-gray-900">Aspiring to be ACCA? Get in touch with us!</h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="phone" className="sr-only">
                            Phone Number
                        </label>
                        <input id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone Number*"
                            required
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#32187f] focus:ring-2 focus:ring-purple-100" />
                    </div>
                    
                    <div>
                        <label htmlFor='email' className="sr-only">Email ID</label>
                        <input id="email"
                            name="email"
                            type="email"
                            placeholder="Email ID"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#32187f] focus:ring-2 focus:ring-purple-100" />
                    </div>

                    <div>
                        <label htmlFor="qualification" className="sr-only">Current Qualification</label>
                        <select id="qualification"
                            name="qualification"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#32187f]">

                            <option value="">Current Qualification</option>
                            <option value="12th">12th</option>
                            <option value="graduate">Graduate</option>
                            <option value="post-graduate">Post Graduate</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="interested"
                            className="sr-only">
                            Interested In
                        </label>
                        <select id="interested"
                            name="interested"
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#32187f]">
                            <option value="">Interested In</option>
                            <option value='acca'>ACCA</option>
                            <option value="cma" >CMA</option>
                            <option value="cpa">CPA</option>
                        </select>
                    </div>
                    <button type="submit"
                        className="w-full rounded-md bg-[#32187f] px-5 py-3 font-semibold text-white transition hover:bg-[#271261]">
                        Requast Call Back
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="success-title"
                >

                    <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-2xl">

                        {/* Success Icon */}
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <span className="text-3xl text-green-600">
                                ✓
                            </span>
                        </div>

                        <h2
                        id="success-title"
                        className="mt-5 text-2xl font-bold text-gray-900"
                        >
                            Request Submitted!
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Thank you for your interest in ACCA.
                            Our team will get in touch with you soon.
                        </p>

                        <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="mt-6 rounded-md bg-[#32187f] px-8 py-3 font-semibold text-white transition hover:bg-[#271261]"
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </>
    )
}

export default RequestCallBack