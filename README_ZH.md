<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
  <img src="./assets/logo.svg" width="120" alt="IG-Munfollow">
</picture>

# IG-Munfollow

**看清 Instagram 上谁没有回关你，然后批量取关。在浏览器控制台里运行，不用安装，不用密码，中间没有任何第三方。**

[![许可证: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-A78BFA?style=for-the-badge&logo=gnu&logoColor=white)](./LICENSE)
[![版本](https://img.shields.io/github/v/release/Miabeyefendi/IG-Munfollow?style=for-the-badge&color=F59E0B&label=version)](https://github.com/Miabeyefendi/IG-Munfollow/releases/latest)
[![平台](https://img.shields.io/badge/Browser_Console-1E293B?style=for-the-badge&logo=googlechrome&logoColor=white)](#-安装)
[![状态](https://img.shields.io/badge/status-active-22C55E?style=for-the-badge)](#)
[![作者](https://img.shields.io/badge/by-Miabeyefendi-0EA5E9?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Miabeyefendi)

[English](./README.md) · [Türkçe](./README_TR.md) · [Español](./README_ES.md) · **简体中文** · [Русский](./README_RU.md)

[安装](#-安装) · [功能](#-亮点) · [用法](#-快速开始) · [配置](#️-配置) · [更新日志](./CHANGELOG.md)

<a href="https://github.com/Miabeyefendi/IG-Munfollow/releases/latest">
  <img src="./assets/btn-download.svg" height="52" alt="下载最新版本">
</a>
<a href="./CHANGELOG.md">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-changelog-dark.svg">
    <img src="./assets/btn-changelog.svg" height="52" alt="更新日志">
  </picture>
</a>

</div>

---

## ✨ 亮点

- **什么都不装，也不交密码** - 一个脚本，粘进你自己的浏览器控制台，在你已经登录的页面上。中间没有任何应用，所以也没有地方可以交出你的凭据。
- **八种方式切分列表** - 你关注的全部、未回关、互关、私密账号、认证账号、没有头像的账号、密友，以及你没有回关的粉丝。
- **按关注时间排序** - 从新到旧，回看最近的失误；从旧到新，清理几年前关注又忘掉的人。
- **防封节奏控制** - 操作之间随机等待，上下限可调，另外在达到设定次数后自动暂停。
- **实时统计** - 已扫描总数、未回关、互关、已选中，以及成功取关的计数。
- **全选，或者手动挑** - 列表是你的，在任何事情发生之前先过一遍。
- **三语界面** - 英语、土耳其语和西班牙语，在面板内切换。
- **浮在 Instagram 之上** - 面板停在页面上层，不会破坏下面的布局。

---

## 📦 安装

### 环境要求

| | |
|---|---|
| 浏览器 | 桌面端 Chrome、Edge 或 Firefox |
| 账号 | 在 `www.instagram.com` 已登录的 Instagram 账号 |
| 安装 | 无。这是一个单文件控制台脚本。 |

![JavaScript](https://img.shields.io/badge/JavaScript-1E293B?style=for-the-badge&logo=javascript&logoColor=A78BFA)
![Instagram](https://img.shields.io/badge/Instagram-1E293B?style=for-the-badge&logo=instagram&logoColor=A78BFA)

### 获取脚本

打开 [`Munfollow.js`](./Munfollow.js) 并复制整个文件。这就是全部程序。

<details>
<summary><b>更想用克隆？</b></summary>

```bash
git clone https://github.com/Miabeyefendi/IG-Munfollow.git
```

没有构建步骤，也没有依赖。打开 `.js` 文件，复制里面的内容即可。

</details>

---

## 🚀 快速开始

1. 在桌面端打开 [www.instagram.com](https://www.instagram.com/) 并登录。
2. 打开控制台。Chrome 和 Edge 按 `F12` 或 `Ctrl + Shift + J`，Firefox 按 `Ctrl + Shift + K`。Mac 上按 `Cmd + Option + J`。
3. 粘贴整个脚本，回车。
4. 面板会浮现在页面上。点 **Scan Following**。

脚本只在 `www.instagram.com` 上运行，在其他任何地方都会立刻停下。

扫描完成后你会看到计数和用户列表。选一个筛选条件，过一遍那些行，勾选你要的，然后点 **Unfollow Selected**。在你确认之前什么都不会发生。

> **第一次跑的时候不要调低等待时间。** 在所有可以自动化的动作里，取关是 Instagram 盯得最紧的一个。默认值是刻意保守的，被限制操作的往往是跑得快的那一次。

---

## ⚙️ 配置

一切都在面板里设置，不用改文件。

### 过滤器

| 过滤器 | 显示 |
|---|---|
| All Following | 你关注的所有人 |
| Non-Followers | 你关注了但没有回关你的人 |
| Mutuals | 你关注了并且也关注你的人 |
| Private Accounts | 资料设为私密的账号 |
| Verified Accounts | 带认证标记的账号 |
| No Profile Picture | 从来没设过头像的账号，通常是废弃号或假号 |
| Close Friends | 你的密友列表中的账号 |
| Followers Not Followed Back | 关注了你但你没有回关的人；选中后会将其从粉丝中移除 |

### 排序

| 选项 | 顺序 |
|---|---|
| Newest to Oldest | 最近关注的排在前面 |
| Oldest to Newest | 关注最久的排在前面 |

### 防封

| 设置 | 作用 |
|---|---|
| Min Delay (s) | 两次取关之间随机等待的下限 |
| Max Delay (s) | 同一等待的上限 |
| Auto Pause (Actions) | 完成这么多次操作后休息一下 |
| Pause Duration (s) | 休息多久 |

**节奏，说人话。** 每次取关之前，脚本会在下限和上限之间随机等待若干秒；当完成设定的自动暂停次数后，会完全停下相应的时长。比具体数字更重要的是随机性：固定间隔是这世上最容易被识别出来的东西。

---

## 📖 文档

- [**更新日志**](./CHANGELOG.md) - 每个版本改了什么
- [**参与贡献**](./CONTRIBUTING.md) - 如何提交修改
- [**安全**](./SECURITY.md) - 如何私下报告漏洞

---

## ❓ 常见问题

<details>
<summary><b>这会让我的账号被限制操作吗？</b></summary>

有可能，而且取关正是 Instagram 盯得最紧的动作。这个工具用随机延迟和定时暂停把自己控制在人类速度范围内，但没有任何节奏能打包票。把等待留得宽裕些，小批量地做，看到警告就当天收手。风险由你承担，见免责声明。

</details>

<details>
<summary><b>我必须把密码给它吗？</b></summary>

不用，而且它也用不了。脚本运行在你已经登录的页面里，用的就是那个会话，和你自己点按钮完全一样。它从不接触你的凭据，也从不向任何第三方发送任何东西。这正是它做成控制台脚本而不是应用的全部原因。

</details>

<details>
<summary><b>"没有头像"的账号指什么？</b></summary>

从来没设过头像的账号。把它和未回关过滤器组合起来，是找出那些撑大你关注列表的废弃号和假号最快的办法。

</details>

<details>
<summary><b>它会误取关我的密友吗？</b></summary>

除非你自己勾选，否则不会。密友有单独的过滤器，你可以有意识地去看那份名单，无论是为了保护它还是复查它。

</details>

<details>
<summary><b>面板没出现。</b></summary>

确认你在 `www.instagram.com` 上，而不是子域名或移动版，并且控制台没有报错。有些浏览器要求你先在控制台里输入一次 `allow pasting`，之后才接受粘贴的代码。

</details>

<details>
<summary><b>跑到一半停了。</b></summary>

关闭或刷新标签页会结束本次运行。已经完成的取关仍然有效。重新扫描一次，列表会反映最新状态。

</details>

---

## 🤝 参与贡献

欢迎贡献。请先阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 和 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)。提交贡献即表示你同意以 AGPL-3.0 许可你的成果。

<div align="center">
<a href="https://github.com/Miabeyefendi/IG-Munfollow/issues/new?template=bug_report.yml">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-report-bug-dark.svg">
    <img src="./assets/btn-report-bug.svg" height="52" alt="报告问题">
  </picture>
</a>
<a href="https://github.com/Miabeyefendi/IG-Munfollow/stargazers">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-star-dark.svg">
    <img src="./assets/btn-star.svg" height="52" alt="给这个仓库点星">
  </picture>
</a>
</div>

---

## 🛡️ 安全

发现漏洞了？不要公开提 issue。请按 [SECURITY.md](./SECURITY.md) 中的私密流程处理。

---

## 📜 许可证

IG-Munfollow 依据 **GNU Affero General Public License v3.0 (AGPL-3.0)** 授权，并附带 [NOTICE](./NOTICE) 文件中的补充条款。简单说：

- 只要你把完整源代码继续以 AGPL-3.0 提供出去（包括任何托管、SaaS 或网络形式的使用，见 AGPL 第 13 条），并保留下面的作者署名，你就可以**免费**使用、研究、修改、再分发本软件，甚至用它赚钱。
- 若要把本作品用于闭源或专有产品，或作为闭源 SaaS 运行，你需要一份**单独的书面商业许可**，其中可能包含分成或版税。见 [NOTICE](./NOTICE) 第 8 节，并与我联系。

### 署名（强制）

根据 AGPL-3.0 第 7(b) 条，以下署名必须在本项目的任何副本、复刻或部署中原样、可见地保留：

> **Miabeyefendi (Mustafa Ihsan Albayrak)** - https://github.com/Miabeyefendi

### 免责声明

本软件按"原样"提供，不含任何形式的担保。你完全自担风险运行它，并对自己的使用独自负责，包括遵守它所交互的任何第三方平台的服务条款，尤其是 Instagram。Instagram 与本项目没有关联，也未为其背书；其名称和商标归其所有者。在适用法律允许的最大范围内，作者对账号封禁、操作限制、数据丢失或任何其他损害不承担责任。完整条款见 [LICENSE](./LICENSE) 与 [NOTICE](./NOTICE) 文件。

---

## 📬 联系方式

- GitHub：[@Miabeyefendi](https://github.com/Miabeyefendi)
- 商业授权或分成相关事宜，请通过我的 GitHub 主页联系我。

<div align="center">
<br/>
<img src="./assets/divider.svg" width="100%" height="3" alt="">
<br/>
<sub>由 <b><a href="https://github.com/Miabeyefendi">Miabeyefendi</a></b> 制作</sub>
</div>
