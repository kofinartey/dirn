export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swUrl).then((response) => {
      console.log("[SERVICE WORKER] Registering...");
    });
  }
}
