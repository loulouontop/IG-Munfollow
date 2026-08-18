<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
  <img src="./assets/logo.svg" width="120" alt="IG-Munfollow">
</picture>

# IG-Munfollow

**See who does not follow you back on Instagram and unfollow them in bulk. Runs in your browser console, no install, no password, no third party.**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-A78BFA?style=for-the-badge&logo=gnu&logoColor=white)](./LICENSE)
[![Version](https://img.shields.io/github/v/release/Miabeyefendi/IG-Munfollow?style=for-the-badge&color=F59E0B&label=version)](https://github.com/Miabeyefendi/IG-Munfollow/releases/latest)
[![Platform](https://img.shields.io/badge/Browser_Console-1E293B?style=for-the-badge&logo=googlechrome&logoColor=white)](#-installation)
[![Status](https://img.shields.io/badge/status-active-22C55E?style=for-the-badge)](#)
[![Author](https://img.shields.io/badge/by-Miabeyefendi-0EA5E9?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Miabeyefendi)

**English** · [Türkçe](./README_TR.md) · [Español](./README_ES.md) · [简体中文](./README_ZH.md) · [Русский](./README_RU.md)

[Install](#-installation) · [Features](#-highlights) · [Usage](#-quick-start) · [Config](#️-configuration) · [Changelog](./CHANGELOG.md)

<a href="https://github.com/Miabeyefendi/IG-Munfollow/releases/latest">
  <img src="./assets/btn-download.svg" height="52" alt="Download the latest release">
</a>
<a href="./CHANGELOG.md">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-changelog-dark.svg">
    <img src="./assets/btn-changelog.svg" height="52" alt="Changelog">
  </picture>
</a>

</div>

---

## ✨ Highlights

- **Nothing is installed and no password is shared** - one script, pasted into your own browser console on a page you are already logged into. There is no app in the middle, so there is nothing to hand your credentials to.
- **Seven ways to slice your following list** - everyone, non-followers, mutuals, private accounts, verified accounts, accounts with no profile picture, and close friends.
- **Sort by when you followed them** - newest first to review recent mistakes, or oldest first to clear out the people you followed years ago and forgot.
- **Anti-ban pacing** - randomised delay between actions with a configurable floor and ceiling, plus an automatic pause after a set number of unfollows.
- **Live statistics** - total scanned, non-followers, mutuals, selected, and a running count of successful unfollows.
- **Select all, or pick by hand** - the list is yours to review before anything happens.
- **Interface in three languages** - English, Turkish and Spanish, switched inside the panel.
- **Floats over Instagram** - the panel sits on top without breaking the page layout underneath.

---

## 📦 Installation

### Requirements

| | |
|---|---|
| Browser | Chrome, Edge or Firefox on desktop |
| Account | An Instagram account you are logged into, at `www.instagram.com` |
| Install | None. This is a single console script. |

![JavaScript](https://img.shields.io/badge/JavaScript-1E293B?style=for-the-badge&logo=javascript&logoColor=A78BFA)
![Instagram](https://img.shields.io/badge/Instagram-1E293B?style=for-the-badge&logo=instagram&logoColor=A78BFA)

### Get the script

Open [`Munfollow.js`](./Munfollow.js) and copy the whole file. That is the entire program.

<details>
<summary><b>Prefer to clone it?</b></summary>

```bash
git clone https://github.com/Miabeyefendi/IG-Munfollow.git
```

No build step and no dependencies. Open the `.js` file and copy its contents.

</details>

---

## 🚀 Quick Start

1. Go to [www.instagram.com](https://www.instagram.com/) on desktop and log in.
2. Open the console. `F12` or `Ctrl + Shift + J` on Chrome and Edge, `Ctrl + Shift + K` on Firefox. On a Mac, `Cmd + Option + J`.
3. Paste the whole script and press Enter.
4. The panel appears over the page. Press **Scan Following**.

The script only runs on `www.instagram.com` and stops immediately anywhere else.

After the scan you get the counts and the user list. Pick a filter, review the rows, select what you want, then press **Unfollow Selected**. Nothing happens until you confirm.

> **Do not lower the delays on your first run.** Instagram is stricter about unfollowing than almost anything else you can automate. The defaults are conservative on purpose, and a fast run is the one that gets action blocked.

---

## ⚙️ Configuration

Everything is set in the panel, nothing is edited in the file.

### Filters

| Filter | Shows |
|---|---|
| All Following | Everyone you follow |
| Non-Followers | People you follow who do not follow you back |
| Mutuals | People you follow who follow you back |
| Private Accounts | Accounts with a private profile |
| Verified Accounts | Accounts with the verified badge |
| No Profile Picture | Accounts that never set an avatar, usually abandoned or fake |
| Close Friends | Accounts on your close friends list |

### Sorting

| Option | Order |
|---|---|
| Newest to Oldest | Most recently followed first |
| Oldest to Newest | Longest-standing follows first |

### Anti-ban

| Setting | What it does |
|---|---|
| Min Delay (s) | Lower bound of the random wait between unfollows |
| Max Delay (s) | Upper bound of that wait |
| Auto Pause (Actions) | Take a break after this many unfollows |
| Pause Duration (s) | How long that break lasts |

**Pacing, in plain terms.** Before each unfollow the script waits a random number of seconds between the minimum and the maximum, and once it has completed the auto pause count it stops entirely for the pause duration. Randomness matters more than the raw numbers: a fixed interval is the easiest thing in the world to detect.

---

## 📖 Documentation

- [**Changelog**](./CHANGELOG.md) - what changed in each release
- [**Contributing**](./CONTRIBUTING.md) - how to send a change
- [**Security**](./SECURITY.md) - how to report a vulnerability privately

---

## ❓ FAQ

<details>
<summary><b>Can this get my account action blocked?</b></summary>

Yes, it can, and unfollowing is the action Instagram watches most closely. This tool paces itself with randomised delays and scheduled pauses to stay in a human range, but no pacing is a guarantee. Keep the delays generous, work in small batches, and stop for the day if you see a warning. You accept the risk, see the Disclaimer.

</details>

<details>
<summary><b>Do I have to give it my password?</b></summary>

No, and it could not use one. The script runs inside a page you have already logged into and uses that session, the same as clicking the buttons yourself. It never sees your credentials and never sends anything to a third party. That is the whole reason this is a console script and not an app.

</details>

<details>
<summary><b>What is a "no profile picture" account?</b></summary>

An account that never set an avatar. Combined with the non-followers filter it is a fast way to find the abandoned and fake accounts padding your following list.

</details>

<details>
<summary><b>Will it unfollow my close friends by accident?</b></summary>

Not unless you select them. Close friends have their own filter so you can check that list deliberately, either to protect it or to review it.

</details>

<details>
<summary><b>The panel did not appear.</b></summary>

Check that you are on `www.instagram.com` and not a subdomain or the mobile site, and that the console did not report an error. Some browsers require you to type `allow pasting` in the console once before they accept pasted code.

</details>

<details>
<summary><b>It stopped halfway through.</b></summary>

Closing or reloading the tab ends the run. Unfollows already completed stay completed. Scan again and the list will reflect the new state.

</details>

---

## 🤝 Contributing

Contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) first. By contributing you agree to license your work under the AGPL-3.0.

<div align="center">
<a href="https://github.com/Miabeyefendi/IG-Munfollow/issues/new?template=bug_report.yml">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-report-bug-dark.svg">
    <img src="./assets/btn-report-bug.svg" height="52" alt="Report a bug">
  </picture>
</a>
<a href="https://github.com/Miabeyefendi/IG-Munfollow/stargazers">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-star-dark.svg">
    <img src="./assets/btn-star.svg" height="52" alt="Star this repository">
  </picture>
</a>
</div>

---

## 🛡️ Security

Found a vulnerability? Do not open a public issue. Follow the private process in [SECURITY.md](./SECURITY.md).

---

## 📜 License

IG-Munfollow is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**, together with the supplemental terms in the [NOTICE](./NOTICE) file. In short:

- You may use, study, modify, redistribute and even make money with this work for free, **as long as** you keep the complete source code available under the AGPL-3.0, including for any hosted, SaaS or network use (AGPL Section 13), and you preserve the author attribution below.
- To use this work in a closed-source or proprietary product, or to run it as a closed SaaS, you need a **separate written commercial license**, which may include a royalty or revenue share. See [NOTICE](./NOTICE), Section 8, and contact me.

### Attribution (required)

Per AGPL-3.0 Section 7(b), the following attribution must be preserved, visibly and unmodified, in any copy, fork or deployment of this project:

> **Miabeyefendi (Mustafa Ihsan Albayrak)** - https://github.com/Miabeyefendi

### Disclaimer

This software is provided "as is", without warranty of any kind. You run it entirely at your own risk and are solely responsible for your own use, including compliance with the terms of service of any third-party platform it interacts with, notably Instagram. Instagram is not affiliated with or endorsing this project; its name and trademarks belong to their owner. The author accepts no liability for account bans, action blocks, data loss or any other damages, to the maximum extent permitted by applicable law. Full terms are in the [LICENSE](./LICENSE) and [NOTICE](./NOTICE) files.

---

## 📬 Contact

- GitHub: [@Miabeyefendi](https://github.com/Miabeyefendi)
- For commercial licensing or revenue-sharing enquiries, reach me through my GitHub profile.

<div align="center">
<br/>
<img src="./assets/divider.svg" width="100%" height="3" alt="">
<br/>
<sub>Built by <b><a href="https://github.com/Miabeyefendi">Miabeyefendi</a></b></sub>
</div>
