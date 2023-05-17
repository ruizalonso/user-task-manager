import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function useNotification() {
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    setNotification(null)
  }, [notification])

  function showNotification(notify) {
    const options = {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'dark',
    }

    switch (notify.variant) {
      case 'success':
        toast.success(notify.message, options)
        break
      case 'error':
        toast.error(notify.message, options)
        break
      case 'warning':
        toast.warning(notify.message, options)
        break
      case 'info':
        toast.info(notify.message, options)
        break
      default:
        toast(notify.message, options)
        break
    }

    setNotification(notify)
  }

  return [notification, showNotification]
}

export default useNotification
