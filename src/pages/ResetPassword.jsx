import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../partials/Header'
import PageIllustration from '../partials/PageIllustration'

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Olvidaste tu contraseña?</h1>
                <p className="text-xl text-graySecurity-400">
                  Te enviaremos un correo con instrucciones para recuperar tu contraseña.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-graySecurity-300 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-graySecurity-300"
                        placeholder="mail@mail.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-greenSecurity-600 hover:bg-greenSecurity-700 w-full">
                        Recuperar contraseña
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-graySecurity-400 text-center mt-6">
                  <Link
                    to="/signin"
                    className="text-greenSecurity-600 hover:text-graySecurity-200 transition duration-150 ease-in-out"
                  >
                    Cancelar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ResetPassword
