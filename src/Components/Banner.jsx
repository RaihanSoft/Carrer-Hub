const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[550px] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="user.png"
                    className="max-w-lg w-full rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                    <p className="py-6">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className="btn bg-[#7E90FE] text-white  ">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
