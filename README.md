# get-keys
demonstrates getKeys with either data in the vault or in an empty vault

To reproduce run

1. `npm install`
2. `ionic build`
3. `npx cap sync`
4. `npx cap open android`
5. Run the app on an Android device
6. Hit the "get keys" button
7. Check Logcat

The error message thrown is `Line 113 - Msg: Uncaught (in promise) Attempt to invoke virtual method 'java.lang.Class java.lang.Object.getClass()' on a null object reference`

If this is run on iOS it simply logs `[]`
