# Glassdoor Hardsell Overlay remover (GHOR)

## Overview

GHOR is a browser extension designed to remove the annoying content wall that appears on Glassdoor's website. This extension automatically detects and removes the overlay, allowing you to browse the site without interruptions.

## Features

- Automatically removes the content wall overlay on Glassdoor.
- Displays a toast notification when the content wall is removed.
- Restores normal scrolling and mouse movement functionality.

## Installation

1. Clone or download this repository.
2. Open your browser and navigate to the extensions page:
   - For Chrome: `chrome://extensions/`
   - For Edge: `edge://extensions/`
3. Enable "Developer mode" (usually found in the top right corner).
4. Click on "Load unpacked" and select the directory where you downloaded/cloned this repository.

## Usage

Once the extension is installed, it will automatically activate on any Glassdoor page that matches the URL pattern `https://www.glassdoor.fr/*`. When the content wall is detected and removed, a toast notification will appear at the bottom of the screen with the message "Annoying content wall removed!".

## Files

- `index.js`: Contains the main logic for detecting and removing the content wall overlay.
- `toast.js`: Contains the code for displaying toast notifications.
- `manifest.json`: Defines the extension's metadata and specifies the content scripts to be injected.

## Code Overview

### `index.js`

This file sets up a `MutationObserver` to monitor changes to the DOM. When new nodes are added, it checks if they match the selectors for the content wall overlay. If a match is found, it executes a series of functions to remove the overlay, restore normal scrolling and mouse movement, and display a toast notification.

### `toast.js`

This file defines the styles and functionality for displaying toast notifications. The `showToast` function creates a toast element, displays it, and removes it after the fade-out animation completes.

### `manifest.json`

This file specifies the extension's metadata, including its name, description, version, and the content scripts to be injected into matching pages.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

---

Enjoy a seamless browsing experience on Glassdoor with the Glassdoor Bypass extension!