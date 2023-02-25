import React from 'react';

const CreateCampaign = () => {

    return (
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" class="space-y-4">


                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="email">Title</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Title"
                                    type="text"
                                    id="title"
                                />
                            </div>

                            <div>
                                <label class="sr-only" for="phone">Email</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Email"
                                    type="email"
                                    id="email"
                                />
                            </div>
                        </div>
                        <div>
                            <label class="sr-only" for="name">Name</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Name"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div>
                            <label class="sr-only" for="message">Message</label>

                            <textarea
                                class="w-full rounded-lg p-3 text-sm"
                                placeholder="Message"
                                rows="8"
                                id="message"
                            ></textarea>
                        </div>

                        <div class="mt-4">
                            <button
                                type="submit"
                                class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );

};

export default CreateCampaign;