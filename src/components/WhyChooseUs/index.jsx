import EligibilityPage from "../EligibilityPage"
import { FaChalkboardTeacher, FaUsers, FaBriefcase } from "react-icons/fa"

const WhyChooseUs = () => {
    return(
        <section className="bg-white px-6 py-16 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        Why Choose Us?
                    </h2>

                    <div className="mx-auto mt-3 h-1 w-24 rounded bg-[#32187f]" />
                </div>
                
                <div className="mt-12 grid gap-6 md:grid-cols-3">

                    <article className="rounded-lg border border-gray-200 bg-[#f8faff] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <FaChalkboardTeacher
                                className="text-[#32187f]"
                                size={32}
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                        Expert Faculty
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                        Our faculty are subject matter experts with practical
                        experience and industry knowledge.
                        </p>
                    </article>

                    <article className="rounded-lg border border-gray-200 bg-[#f8faff] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <FaUsers
                                className="text-[#32187f]"
                                size={32}
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                        Complete Success Package
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                        Video classes, live sessions, doubt resolution, practice
                        tests and webinars.
                        </p>
                    </article>


                    <article className="rounded-lg border border-gray-200 bg-[#f8faff] p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <FaBriefcase
                                className="text-[#32187f]"
                                size={32}
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                        Placements
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                        Resume workshops, mock interviews and placement drives to
                        help you land your dream job.
                        </p>
                    </article>

                </div>

                <EligibilityPage />
            </div>
        </section>
    )
}

export default WhyChooseUs