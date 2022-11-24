const LoginPage = () => {
	const googleLogin = () => {
		window.open("http://localhost:5000/auth/google", "_self");
	};

	return (
		<div className="h-screen bg-gradient-to-b from-quaternary-500 to-primary-600">
			<div className="pt-10">
				<h1 className="text-center">Login Page</h1>

				<div
					className="mx-auto mt-10 flex w-60 cursor-pointer items-center rounded-2xl bg-primary-500 p-2 hover:bg-primary-800"
					onClick={googleLogin}
				>
					<img className="w-10 content-center" src="google-logo.svg.webp" alt="Google Icon" />
					<p className="flex-auto justify-center text-center text-lg font-bold text-quaternary-500">
						Login With Google
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
