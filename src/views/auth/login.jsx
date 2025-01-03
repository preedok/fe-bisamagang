import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Bagian Kiri - Form Login */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <div className="mb-10">
          <img src="https://placehold.co/400" alt="BisaMagang" className="h-8" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-1">Masuk</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Belum punya akun?</span>
            <Link to="/register" className="text-blue-600 font-medium">
              Daftar
            </Link>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div className="text-right">
            <Link to="/forgot-password" className="text-blue-600 text-sm">
              Lupa Kata Sandi? <span className="font-medium">Klik disini</span>
            </Link>
          </div>

          <button className="w-full bg-[#0B0B3F] text-white py-3 rounded-lg hover:bg-[#0B0B3F]/90">
            Login
          </button>

          <div className="relative flex items-center justify-center text-sm text-gray-500 my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4">atau masuk dengan</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <div src="" alt="Google" className="w-5 h-5" />
            Google
          </button>
          
          <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <div src="" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2025 Bisa Magang All Right Reserved
        </div>
      </div>

      {/* Bagian Kanan - Ilustrasi */}
      <div className="w-1/2 bg-[#0B0B3F] flex items-center justify-center p-20">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Lorem Ipsum is simply dummy</h1>
          <img src="https://placehold.co/500x300" alt="" srcset="" />
          <div className="flex gap-2 mt-4">
            <div className="w-8 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;