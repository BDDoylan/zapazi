import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Folder from "../components/Folder";

const LandingPage = () => {
	let exampleFolder = {
		id: 1,
		name: "Example Folder",
		links: ["Link #1", "Link #2"],
	};

	return (
		<div className="h-full overflow-x-hidden">
			<video
				src="landing-bg.mp4"
				autoPlay
				loop
				muted
				playsInline
				className="fixed z-0 h-full w-full object-fill"
			/>
			<a href="https://www.vecteezy.com/video/5632509-abstract-waving-realistic-gold-background-looped-animation">
				Abstract Waving Realistic Gold Background Looped Animation Stock Videos by Vecteezy
			</a>

			<div className="relative mt-14">
				<img
					src="zapazi-logo-primary-color.png"
					alt="Big Zapazi Logo"
					className="relative left-[calc(50%-120px)] w-60 animate-slowPulse"
				/>
				<h1 className="mt-5 w-full animate-slowPulse rounded-3xl text-center text-5xl font-bold text-primary-500">
					WELCOME TO ZAPAZI
				</h1>
			</div>

			<div className="relative right-full z-10 mt-10 h-52 w-full animate-slideRight overflow-y-auto rounded-r-full bg-primary-500 pt-3 text-center text-quaternary-500 shadow-2xl shadow-primary-500 drop-shadow-2xl md:right-3/4 md:w-3/4">
				<h2 className="mb-3 text-3xl font-bold">Basic Information</h2>
				<p className="mx-20 text-2xl font-bold">
					All your internet link saving needs, organized, in one place. From saving to sharing, you now have a
					global method of getting your favorite links in a memorable place, and with a click of a button
					sending it to your family/ friends/ co-workers... anyone!
				</p>
			</div>
			<div className="relative right-full bottom-48 h-52 w-full animate-slideRight rounded-r-full bg-primary-700 text-primary-500 md:right-3/4 md:w-3/4"></div>

			<FontAwesomeIcon
				icon={faArrowDown as IconProp}
				className="relative bottom-44 left-[calc(50%-35px)] h-20 animate-slowPulse animate-fadeIn text-primary-500"
			/>

			<div className="relative bottom-40 z-10 h-48 w-full animate-slideLeft overflow-y-auto rounded-l-full bg-primary-500 pt-5 text-center text-quaternary-500 shadow-2xl shadow-primary-500 drop-shadow-2xl md:left-1/4 md:w-3/4">
				<h2 className="mb-3 text-3xl font-bold">More Information</h2>
				<p className="mx-20 text-2xl font-bold">
					You can also download the browser extension that enhances the Zapazi experience. Allowing you with
					simple keybinds to quickly use the features the website provides with maximize efficiency.
				</p>
			</div>
			<div className="relative left-0 bottom-[calc(20rem+15px)] h-48 w-full animate-slideLeft rounded-l-full bg-primary-700 text-primary-500 md:left-1/4 md:w-3/4"></div>

			<FontAwesomeIcon
				icon={faArrowDown as IconProp}
				className="relative bottom-56 left-[calc(50%-35px)] -mt-8 h-20 animate-slowPulse animate-fadeIn text-primary-500"
			/>

			<div className="pointer-events-none relative bottom-52">
				<Folder {...exampleFolder} />
			</div>

			<FontAwesomeIcon
				icon={faArrowDown as IconProp}
				className="relative bottom-24 left-[calc(50%-35px)] -mt-8 h-20 animate-slowPulse animate-fadeIn text-primary-500"
			/>

			<div className="relative h-auto bg-primary-500 text-center text-2xl font-bold text-quaternary-500 overflow-y-auto">
				<p>For more information / work contact / suggestions feel free to contact me at bddoylan@gmail.com</p>
			</div>
		</div>
	);
};

export default LandingPage;
