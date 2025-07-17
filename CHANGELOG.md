# 📓 Notia Changelog
All notable changes to this project will be documented in this file.
![Notia Logo](https://github.com/user-attachments/assets/07e7e304-29f6-4d3f-87e1-3171e1428260)

# 🔖 v1.0.5-alpha – Localization, Pull-to-Refresh & Export System Overhaul (July 2025)

This update continues the alpha evolution of Notia with massive improvements in internationalization, data portability, and platform compatibility. It lays the groundwork for stable cross-device sync and localized user experiences across five languages.

---

## ✨ New Features

* 🌐 **Full multilingual support (5 languages)**: Notia now speaks **English, Turkish, Italian, German, and Azerbaijani** fluently — including the splash screen, settings, registration, search bar, and gallery.
* 🌀 **Pull-to-Refresh**: Swipe down on the HomePage or NotesPage to instantly refresh content. Smooth, responsive, and just makes sense.
* 📤 **Mobile Export & Import (Revamped)**: Cross-platform export/import is now reliable on **Android, Linux, and Windows**. Includes:

  * UTF-8 encoding fixes
  * Byte handling errors resolved
  * Automatic folder permission checks
* 🔁 **Grid Reset Mechanism**: Tap to quickly reset gallery view – great for refreshing complex states or reloading after heavy filtering.

---

## 🪛 Improvements

* 🏁 **Localized onboarding experience**: First-time users now get AI-related hints and welcome messages in their native language.
* 🗂️ **Directory refresh**: When you change the directory, the homepage updates instantly — **no more restart required**.
* 🧠 **Localized search filters**: Search options and sorting dialogs now fully support all five languages with proper translations and RTL alignment.
* 🧭 **Improved AI feature descriptions**: Enhanced wording and visual consistency for AI Pulse banner and photo suggestions.
* 🧹 **Refactored HomePage**: Switched `HomeHeader` and `HomePageState` to `StatefulWidget` for better performance and stability.
* 🔒 **Authentication Polishing**: UI enhancements to login/register screens with smoother animations and improved accessibility.
* 🔄 **Grid performance tweaks**: Lazy load improvements, pagination loading indicators, and smoother scroll interactions.
* 💾 **BackupService logic restructured**: Safer file handling for JSON-based exports, better platform awareness.

---

## 🐞 Fixed

* ❌ **replaceAll crash**: Fixed misuse of `replaceAll()` in localization strings, preventing runtime issues.
* 📂 **Linux Firebase init**: Firebase initialization now works properly on Linux (conditional init based on platform).
* 🧱 **Photo preview layout**: Fixed UI glitch with photo layout spacing and image aspect ratio inconsistencies.
* 🧰 **Snackbar theming**: Snackbar background now uses `colorScheme.primary` for better dark mode support.
* 💬 **Dynamic language switch bugs**: More UI components now reflect real-time language changes — full support coming in v1.0.6.

---

## 🐞 Known Limitations

* ⛔ **AI features are still scaffolded**: Smart tag suggestions and classification logic are not yet active.
* 🔐 **Auth session persistence** is basic; remember-me and session restore coming soon.
* 🔄 **Some language changes still require full refresh**: Working toward full dynamic localization with hot-reload-like behavior.

---

## 🧭 Coming Soon (v1.0.6+ Roadmap)

* ☁️ **Real Firebase sync**: One-click cross-device backup and restoration.
* 🧠 **AI Photo Tagging**: Automatic tagging based on image content.
* 🖋️ **Markdown Note Editor**: Rich-text editing, embedding images/videos.
* 🔄 **Session persistence & biometric login**
* 📑 **Batch note/tag management**


🔖 **v1.0.4-alpha – Smart Gallery, Bug Fixes & Modern Codebase (July 2025)**

In this update, Notia's codebase has been completely modernized. The gallery and notes pages are now faster and smarter, with major improvements to user experience and error handling.

✨ **New Features**

* 🗂️ **Smart folder & gallery management:** Subfolder support, quick folder filtering, and advanced permission handling.
* 🔄 **Grid/List view cycling:** Switch between gallery views (classic/detailed) with a single tap.
* 🧠 **AI Pulse banner:** A smart suggestion/AI banner on the homepage (with extensible infrastructure).
* 📝 **Persistent & secure storage for notes and settings:** Notes and settings are now stored more reliably and safely.
* 🛠️ **Advanced error handling:** Clear dialogs and feedback when folder or permission issues occur.
* 🏷️ **Folder & tag filtering:** More precise filtering options in gallery and notes.
* 🧩 **Modernized codebase:** HomePage and gallery state management rewritten for performance and maintainability.

🪛 **Improvements**

* 🎨 HomeHeader and gallery UI/UX redesigned with full Material 3 compliance – more intuitive and professional.
* ⚡ Enhanced filtering, sorting, and search algorithms.
* 🐞 Fixed parameter issues and widget invocation bugs in NotesPage and SettingsPage.
* 🌙 More robust and faster theme and language switching.
* 🧹 Code cleanup: Removed unused enums, improved separation of concerns.
* 🗃️ Per-note storage system for more secure note handling.

🐞 **Known Limitations**

* 🔄 Some UI elements may not immediately reflect language changes (full dynamic localization planned for v1.0.5).
* 🧪 Still in alpha: Some advanced filtering and AI features are in place but not yet activated.

🧭 **Coming Soon (v1.0.5+ Roadmap)**

* 🤖 Real AI-powered photo and note classification.
* ☁️ Secure backup & sync (encrypted & offline-first).
* 📝 Rich note editing (Markdown + embedded media).
* 🏷️ Advanced batch tag management and filtering.
* 📊 User analytics and extended developer tools.



## 🔖 v1.0.3-alpha – Modern Notes & Favorites (June 27, 2025)

In this update, Notia becomes smarter and more user-friendly with favorite notes and a modernized notes page. UI/UX improvements make the app look much more professional.

### ✨ New Features

- ⭐ **Add/remove favorites:** You can add or remove notes to/from favorites on the notes and gallery pages. You can also filter to view only favorite notes.
- 🖼️ **Modern gallery and notes page:** A new animated, theme-aware design following Material 3 standards.
- ⚙️ **Revamped settings page:** Now divided into sections, with modern ListTile/SwitchTile, profile area, and logical grouping for a professional look.
- 🌙 **Dark mode toggle:** Dark mode can be enabled or disabled from settings, preference is saved and applied across the app.
- 📝 **Notes page UI/UX:** Modern, accessible, and user-friendly notes list.

### 🪛 Improvements

- 🐞 No error occurs if old notes lack the `favorite` field; defaults to `false`.
- 🎨 All pages now comply with Material 3 and accessibility standards.
- ⚡ Performance and animation improvements.
- 🌐 All new UI texts are localized in Turkish, English, and Italian.

### 🐞 Known Limitations

- 🔄 Some highlighted features are not reset when the language is changed (to be fixed in v1.0.4).
- 🧪 Still alpha: Some UI elements may change or behave unexpectedly.

### 🧭 Coming Soon (v1.0.4+ roadmap)

- 🤖 Real AI-powered photo and note classification.
- 📍 Location-based photo sorting.
- 📝 Rich note editing (Markdown + embedded images).
- ☁️ Secure backup/synchronization (encrypted & offline-first).

---

## 🔖 v1.0.2-alpha – Smarter Gallery Filtering (June 25, 2025)

In this update, Notia offers a more organized and discoverable gallery with smart folder filtering.

### ✨ New Features

- 🧠 **Smart folder filtering:** Subfolders (Camera, Screenshots, etc.) are detected and can be filtered in the gallery.
- 💡 **“AI-powered” section:** A highlighted area guiding users to the smart filtering system.
- 🚀 **Tag suggestion logic:** Static tag suggestions based on file paths and folder structure.
- 🔄 **Pulse animation:** Eye-catching animation in the smart filtering section.
- 📥 **Automatic update check & APK download:** Check for updates from settings, download and install APK directly.
- 🔔 **User-friendly update notifications:** Localized snackbars inform about update status.
- ⚙️ **Permission management:** Necessary permissions are requested before APK installation.
- 📁 **Real-time folder picker updates:** When the photo folder is changed from settings, the gallery updates instantly.

### 🪛 Improvements

- 📂 The folder picker now instantly updates the gallery.
- 🖼️ The photo counter shows both filtered and total images.
- ⚙️ Parallel file validation and better filtering performance.
- 🧹 Update flow cleaned up, easier debugging.
- 🌐 All new UI texts are localized in Turkish, English, and Italian.
- 📝 Added a “What’s New?” page accessible from settings.

### 🐞 Known Limitations

- ❗ “AI-powered” features are currently logic-based; real machine learning will come in future versions.
- 🔄 Changing the language does not reset highlighted features (to be fixed in v1.0.3).
- 🧪 Still alpha: Some UI elements may change or behave unexpectedly.
- 📲 Manual permission is required for APK installation.

### 🧭 Coming Soon (v1.0.3+ roadmap)

- 🤖 Real AI-powered camera/screenshot classification.
- 📍 Location-based photo sorting.
- 📝 Rich note editing (Markdown + embedded images).
- ☁️ Secure backup/synchronization (encrypted & offline-first).

---

## 🔖 v1.0.1-alpha – First Open Alpha Release (June 20, 2025)

Notia's first alpha release is live as your personal photo journal.

### ✨ New Features

- 🌍 **Multi-language support:** Turkish, English, and Italian. Can be changed from settings.
- 📚 **Onboarding screen:** Introduces new users to Notia’s purpose.
- 📷 **Photo viewer improvements:** Cleaner look with title, description, and tags.
- 🧭 **Navigation improvements:** “Next” and “Previous” buttons for navigating photos.
- ⚙️ **Developer tools:** Debug panel in settings.

### 🪛 Improvements

- 📖 All visible texts are localized with Flutter’s `flutter_localizations` and `intl` packages.
- 🎨 Material 3 visual refresh.
- 🛠️ `l10n.yaml` for localization asset management.
- 🧱 App structure made ready for internationalization.

### 🐞 Known Limitations

- 🗣️ Some static UI elements are not yet localized.
- 🤖 AI features are placeholders (coming soon 🚧).
- ⚠️ Early alpha – data loss may occur between updates.
