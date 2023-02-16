import React from 'react'
import ContactUs from './ContactUs'


const FAQ = () => {

    const data = [
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciuntvoluptate dicta quo officiis explicabo consequuntur distinctio corporisearum similique!"
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciuntvoluptate dicta quo officiis explicabo consequuntur distinctio corporisearum similique!"
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciuntvoluptate dicta quo officiis explicabo consequuntur distinctio corporisearum similique!"
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
            answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciuntvoluptate dicta quo officiis explicabo consequuntur distinctio corporisearum similique!"
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:w-full p-4'>
            <div className='col-span-1'>
                <ContactUs />
            </div>
            <div className='col-span-3'>
                <h1 className='text-xl font-bold mb-6'>Common Questions/Answers</h1>
                <div className="space-y-4 mx-auto">
                    {
                        data.map(acc =>
                            <details
                                className="group border-l-4 border-blue-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                                open
                            >
                                <summary className="flex items-center justify-between cursor-pointer">
                                    <h2 className="text-lg font-medium text-gray-900">
                                        {acc.question}
                                    </h2>

                                    <span
                                        className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    {acc.answer}
                                </p>
                            </details>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default FAQ