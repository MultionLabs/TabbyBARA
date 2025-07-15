<p align="center">
  <img src="assets/tabbybara-logo.png" alt="TabbyBARA logo" width="200" />
</p>

<h1 align="center" style="color:#23132d">
  TabbyBARA
</h1>

<p align="center">
  <strong>A Firefox extension that adds a keyboard shortcut to open a new tab in the same container and tab group as the current tab.</strong><br />
  Powered by Firefox WebExtensions API
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#development">Development</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#sponsorship">Sponsorship</a>
</p>

---

<div align="center">

[![Sponsor me on GitHub](https://img.shields.io/badge/Sponsor-💖-pink?style=for-the-badge)](https://github.com/sponsors/maxskorr)  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Firefox Add-ons](https://img.shields.io/badge/Firefox-Add--ons-orange.svg?style=for-the-badge)](https://addons.mozilla.org/)
[![Platform](https://img.shields.io/badge/Platform-Firefox-lightgrey.svg?style=for-the-badge)](https://www.mozilla.org/firefox/)

</div>

---

**TabbyBARA** is a lightweight Firefox extension that enhances your browsing workflow by providing a quick keyboard shortcut to create new tabs in the same container and tab group as your current tab. Perfect for users who work with multiple containers and tab groups for organization.

* Quick keyboard shortcut (`Ctrl+Shift+E` / `Cmd+Shift+E`) to create new tabs
* Automatic container preservation - new tabs inherit the current tab's container
* Tab group integration - new tabs are added to the same tab group
* Smart positioning - new tabs appear right after the current tab
* Minimal resource usage with no background processes

## Features

* **Keyboard Shortcut**: `Ctrl+Shift+E` (Windows/Linux) or `Cmd+Shift+E` (macOS)
* **Container Support**: Opens new tabs in the same container as the current tab
* **Tab Group Support**: Places new tabs in the same tab group as the current tab
* **Smart Positioning**: Places the new tab right after the currently active tab
* **Lightweight**: Minimal memory footprint and no background processes
* **Privacy-focused**: No data collection or external dependencies

## Installation

### From Firefox Add-ons Store (Recommended)
1. Visit the [Firefox Add-ons store](https://addons.mozilla.org/)
2. Search for "TabbyBARA"
3. Click "Add to Firefox"

### Manual Installation (Development)
1. Download or clone this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" in the sidebar
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from this directory

## Usage

1. Navigate to any tab in Firefox
2. Press `Ctrl+Shift+E` (Windows/Linux) or `Cmd+Shift+E` (macOS)
3. A new tab will open in the same container and tab group, positioned right after the current tab

## Requirements

- Firefox 57 or later
- Container tabs must be enabled (`privacy.userContext.enabled` preference)

## Permissions

This extension requires the following permissions:
- `tabs`: To query and create tabs
- `cookies`: To create tabs in specific containers
- `contextualIdentities`: To work with container tabs
- `tabGroups`: To manage tab groups

## Development

### Project Structure
```
tabbybara/
├── manifest.json      # Extension manifest
├── background.js      # Background script
├── icons/            # Extension icons
│   ├── icon-16.png
│   ├── icon-48.png
│   └── icon-128.png
└── README.md         # This file
```

### Building for Distribution

1. Create a ZIP file containing all the files
2. Sign the extension using the [web-ext](https://github.com/mozilla/web-ext) tool:
   ```bash
   web-ext sign --api-key=YOUR_API_KEY --api-secret=YOUR_API_SECRET
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Issues

If you encounter any issues, please report them on the [GitHub repository](https://github.com/MultionLabs/TabbyBARA/issues) or through the Firefox Add-ons store.

## Version History

- **1.0**: Initial release with basic container and tab group support

## Sponsorship

If you find this project useful, please consider [sponsoring the development via GitHub](https://github.com/sponsors/maxskorr). Thank you!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
