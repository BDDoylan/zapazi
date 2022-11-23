const LandingPage = () => {
	return (
		<div className="h-full overflow-x-hidden">
			<video
				src="landing-bg.mp4"
				autoPlay
				loop
				muted
				playsInline
				className="fixed w-full h-full object-fill z-0"
			/>
			<a href="https://www.vecteezy.com/video/5632509-abstract-waving-realistic-gold-background-looped-animation">
				Abstract Waving Realistic Gold Background Looped Animation Stock Videos by Vecteezy
			</a>

			<div className="relative mt-20">
				<img
					src="zapazi-logo-primary-color.png"
					alt="Big Zapazi Logo"
					className="relative w-60 left-[calc(50%-120px)] animate-slowPulse"
				/>
				<h1 className="w-full rounded-3xl mt-10 text-5xl animate-slowPulse font-bold text-primary-500 text-center">
					WELCOME TO ZAPAZI
				</h1>
			</div>

			<div className="relative overflow-y-auto text-center pt-3 text-quaternary-500 bg-primary-500 mt-20 right-3/4 w-3/4 h-60 rounded-r-full drop-shadow-2xl shadow-2xl shadow-primary-500 animate-slideRight">
				<h1 className="text-3xl mb-3 font-bold">Basic Information</h1>
				<p className="text-2xl mx-10 font-bold">
					All your internet link saving needs, organized, in one place.
					<br></br>
					From saving to sharing, you now have a global method of getting your favorite links 
					in a memoranble place, and with a click of a button sending it to your family/ friends/ 
					co-worker... anyone!
				</p>
			</div>

			<div className="relative bg-primary-500 mt-20 mb-24 left-1/4 w-3/4 h-60 rounded-l-full drop-shadow-2xl shadow-2xl shadow-primary-500 animate-slideLeft">
				<h1 className="text-quaternary-500 text-center text-3xl">Basic Information</h1>
			</div>

			{/* <div className="relative w-96 h-96 z-50">
				hey!
			</div> */}
		</div>
	);
};

export default LandingPage;
