# Changelog

All notable changes to **IG-Munfollow** are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[README](./README.md) · [Releases](https://github.com/Miabeyefendi/IG-Munfollow/releases)

---

## [Unreleased]

### Changed

- Repository renamed from `Munfollow` to `IG-Munfollow`. The old URL redirects,
  so existing links and clones keep working.
- README rewritten and published in five languages: English, Turkish, Spanish,
  Chinese and Russian.
- Licensed under AGPL-3.0. The repository previously shipped with no license
  file at all, which legally meant all rights reserved.

### Fixed

- The creator URL in the script header pointed at a lowercase repository name
  that no longer resolves. It now points at this repository.

---

## [4.0.0] - 2026-02-26

A rewrite from scratch. The filtering, sorting and pacing systems are all new,
which is why this is a major version rather than an increment.

### Added

- Filter the following list seven ways: everyone, non-followers, mutuals,
  private accounts, verified accounts, accounts with no profile picture, and
  close friends.
- Sort by follow date, newest first or oldest first, so recently added accounts
  and long-forgotten ones can be reviewed separately.
- Anti-ban pacing. A randomised wait between actions with a configurable
  minimum and maximum, plus an automatic pause after a set number of unfollows
  for a duration you choose.
- Live statistics for total scanned, non-followers, mutuals, selected, and
  successful unfollows.
- Select all, or pick rows by hand before running anything.
- Interface in English, Turkish and Spanish, switched inside the panel.
- A floating panel that sits over Instagram without disturbing the page layout
  underneath it.

### Security

- The script refuses to run on any host other than `www.instagram.com`.

---

[Unreleased]: https://github.com/Miabeyefendi/IG-Munfollow/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/Miabeyefendi/IG-Munfollow/releases/tag/v4.0.0
