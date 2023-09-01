How to Install and Run the App with Expo Go
=============================================

This guide outlines the steps to run our React Native project on your local device using the Expo Go app.

Prerequisites
-------------

*   Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
    
*   Install [Expo CLI](https://docs.expo.dev/get-started/installation/) by running:
        
    `npm install -g expo-cli`
    
*   Install the Expo Go app on your mobile device. It's available on both [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) (Android) and [Apple App Store](https://apps.apple.com/app/apple-store/id982107779) (iOS).
    

Steps to Run the Project
------------------------

1.  **Clone the Repository**
    
    If you haven't already, clone the repository to your local machine:
        
    `git clone https://github.com/mercyano/hris-mobile.git`
    
2.  **Navigate to the Project Directory**
    
    Use the terminal or command prompt to navigate into the cloned project directory:
        
    `cd hris-mobile`
    
3.  **Install Dependencies**
    
    Install all the required dependencies by running:
        
    `npm install`
    
4.  **Start the Expo Project**
    
    Start the project with:
        
    `expo start`
    
    This will open a new page in your default browser displaying a QR code.
    
5.  **Open the Project on Your Device**
    
    *   **Android**:
        
        *   Open the Expo Go app.
        *   Tap on the "Scan QR Code" option and scan the QR code displayed in your browser.
    *   **iOS**:
        
        *   Open your device's camera.
        *   Scan the QR code displayed in your browser.
        *   Tap on the notification prompt to open the project in the Expo Go app.

The app should now be running on your device! If you encounter any issues, please refer to the [official Expo documentation](https://docs.expo.dev/) for troubleshooting tips.
