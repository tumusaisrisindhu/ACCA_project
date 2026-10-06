import { eligibilityData } from "../../data/data.jsx"

import { FaLayerGroup } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"
import { FaRegCalendarAlt } from "react-icons/fa"
import { FaFileAlt } from "react-icons/fa"

const icons = [
  FaLayerGroup,
  FaRegClock,
  FaRegCalendarAlt,
  FaFileAlt,
]

const EligibilityPage = () => {
    return(
         <section className="mt-12">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {eligibilityData.map((item, index) => {

                const Icon = icons[index]

                return (
                    <article
                        key={item.title}
                        className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
                        >

                        <div className="h-1 bg-[#32187f]" />

                        <div className="px-5 py-4">

                            <h3 className="text-center text-lg font-bold text-gray-900">
                            {item.title}
                            </h3>

                            <div className="mt-2 flex items-center justify-center gap-2">
                                <Icon
                                    size={16}
                                    className="shrink-0 text-[#32187f]"
                                />

                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    </article>
                )
                })}

            </div>

        </section>
    )
}

export default EligibilityPage