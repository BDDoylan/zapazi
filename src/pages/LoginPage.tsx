const LoginPage = () => {
	const googleLogin = () => {
		window.open("http://localhost:5000/auth/google", "_self");
	};

	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600">
			<div className="pt-10">
				<h1 className="text-center">Login Page</h1>

				<div
					className="flex mx-auto mt-10 p-2 w-60 items-center rounded-2xl bg-primary-500 hover:bg-primary-800 cursor-pointer"
					onClick={googleLogin}
				>
					<img className="w-10 content-center" src="google-logo.svg.webp" alt="Google Icon" />
					<p className="flex-auto justify-center text-center text-quaternary-500 text-lg font-bold">
						Login With Google
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
