<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
  <img src="./assets/logo.svg" width="120" alt="IG-Munfollow">
</picture>

# IG-Munfollow

**Instagram'da seni geri takip etmeyenleri gör ve toplu olarak takipten çık. Tarayıcı konsolunda çalışır, kurulum yok, şifre yok, aracı yok.**

[![Lisans: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-A78BFA?style=for-the-badge&logo=gnu&logoColor=white)](./LICENSE)
[![Sürüm](https://img.shields.io/github/v/release/Miabeyefendi/IG-Munfollow?style=for-the-badge&color=F59E0B&label=version)](https://github.com/Miabeyefendi/IG-Munfollow/releases/latest)
[![Platform](https://img.shields.io/badge/Browser_Console-1E293B?style=for-the-badge&logo=googlechrome&logoColor=white)](#-kurulum)
[![Durum](https://img.shields.io/badge/status-active-22C55E?style=for-the-badge)](#)
[![Yazar](https://img.shields.io/badge/by-Miabeyefendi-0EA5E9?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Miabeyefendi)

[English](./README.md) · **Türkçe** · [Español](./README_ES.md) · [简体中文](./README_ZH.md) · [Русский](./README_RU.md)

[Kurulum](#-kurulum) · [Özellikler](#-öne-çıkanlar) · [Kullanım](#-hızlı-başlangıç) · [Ayarlar](#️-yapılandırma) · [Değişiklikler](./CHANGELOG.md)

<a href="https://github.com/Miabeyefendi/IG-Munfollow/releases/latest">
  <img src="./assets/btn-download.svg" height="52" alt="En son sürümü indir">
</a>
<a href="./CHANGELOG.md">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-changelog-dark.svg">
    <img src="./assets/btn-changelog.svg" height="52" alt="Değişiklikler">
  </picture>
</a>

</div>

---

## ✨ Öne çıkanlar

- **Hiçbir şey kurulmuyor, şifre paylaşılmıyor** - tek bir script, zaten giriş yapmış olduğun sayfada kendi tarayıcı konsoluna yapıştırılıyor. Arada bir uygulama yok, dolayısıyla kimlik bilgilerini verecek bir yer de yok.
- **Takip listeni yedi şekilde ayır** - herkes, geri takip etmeyenler, karşılıklılar, gizli hesaplar, onaylı hesaplar, profil fotoğrafı olmayanlar ve yakın arkadaşlar.
- **Ne zaman takip ettiğine göre sırala** - son hataları gözden geçirmek için yeniden eskiye, yıllar önce takip edip unuttuklarını temizlemek için eskiden yeniye.
- **Ban önleyici tempolama** - alt ve üst sınırı ayarlanabilir rastgele bekleme, ayrıca belirlediğin sayıda takipten çıkma sonrası otomatik mola.
- **Canlı istatistik** - toplam taranan, geri takip etmeyen, karşılıklı, seçili ve başarılı takipten çıkma sayacı.
- **Hepsini seç, ya da elle ayıkla** - liste senin, hiçbir şey olmadan önce gözden geçirirsin.
- **Üç dilde arayüz** - İngilizce, Türkçe ve İspanyolca, panelin içinden değiştirilir.
- **Instagram'ın üstünde yüzer** - panel sayfanın üstünde durur, altındaki düzeni bozmaz.

---

## 📦 Kurulum

### Gereksinimler

| | |
|---|---|
| Tarayıcı | Masaüstünde Chrome, Edge veya Firefox |
| Hesap | `www.instagram.com` adresinde giriş yapmış bir Instagram hesabı |
| Kurulum | Yok. Bu tek dosyalık bir konsol scripti. |

![JavaScript](https://img.shields.io/badge/JavaScript-1E293B?style=for-the-badge&logo=javascript&logoColor=A78BFA)
![Instagram](https://img.shields.io/badge/Instagram-1E293B?style=for-the-badge&logo=instagram&logoColor=A78BFA)

### Scripti al

[`Munfollow.js`](./Munfollow.js) dosyasını aç ve tamamını kopyala. Programın tamamı bu.

<details>
<summary><b>Klonlamayı mı tercih edersin?</b></summary>

```bash
git clone https://github.com/Miabeyefendi/IG-Munfollow.git
```

Derleme adımı yok, bağımlılık yok. `.js` dosyasını aç, içeriğini kopyala.

</details>

---

## 🚀 Hızlı başlangıç

1. Masaüstünde [www.instagram.com](https://www.instagram.com/) adresine git ve giriş yap.
2. Konsolu aç. Chrome ve Edge'de `F12` veya `Ctrl + Shift + J`, Firefox'ta `Ctrl + Shift + K`. Mac'te `Cmd + Option + J`.
3. Scriptin tamamını yapıştır ve Enter'a bas.
4. Panel sayfanın üstünde belirir. **Scan Following** düğmesine bas.

Script yalnızca `www.instagram.com` üzerinde çalışır, başka her yerde hemen durur.

Tarama bittiğinde sayılar ve kullanıcı listesi gelir. Bir filtre seç, satırları gözden geçir, istediklerini işaretle, sonra **Unfollow Selected** düğmesine bas. Onaylamadan hiçbir şey olmaz.

> **İlk çalıştırmada gecikmeleri düşürme.** Instagram, takipten çıkma konusunda otomatikleştirebileceğin neredeyse her şeyden daha katı. Varsayılanlar bilerek temkinli ve işlem engeli yiyen çalıştırma hızlı olanıdır.

---

## ⚙️ Yapılandırma

Her şey panelden ayarlanır, dosyada hiçbir şey düzenlenmez.

### Filtreler

| Filtre | Gösterdiği |
|---|---|
| All Following | Takip ettiğin herkes |
| Non-Followers | Takip ettiğin ama seni geri takip etmeyenler |
| Mutuals | Takip ettiğin ve seni de takip edenler |
| Private Accounts | Profili gizli olan hesaplar |
| Verified Accounts | Onay rozeti olan hesaplar |
| No Profile Picture | Hiç avatar koymamış hesaplar, genelde terk edilmiş veya sahte |
| Close Friends | Yakın arkadaş listendeki hesaplar |

### Sıralama

| Seçenek | Sıra |
|---|---|
| Newest to Oldest | En son takip ettiklerin önce |
| Oldest to Newest | En eski takiplerin önce |

### Ban önleyici

| Ayar | Ne yapar |
|---|---|
| Min Delay (s) | Takipten çıkmalar arası rastgele beklemenin alt sınırı |
| Max Delay (s) | Aynı beklemenin üst sınırı |
| Auto Pause (Actions) | Bu kadar işlemden sonra mola ver |
| Pause Duration (s) | Molanın süresi |

**Tempolama, sade haliyle.** Script her takipten çıkmadan önce alt ve üst sınır arasında rastgele bir süre bekler, otomatik mola sayısına ulaştığında ise mola süresi boyunca tamamen durur. Ham sayılardan çok rastgelelik önemli: sabit aralık, dünyada tespit edilmesi en kolay şeydir.

---

## 📖 Belgeler

- [**Değişiklikler**](./CHANGELOG.md) - her sürümde ne değişti
- [**Katkıda bulunma**](./CONTRIBUTING.md) - nasıl değişiklik gönderilir
- [**Güvenlik**](./SECURITY.md) - zafiyet nasıl özel olarak bildirilir

---

## ❓ Sık sorulanlar

<details>
<summary><b>Bu hesabıma işlem engeli getirir mi?</b></summary>

Getirebilir, üstelik takipten çıkma Instagram'ın en yakından izlediği işlemdir. Bu araç kendini rastgele gecikmeler ve planlı molalarla insan hızında tutuyor ama hiçbir tempolama garanti değildir. Gecikmeleri cömert tut, küçük gruplar halinde çalış ve bir uyarı görürsen o gün için bırak. Riski sen üstleniyorsun, Sorumluluk Reddi'ne bak.

</details>

<details>
<summary><b>Şifremi vermem gerekiyor mu?</b></summary>

Hayır, verse de kullanamaz. Script zaten giriş yapmış olduğun sayfanın içinde çalışıyor ve o oturumu kullanıyor, tıpkı düğmelere kendin tıklaman gibi. Kimlik bilgilerini asla görmez ve hiçbir üçüncü tarafa hiçbir şey göndermez. Bunun bir uygulama değil de konsol scripti olmasının tüm sebebi bu.

</details>

<details>
<summary><b>"Profil fotoğrafı olmayan" hesap ne demek?</b></summary>

Hiç avatar koymamış hesap. Geri takip etmeyenler filtresiyle birleştirdiğinde, takip listeni şişiren terk edilmiş ve sahte hesapları bulmanın en hızlı yolu.

</details>

<details>
<summary><b>Yanlışlıkla yakın arkadaşlarımı takipten çıkarır mı?</b></summary>

Sen seçmedikçe hayır. Yakın arkadaşların kendi filtresi var, o listeyi bilerek gözden geçirebilirsin; korumak için de, incelemek için de.

</details>

<details>
<summary><b>Panel açılmadı.</b></summary>

`www.instagram.com` üzerinde olduğundan (alt alan adı veya mobil site değil) ve konsolun hata vermediğinden emin ol. Bazı tarayıcılar yapıştırılan kodu kabul etmeden önce konsola bir kez `allow pasting` yazmanı istiyor.

</details>

<details>
<summary><b>Yarısında durdu.</b></summary>

Sekmeyi kapatmak veya yenilemek çalışmayı bitirir. Tamamlanmış takipten çıkmalar tamamlanmış kalır. Yeniden tara, liste güncel durumu gösterir.

</details>

---

## 🤝 Katkıda bulunma

Katkılar memnuniyetle karşılanır. Önce [CONTRIBUTING.md](./CONTRIBUTING.md) ve [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) dosyalarını oku. Katkıda bulunarak eserini AGPL-3.0 altında lisanslamayı kabul edersin.

<div align="center">
<a href="https://github.com/Miabeyefendi/IG-Munfollow/issues/new?template=bug_report.yml">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-report-bug-dark.svg">
    <img src="./assets/btn-report-bug.svg" height="52" alt="Hata bildir">
  </picture>
</a>
<a href="https://github.com/Miabeyefendi/IG-Munfollow/stargazers">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/btn-star-dark.svg">
    <img src="./assets/btn-star.svg" height="52" alt="Bu depoya yıldız ver">
  </picture>
</a>
</div>

---

## 🛡️ Güvenlik

Bir zafiyet mi buldun? Halka açık issue açma. [SECURITY.md](./SECURITY.md) dosyasındaki özel süreci izle.

---

## 📜 Lisans

IG-Munfollow; [NOTICE](./NOTICE) dosyasındaki ek şartlarla birlikte **GNU Affero General Public License v3.0 (AGPL-3.0)** altında lisanslanmıştır. Kısaca:

- Eksiksiz kaynak kodu AGPL-3.0 altında erişilebilir tuttuğun sürece (barındırılan, SaaS veya ağ kullanımı dahil, AGPL Bölüm 13) ve aşağıdaki yazar atfını koruduğun sürece bu eseri **ücretsiz** kullanabilir, inceleyebilir, değiştirebilir, dağıtabilir ve hatta para kazanabilirsin.
- Bu eseri kapalı kaynaklı veya tescilli bir üründe kullanmak ya da kapalı bir SaaS olarak çalıştırmak için **ayrı, yazılı bir ticari lisans** gerekir; royalti veya gelir payı içerebilir. Bkz. [NOTICE](./NOTICE), Bölüm 8; benimle iletişime geç.

### Atıf (zorunlu)

AGPL-3.0 Bölüm 7(b) uyarınca aşağıdaki atıf; bu projenin her kopyasında, fork'unda veya dağıtımında görünür ve değiştirilmeden korunmalıdır:

> **Miabeyefendi (Mustafa İhsan Albayrak)** - https://github.com/Miabeyefendi

### Sorumluluk reddi

Bu yazılım, hiçbir garanti olmaksızın "olduğu gibi" sunulur. Tamamen kendi riskinle çalıştırırsın ve kendi kullanımından, etkileştiği herhangi bir üçüncü taraf platformun (özellikle Instagram) kullanım koşullarına uymak dahil, yalnızca sen sorumlusun. Instagram bu projeyle bağlı veya onu onaylamış değildir; adı ve ticari markaları sahibine aittir. Yazar; hesap yasakları, işlem engelleri, veri kaybı veya başka herhangi bir zarardan, uygulanabilir yasanın izin verdiği azami ölçüde sorumlu değildir. Tam şartlar [LICENSE](./LICENSE) ve [NOTICE](./NOTICE) dosyalarındadır.

---

## 📬 İletişim

- GitHub: [@Miabeyefendi](https://github.com/Miabeyefendi)
- Ticari lisanslama veya gelir paylaşımı için GitHub profilim üzerinden bana ulaş.

<div align="center">
<br/>
<img src="./assets/divider.svg" width="100%" height="3" alt="">
<br/>
<sub><b><a href="https://github.com/Miabeyefendi">Miabeyefendi</a></b> tarafından yapıldı</sub>
</div>
