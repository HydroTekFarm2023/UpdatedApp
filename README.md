# Hydrotek Farm Monitoring

A modern, high-end "Digital Greenhouse" monitoring application built with Flutter, integrated with AWS Amplify for authentication and data management. 

The application UI is synchronized with Google Stitch design specifications.

## Prerequisites

- [Flutter SDK](https://docs.flutter.dev/get-started/install) installed
- Chrome browser (for web testing)

## How to Run Locally

1. Navigate to the Flutter project directory:
   ```bash
   cd hydrotek_flutter
   ```

2. Install dependencies:
   ```bash
   flutter pub get
   ```

3. Run the application:
   ```bash
   flutter run -d chrome --web-port=3000
   ```

> **Important Note regarding Authentication:** 
> This repository is configured to connect to a specific AWS Amplify / Cognito backend.
> To use Google Sign-In, the web port you use (e.g., `3000`) MUST be registered in the AWS Cognito User Pool Allowed Callback URLs. If you experience a `redirect_mismatch` error during Google Sign-In, ensure the port matches the authorized redirect URI.
