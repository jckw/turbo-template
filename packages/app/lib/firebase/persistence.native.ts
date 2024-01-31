import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// @ts-ignore see https://github.com/firebase/firebase-js-sdk/issues/7584
import { Persistence, getReactNativePersistence } from "firebase/auth"

export const persistence = getReactNativePersistence(
  ReactNativeAsyncStorage
) as Persistence
