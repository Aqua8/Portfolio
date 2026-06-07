export function injectTracker() {
  const url = import.meta.env.VITE_TRACKER_URL
  const key = import.meta.env.VITE_TRACKING_KEY
  if (!url || !key) return

  const script = document.createElement('script')
  script.src = `${url}/tracker.js`
  script.dataset.key = key
  script.async = true
  document.head.appendChild(script)
}
