import React from 'react';

const Test = () => {
    return (
        <section className="mt-8 container mx-auto my-12 md:pl-3">
            <div className="grid md:grid-cols-3  gap-4">
                <div className="bg-slate-300 w-[410px] h-[200px] rounded-md">
                    <div className="grid md:grid-rows-2 gap-3">
                        <div className="bg-rose-400 w-[410px] h-[200px]">
                            <h2 className="text-2xl">section title</h2>
                            <img
                                className="h-full w-full"
                                src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                                alt=""
                            />
                        </div>

                        <div className="w-[410px] h-[200px] grid md:grid-cols-2 gap-4">
                            <div className="bg-rose-800 w-[200px] h-[200px]">
                                <img
                                    className="h-full"
                                    src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="bg-rose-800 w-[200px] h-[200px]">
                                <img
                                    className="h-full"
                                    src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-300 h-[410px]">
                    <img
                        className="h-full"
                        src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                        alt=""
                    />
                </div>

                <div className="grid md:grid-rows-2 gap-4">
                    <div className="bg-blue-300 w-[400px] h-[195px]">
                        <img
                            className="h-full w-full"
                            src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                            alt=""
                        />
                    </div>
                    <div className="bg-blue-300 w-[400px] h-[195px]">
                        <img
                            className="h-full w-full"
                            src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;