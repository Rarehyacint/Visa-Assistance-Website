const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
let googleScriptPromise;

function loadGoogleIdentityScript() {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (googleScriptPromise) return googleScriptPromise;

  googleScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
    if (existingScript) {
      existingScript.addEventListener('load', resolve, { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Google authentication could not be loaded.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Google authentication could not be loaded.'));
    document.head.appendChild(script);
  });

  return googleScriptPromise;
}

function decodeGoogleCredential(credential) {
  const payload = credential.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  const decoded = decodeURIComponent(
    window.atob(payload)
      .split('')
      .map((character) => `%${`00${character.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );
  return JSON.parse(decoded);
}

export async function signInWithGoogle() {
  if (!GOOGLE_CLIENT_ID) {
    throw new Error('Google sign-in is not configured. Add VITE_GOOGLE_CLIENT_ID to your environment.');
  }

  await loadGoogleIdentityScript();

  return new Promise((resolve, reject) => {
    let settled = false;
    const finish = (callback, value) => {
      if (settled) return;
      settled = true;
      callback(value);
    };

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: ({ credential }) => {
        try {
          const profile = decodeGoogleCredential(credential);
          finish(resolve, {
            name: profile.name || profile.email?.split('@')[0] || 'Google Traveler',
            email: profile.email,
            picture: profile.picture
          });
        } catch {
          finish(reject, new Error('Google returned an invalid sign-in response.'));
        }
      },
      auto_select: false,
      cancel_on_tap_outside: true
    });

    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        finish(reject, new Error('Google sign-in was cancelled or could not be displayed.'));
      }
    });
  });
}
