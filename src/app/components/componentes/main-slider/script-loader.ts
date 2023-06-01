export function loadScript(url: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.body.appendChild(script);
  });
}
