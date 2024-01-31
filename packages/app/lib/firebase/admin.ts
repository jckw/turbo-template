import * as firebaseAdmin from "firebase-admin"

if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      }),
    })
  } catch (error: { code: string } | any) {
    if (error.code === "app/invalid-credential") {
      // Hack to allow this to build without having to provide the private key during
      // Docker build
      console.error(error)
    } else {
      throw error
    }
  }
}

export { firebaseAdmin }
