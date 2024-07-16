const Alert = ({ message, type }) => {
  const baseClasses = 'px-4 py-3 rounded relative mb-4 flex items-center'
  let alertClasses = ''
  let icon = null

  switch (type) {
    case 'success':
      alertClasses = 'bg-green-100 border border-green-400 text-green-700'
      icon = (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M8.293 14.293a1 1 0 0 1 1.414 0L17 7.414a1 1 0 0 0-1.414-1.414L8 12.586 4.707 9.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0z" />
        </svg>
      )
      break
    case 'info':
      alertClasses = 'bg-blue-100 border border-blue-400 text-blue-700'
      icon = (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 7h2v2h-2zm-1 2v6h-2v-6H6V9h4zm1-8a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14z" />
        </svg>
      )
      break
    case 'warning':
      alertClasses = 'bg-yellow-100 border border-yellow-400 text-yellow-700'
      icon = (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l7.481 13.298c.773 1.375-.173 3.098-1.742 3.098H2.518c-1.569 0-2.515-1.723-1.742-3.098L8.257 3.1zM11 14v-2H9v2h2zm0-4V7H9v3h2z" />
        </svg>
      )
      break
    case 'error':
      alertClasses = 'bg-red-100 border border-red-400 text-red-700'
      icon = (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11.414 10l2.293-2.293a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10z" />
        </svg>
      )
      break
    default:
      break
  }

  return (
    <div className={`${baseClasses} ${alertClasses}`} role="alert">
      {icon}
      <span className="block sm:inline">{message}</span>
    </div>
  )
}

export default Alert
