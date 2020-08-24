export default function (callback, timeoutCount = 400) {
  let timeoutRef = null

  const debounceListener = () => {
    if (timeoutRef !== null) {
      clearTimeout(timeoutRef)
    }
    timeoutRef = setTimeout(() => {
      callback()
    }, timeoutCount)
  }
  return debounceListener
}
