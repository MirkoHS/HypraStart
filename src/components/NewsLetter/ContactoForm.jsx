import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Alert from './Alert'
import { sendContactEmail } from '../../services/emailService'

// Initialize AOS
AOS.init()

const ContactoForm = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [textarea, setTextarea] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showError, setShowError] = useState(false)
  const [displayError, setDisplayError] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [displaySuccess, setDisplaySuccess] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    setEmail(email)
    setIsEmailValid(validateEmail(email))
  }

  const handleTextareaChange = (e) => {
    setTextarea(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setErrorMessage('Por favor ingrese un correo válido.')
      setShowError(true)
      setDisplayError(true)
      setShowSuccess(false)
      setTimeout(() => {
        setShowError(false)
        setTimeout(() => setDisplayError(false), 500) // Match this duration with the fade-out animation duration
      }, 3000)
    } else if (isEmailValid && textarea.trim().length <= 10) {
      setErrorMessage('Por favor, escribe tu consulta (mínimo 10 caracteres).')
      setShowError(true)
      setDisplayError(true)
      setShowSuccess(false)
      setTimeout(() => {
        setShowError(false)
        setTimeout(() => setDisplayError(false), 500) // Match this duration with the fade-out animation duration
      }, 3000)
    } else {
      try {
        await sendContactEmail(email, textarea)
        setErrorMessage('')
        setShowError(false)
        setDisplayError(false)
        setSuccessMessage(
          'Gracias por contactarte con nosotros, te responderemos a la brevedad.'
        )
        setShowSuccess(true)
        setDisplaySuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          setTimeout(() => setDisplaySuccess(false), 500) // Match this duration with the fade-out animation duration
        }, 3000)
        // Handle form submission logic here
      } catch (error) {
        setErrorMessage(
          'Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo más tarde.'
        )
        setShowError(true)
        setDisplayError(true)
        setShowSuccess(false)
        setTimeout(() => {
          setShowError(false)
          setTimeout(() => setDisplayError(false), 500) // Match this duration with the fade-out animation duration
        }, 3000)
      }
    }
  }

  useEffect(() => {
    AOS.refresh()
  }, [isEmailValid])

  return (
    <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
        <input
          type="email"
          className="w-full appearance-none bg-greenSecurity-700 border border-greenSecurity-500 focus:border-greenSecurity-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-greenSecurity-400"
          placeholder="Ingresa tu correo"
          aria-label="Ingresa tu correo"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="btn text-greenSecurity-600 bg-greenSecurity-100 hover:bg-white shadow"
        >
          Enviar consulta
        </button>
      </div>
      <div
        className={`mt-2 transition-all duration-500 ${
          isEmailValid ? 'opacity-100 animate-fadeIn' : 'opacity-0 h-0 animate-fadeOut'
        }`}
      >
        <textarea
          className="w-full appearance-none bg-greenSecurity-700 border border-greenSecurity-500 focus:border-greenSecurity-300 rounded-sm px-4 py-3 text-white placeholder-greenSecurity-400"
          placeholder="Escribe tu consulta aquí"
          aria-label="Escribe tu consulta aquí"
          value={textarea}
          onChange={handleTextareaChange}
        />
      </div>
      {displayError && (
        <div
          className={`mt-2 flex justify-center transition-opacity duration-500 ${
            showError ? 'opacity-100 animate-fadeIn' : 'opacity-0 animate-fadeOut'
          }`}
        >
          <Alert message={errorMessage} type="error" />
        </div>
      )}
      {displaySuccess && (
        <div
          className={`mt-2 flex justify-center transition-opacity duration-500 ${
            showSuccess ? 'opacity-100 animate-fadeIn' : 'opacity-0 animate-fadeOut'
          }`}
        >
          <Alert message={successMessage} type="success" />
        </div>
      )}
    </form>
  )
}

export default ContactoForm
