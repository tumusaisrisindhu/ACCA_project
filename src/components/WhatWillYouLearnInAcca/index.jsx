import { levels } from '../../data/data.jsx'

const WhatWillYouLearnInAcca = () => {
    return(
        <section className="bg-white px-6 py-16 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    What Will You Learn in ACCA?
                </h2>

                <div className="mx-auto mt-3 h-1 w-24 rounded bg-[#32187f]" />

                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                    Build your accounting and finance expertise through three
                    comprehensive levels of the ACCA qualification.
                </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 lg:grid-cols-3 ">

                {levels.map((level) => (
                    <article
                    key={level.title}
                    className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-[#f4f8ff] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                    {/* Card Header */}
                    <div className="bg-[#32187f] px-6 py-5 text-center text-white">
                        <h3 className="text-xl font-bold">
                        {level.title}
                        </h3>
                    </div>

                    {/* Middle */}
                    <div className="flex-1 px-6 py-6">

                        {/* Normal levels */}
                        {level.items && (
                        <ul className="space-y-4">
                            {level.items.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-gray-700"
                            >
                                <span className="mt-1 text-[#32187f]">
                                ✓
                                </span>

                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                        )}

                        {/* Professional compulsory papers */}
                        {level.compulsory && (
                        <div>
                            <h4 className="mb-3 font-semibold text-gray-900">
                            Compulsory Papers
                            </h4>

                            <ul className="space-y-3">
                            {level.compulsory.map((item) => (
                                <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-gray-700"
                                >
                                <span className="mt-1 text-[#32187f]">
                                    ✓
                                </span>

                                <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}

                        {/* Professional optional papers */}
                        {level.optional && (
                        <div className="mt-6">
                            <h4 className="mb-3 font-semibold text-gray-900">
                            Optional Papers
                            </h4>

                            <ul className="space-y-3">
                            {level.optional.map((item) => (
                                <li
                                key={item}
                                className="flex items-start gap-3 text-sm text-gray-700"
                                >
                                <span className="mt-1 text-[#32187f]">
                                    ✓
                                </span>

                                <span>{item}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}

                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 bg-[#32187f] px-6 py-4 text-center">
                        <p className="text-lg font-semibold text-white">
                        {level.papers}
                        </p>
                    </div>

                    </article>
                ))}

                </div>

            </div>
        </section>

    )
}

export default WhatWillYouLearnInAcca

