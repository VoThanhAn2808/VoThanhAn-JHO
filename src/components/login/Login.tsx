import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const success = login(email, password);
        if (success) {
            navigate("/contact");
        } else {
            setError("Email hoặc mật khẩu không đúng.");
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">

            <div className="absolute top-10 right-10 w-6 h-6 bg-green-400 rounded-full blur-md animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-pink-400 rounded-full blur-md animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-4 h-4 bg-purple-400 rounded-full blur-md animate-pulse"></div>

            <form onSubmit={handleLogin} className="bg-[#1d1b38] bg-opacity-80 backdrop-blur-md px-13 rounded-2xl shadow-2xl w-full max-w-md text-center text-white">
                <h2 className="text-[#DD5313] font-extrabold text-3xl pt-12 mb-14">OGMA</h2>
                <h3 className="font-bold text-[30px] leading-[48px] mb-2">Connexion</h3>
                <p className="font-medium text-[16px] leading-[32px] text-gray-300 px-6 mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                {error && <p className="text-red-400 mb-4">{error}</p>}

                <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-400 w-full p-3 mb-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 w-full p-3 mb-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className="flex justify-end w-full text-sm text-[#16FCD2] mb-7">
                    <a href="#" className="underline underline-offset-2 decoration-[#16FCD2]">
                        Mot de passe oublié?
                    </a>
                </div>

                <button type="submit" className="bg-[#DD5313] transition w-full py-4 rounded font-semibold text-[16px] leading-[16px] mb-7">
                    Connexion
                </button>

                <div className="flex items-center mb-7">
                    <div className="flex-grow h-px bg-white"></div>
                    <span className="px-2">Or</span>
                    <div className="flex-grow h-px bg-white"></div>
                </div>

                {/* Google button */}
                <button className="flex items-center justify-center gap-2 bg-white text-[#DD5313] w-full py-3 rounded transition font-semibold text-[16px] leading-[16px] tracking-normal mb-2">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Continue with Google
                </button>

                {/* Facebook button */}
                <button className="flex items-center justify-center gap-2 bg-[#3b5998] text-white w-full py-3 rounded transition font-semibold text-[16px] leading-[16px] tracking-normal mb-5">
                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5 " />
                    Continue with Facebook
                </button>

                <p className="text-center text-sm text-white mt-6 font-noto-sans font-medium text-[16px] leading-[32px]">
                    Not a member? <a href="#" className="text-[#DD5313] font-medium text-[16px] leading-[32px] tracking-[0%] underline decoration-solid decoration-0">Inscription</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
