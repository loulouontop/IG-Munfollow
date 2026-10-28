/**
 * Munfollow - Massive Unfollow
 * Creator: https://github.com/Miabeyefendi/IG-Munfollow
 * Version: 4.3.2 (Multi-language, Filters, Sorting, Fans Not Followed)
 */

(function () {
    if (window.location.hostname !== 'www.instagram.com') {
        alert('This tool only works on Instagram!\nPlease go to https://www.instagram.com');
        window.location.href = 'https://www.instagram.com/';
        return;
    }

    const dict = {
        en: {
            appTitle: "Munfollow",
            appDesc: "Unfollow those who don't follow you!",
            antiBanGroup: "Anti-Ban Settings",
            minDelay: "Min Delay (s)",
            maxDelay: "Max Delay (s)",
            pauseCount: "Auto Pause (Actions)",
            pauseDuration: "Pause Duration (s)",
            scanBtn: "Scan Following",
            rescanBtn: "Rescan",
            scanning: "Scanning...",
            statsGroup: "Statistics",
            statTotal: "Total Scanned",
            statNonFollowers: "Non-Followers",
            statMutuals: "Mutuals",
            statSelected: "Selected",
            statSuccess: "Success Unfollowed",
            filtersGroup: "Filters & Sorting",
            filterLabel: "Filter Type",
            sortLabel: "Sort Direction",
            unfollowBtn: "Unfollow Selected",
            removeBtn: "Remove Selected Followers",
            unfollowing: "Processing...",
            pauseStatus: "Paused",
            selectAll: "Select All",
            emptyList: "Start scanning to see the list here.",
            confirmUnfollow: "Are you sure you want to unfollow the selected users?\n\nDo not close the page during the process.",
            confirmRemove: "Are you sure you want to remove the selected followers?\n\nDo not close the page during the process.",
            privateRequired: "Instagram only lets private accounts remove followers.\n\nSet your account to Private in Settings, then scan again.\n(Public accounts can only block people instead.)",
            processDone: "Process completed!\nSuccessfully processed: ",
            fAll: "All Following",
            fNonFollowers: "Non-Followers",
            fMutuals: "Mutuals",
            fPrivate: "Private Accounts",
            fVerified: "Verified Accounts",
            fNoPic: "No Profile Picture",
            fCloseFriends: "Close Friends",
            fFansNotFollowed: "Followers Not Followed Back",
            sNewest: "Newest to Oldest",
            sOldest: "Oldest to Newest",
            userList: "User List",
            badgeMutual: "Mutual",
            badgeNotFollowing: "Not Following",
            badgeFollowsYou: "Follows You",
            devLink: "Creator @miabeyefendi",
            githubLink: "Github: Munfollow"
        },
        tr: {
            appTitle: "Munfollow",
            appDesc: "Seni takip etmeyenleri takipten çık!",
            antiBanGroup: "Anti-Ban Ayarları",
            minDelay: "Min Bekleme (sn)",
            maxDelay: "Maks Bekleme (sn)",
            pauseCount: "Otomatik Mola (İşlem)",
            pauseDuration: "Mola Süresi (sn)",
            scanBtn: "Takip Edilenleri Tara",
            rescanBtn: "Yeniden Tara",
            scanning: "Taranıyor...",
            statsGroup: "İstatistikler",
            statTotal: "Toplam Taranan",
            statNonFollowers: "Takip Etmeyenler",
            statMutuals: "Karşılıklı",
            statSelected: "Seçilen",
            statSuccess: "Başarılı Çıkarma",
            filtersGroup: "Filtreleme & Sıralama",
            filterLabel: "Filtre Türü",
            sortLabel: "Sıralama (Takip Sırası)",
            unfollowBtn: "Seçilenleri Takipten Çık",
            removeBtn: "Seçilen Takipçileri Kaldır",
            unfollowing: "Devam Ediyor...",
            pauseStatus: "Mola Verildi",
            selectAll: "Tümünü Seç",
            emptyList: "Taramayı başlattığınızda kullanıcılar burada listelenecektir.",
            confirmUnfollow: "Seçilen kişileri takipten çıkmak istediğinize emin misiniz?\n\nİşlem sırasında sayfayı kapatmayın.",
            confirmRemove: "Seçilen takipçileri kaldırmak istediğinize emin misiniz?\n\nİşlem sırasında sayfayı kapatmayın.",
            privateRequired: "Instagram yalnızca gizli hesapların takipçi kaldırmasına izin verir.\n\nAyarlardan hesabını Gizli yap, sonra yeniden tara.\n(Açık hesaplar yalnızca engelleyebilir.)",
            processDone: "İşlem tamamlandı!\nBaşarıyla işlenen: ",
            fAll: "Tümü",
            fNonFollowers: "Takip Etmeyenler",
            fMutuals: "Takip Edenler (Karşılıklı)",
            fPrivate: "Gizli Hesaplar",
            fVerified: "Onaylı Hesaplar",
            fNoPic: "Profil Fotoğrafı Olmayanlar",
            fCloseFriends: "Yakın Arkadaşlar",
            fFansNotFollowed: "Takip Etmediğin Takipçiler",
            sNewest: "Sondan İlke Doğru (Son Takip)",
            sOldest: "İlkten Sona Doğru (İlk Takip)",
            userList: "Kullanıcı Listesi",
            badgeMutual: "Karşılıklı",
            badgeNotFollowing: "Takip Etmiyor",
            badgeFollowsYou: "Seni Takip Ediyor",
            devLink: "Yaratıcı @miabeyefendi",
            githubLink: "Github: Munfollow"
        },
        es: {
            appTitle: "Munfollow",
            appDesc: "¡Deja de seguir a los que no te siguen!",
            antiBanGroup: "Ajustes Anti-Ban",
            minDelay: "Retraso Min (s)",
            maxDelay: "Retraso Max (s)",
            pauseCount: "Pausa Auto (Acciones)",
            pauseDuration: "Duración de Pausa (s)",
            scanBtn: "Escanear",
            rescanBtn: "Escanear de Nuevo",
            scanning: "Escaneando...",
            statsGroup: "Estadísticas",
            statTotal: "Total Escaneado",
            statNonFollowers: "No Seguidores",
            statMutuals: "Mutuos",
            statSelected: "Seleccionado",
            statSuccess: "Dejados de seguir",
            filtersGroup: "Filtros y Orden",
            filterLabel: "Tipo de Filtro",
            sortLabel: "Orden",
            unfollowBtn: "Dejar de seguir",
            removeBtn: "Quitar seguidores seleccionados",
            unfollowing: "Procesando...",
            pauseStatus: "Pausado",
            selectAll: "Seleccionar Todo",
            emptyList: "Empieza a escanear para ver la lista aquí.",
            confirmUnfollow: "¿Estás seguro de que quieres dejar de seguir a los usuarios seleccionados?\n\nNo cierres la página durante el proceso.",
            confirmRemove: "¿Estás seguro de que quieres quitar a los seguidores seleccionados?\n\nNo cierres la página durante el proceso.",
            privateRequired: "Instagram solo permite quitar seguidores en cuentas privadas.\n\nPon tu cuenta en Privada en Ajustes y vuelve a escanear.\n(Las cuentas públicas solo pueden bloquear.)",
            processDone: "¡Proceso completado!\nCon éxito: ",
            fAll: "Todos",
            fNonFollowers: "No Seguidores",
            fMutuals: "Mutuos",
            fPrivate: "Cuentas Privadas",
            fVerified: "Cuentas Verificadas",
            fNoPic: "Sin Foto de Perfil",
            fCloseFriends: "Mejores Amigos",
            fFansNotFollowed: "Seguidores no seguidos",
            sNewest: "Más nuevos",
            sOldest: "Más antiguos",
            userList: "Lista de Usuarios",
            badgeMutual: "Mutuo",
            badgeNotFollowing: "No te sigue",
            badgeFollowsYou: "Te sigue",
            devLink: "Creador @miabeyefendi",
            githubLink: "Github: Munfollow"
        }
    };

    let lang = 'en';
    const t = (key) => dict[lang][key];

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    const userId = getCookie('ds_user_id');
    const csrfToken = getCookie('csrftoken');

    if (!userId || !csrfToken) {
        alert('User info not found. Make sure you are logged into Instagram.');
        return;
    }

    // Capture before wiping the DOM; web friendship POSTs need a real ajax hash
    const rolloutHash = (() => {
        try {
            const html = document.documentElement.innerHTML;
            const m = html.match(/"rollout_hash"\s*:\s*"([^"]+)"/);
            if (m && m[1]) return m[1];
        } catch (e) {}
        return '1';
    })();

    document.body.innerHTML = '';
    document.title = 'Munfollow - Massive Unfollow';

    // Application state
    let allUsers = [];
    let fansNotFollowed = [];
    let displayedUsers = [];
    let nonFollowersCount = 0;
    let mutualsCount = 0;
    let selectedUserIds = new Set();
    let closeFriendsIds = new Set();
    let isScanning = false;
    let isUnfollowing = false;
    let successCount = 0;

    function isFansNotFollowedFilter() {
        return filterSelect.value === 'FANS_NOT_FOLLOWED';
    }

    function findUserById(uid) {
        return allUsers.find(u => u.id === uid) || fansNotFollowed.find(u => u.id === uid);
    }

    const els = {};

    const app = document.createElement('div');
    app.style.cssText = 'min-height: 100vh; background-color: #09090b; color: #fafafa; font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column;';
    document.body.appendChild(app);

    // HEADER
    const header = document.createElement('header');
    header.style.cssText = 'background-color: #18181b; border-bottom: 1px solid #27272a; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;';
    app.appendChild(header);

    const logoContainer = document.createElement('div');
    logoContainer.style.cssText = 'display: flex; align-items: center; gap: 12px;';
    header.appendChild(logoContainer);

    const logoText = document.createElement('div');
    logoContainer.appendChild(logoText);

    els.appTitle = document.createElement('h1');
    els.appTitle.style.cssText = 'margin: 0; font-size: 22px; font-weight: 800; background: linear-gradient(to right, #22d3ee, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
    logoText.appendChild(els.appTitle);

    els.appDesc = document.createElement('span');
    els.appDesc.style.cssText = 'font-size: 13px; color: #a1a1aa; font-weight: 500;';
    logoText.appendChild(els.appDesc);

    const headerRight = document.createElement('div');
    headerRight.style.cssText = 'display: flex; align-items: center; gap: 16px; flex-wrap: wrap;';
    header.appendChild(headerRight);

    // Language selector
    const langContainer = document.createElement('div');
    langContainer.style.cssText = 'display: flex; gap: 8px; font-size: 20px;';
    [
        { id: 'en', flag: '🇬🇧' },
        { id: 'tr', flag: '🇹🇷' },
        { id: 'es', flag: '🇪🇸' }
    ].forEach(l => {
        const flagSpan = document.createElement('span');
        flagSpan.textContent = l.flag;
        flagSpan.style.cssText = 'cursor: pointer; opacity: 0.6; transition: opacity 0.2s;';
        flagSpan.addEventListener('mouseenter', () => flagSpan.style.opacity = '1');
        flagSpan.addEventListener('mouseleave', () => { if (lang !== l.id) flagSpan.style.opacity = '0.6'; });
        flagSpan.addEventListener('click', () => {
            lang = l.id;
            Array.from(langContainer.children).forEach(c => c.style.opacity = '0.6');
            flagSpan.style.opacity = '1';
            updateTranslations();
        });
        if (l.id === lang) flagSpan.style.opacity = '1';
        langContainer.appendChild(flagSpan);
    });
    headerRight.appendChild(langContainer);

    els.devLink = document.createElement('a');
    els.devLink.href = 'https://www.instagram.com/miabeyefendi/';
    els.devLink.target = '_blank';
    els.devLink.style.cssText = 'color: #22d3ee; text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 16px; background: rgba(34, 211, 238, 0.1); border-radius: 8px; transition: background 0.2s;';
    headerRight.appendChild(els.devLink);

    els.githubLink = document.createElement('a');
    els.githubLink.href = 'https://github.com/Miabeyefendi/munfollow';
    els.githubLink.target = '_blank';
    els.githubLink.style.cssText = 'color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 16px; background: #27272a; border-radius: 8px; transition: background 0.2s; display: flex; align-items: center; gap: 8px;';
    els.githubLink.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> <span class="gh-text"></span>`;
    els.githubText = els.githubLink.querySelector('.gh-text');
    headerRight.appendChild(els.githubLink);

    // MAIN
    const main = document.createElement('main');
    main.style.cssText = 'flex: 1; display: flex; padding: 24px; gap: 24px; max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box; flex-wrap: wrap;';
    app.appendChild(main);

    // SIDEBAR
    const sidebar = document.createElement('aside');
    sidebar.style.cssText = 'width: 320px; display: flex; flex-direction: column; gap: 20px; flex-shrink: 0;';
    main.appendChild(sidebar);

    // Filters Panel
    const filtersPanel = document.createElement('div');
    filtersPanel.style.cssText = 'background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 20px;';
    sidebar.appendChild(filtersPanel);

    els.filtersGroup = document.createElement('h2');
    els.filtersGroup.style.cssText = 'margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #fff;';
    filtersPanel.appendChild(els.filtersGroup);

    const filterWrapper = document.createElement('div');
    filterWrapper.style.cssText = 'margin-bottom: 12px;';
    els.filterLabel = document.createElement('label');
    els.filterLabel.style.cssText = 'display: block; font-size: 13px; color: #e4e4e7; margin-bottom: 6px; font-weight: 500;';
    filterWrapper.appendChild(els.filterLabel);

    const filterSelect = document.createElement('select');
    filterSelect.style.cssText = 'width: 100%; padding: 8px 12px; background: #09090b; border: 1px solid #3f3f46; border-radius: 6px; color: #fff; font-size: 14px; outline: none; cursor: pointer;';
    ['ALL', 'NON_FOLLOWERS', 'MUTUALS', 'VERIFIED', 'PRIVATE', 'NO_PIC', 'CLOSE_FRIENDS', 'FANS_NOT_FOLLOWED'].forEach(val => {
        const op = document.createElement('option');
        op.value = val;
        filterSelect.appendChild(op);
    });
    filterWrapper.appendChild(filterSelect);
    filtersPanel.appendChild(filterWrapper);

    const sortWrapper = document.createElement('div');
    sortWrapper.style.cssText = 'margin-bottom: 16px;';
    els.sortLabel = document.createElement('label');
    els.sortLabel.style.cssText = 'display: block; font-size: 13px; color: #e4e4e7; margin-bottom: 6px; font-weight: 500;';
    sortWrapper.appendChild(els.sortLabel);

    const sortSelect = document.createElement('select');
    sortSelect.style.cssText = 'width: 100%; padding: 8px 12px; background: #09090b; border: 1px solid #3f3f46; border-radius: 6px; color: #fff; font-size: 14px; outline: none; cursor: pointer;';
    ['NEWEST', 'OLDEST'].forEach(val => {
        const op = document.createElement('option');
        op.value = val;
        sortSelect.appendChild(op);
    });
    sortWrapper.appendChild(sortSelect);
    filtersPanel.appendChild(sortWrapper);

    els.scanBtn = document.createElement('button');
    els.scanBtn.style.cssText = 'width: 100%; padding: 12px; background: #2563eb; color: #fff; border: none; border-radius: 8px; font-weight: 600; font-size: 14px; cursor: pointer; transition: background 0.2s;';
    els.scanBtn.addEventListener('mouseenter', () => { if (!isScanning) els.scanBtn.style.background = '#1d4ed8'; });
    els.scanBtn.addEventListener('mouseleave', () => { if (!isScanning) els.scanBtn.style.background = '#2563eb'; });
    filtersPanel.appendChild(els.scanBtn);

    // Stats Panel
    const statsPanel = document.createElement('div');
    statsPanel.style.cssText = 'background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 20px;';
    sidebar.appendChild(statsPanel);

    els.statsGroup = document.createElement('h2');
    els.statsGroup.style.cssText = 'margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #fff;';
    statsPanel.appendChild(els.statsGroup);

    const statsContent = document.createElement('div');
    statsContent.style.cssText = 'display: flex; flex-direction: column; gap: 8px; font-size: 14px; color: #e4e4e7;';

    const mkStatRow = (lblEl, id, color) => {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; justify-content: space-between;';
        const val = document.createElement('strong');
        val.id = id;
        val.style.color = color || '#fff';
        val.textContent = '0';
        row.appendChild(lblEl);
        row.appendChild(val);
        statsContent.appendChild(row);
        return val;
    };

    els.statTotalL = document.createElement('span');
    els.statNonFollowersL = document.createElement('span');
    els.statMutualsL = document.createElement('span');
    els.statSelectedL = document.createElement('span');
    els.statSuccessL = document.createElement('span');

    const vTotal = mkStatRow(els.statTotalL, 'stat-total', '#fff');
    const vNonFollowers = mkStatRow(els.statNonFollowersL, 'stat-nonfollowers', '#f43f5e');
    const vMutuals = mkStatRow(els.statMutualsL, 'stat-mutuals', '#a78bfa');
    const vSelected = mkStatRow(els.statSelectedL, 'stat-selected', '#22d3ee');
    const vSuccess = mkStatRow(els.statSuccessL, 'stat-success', '#10b981');
    statsPanel.appendChild(statsContent);

    // Settings Panel
    const settingsPanel = document.createElement('div');
    settingsPanel.style.cssText = 'background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 20px;';
    sidebar.appendChild(settingsPanel);

    els.antiBanGroup = document.createElement('h2');
    els.antiBanGroup.style.cssText = 'margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #fff;';
    settingsPanel.appendChild(els.antiBanGroup);

    function createInput(labelObj, id, defaultValue) {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'margin-bottom: 12px;';
        labelObj.style.cssText = 'display: block; font-size: 13px; color: #e4e4e7; margin-bottom: 6px; font-weight: 500;';
        wrapper.appendChild(labelObj);

        const input = document.createElement('input');
        input.type = 'number';
        input.id = id;
        input.value = defaultValue;
        input.style.cssText = 'width: 100%; padding: 8px 12px; background: #09090b; border: 1px solid #3f3f46; border-radius: 6px; color: #fff; font-size: 14px; box-sizing: border-box; outline: none;';
        input.addEventListener('focus', () => input.style.borderColor = '#22d3ee');
        input.addEventListener('blur', () => input.style.borderColor = '#3f3f46');
        wrapper.appendChild(input);

        settingsPanel.appendChild(wrapper);
        return input;
    }

    els.minDelayL = document.createElement('label');
    els.maxDelayL = document.createElement('label');
    els.pauseCountL = document.createElement('label');
    els.pauseDurationL = document.createElement('label');

    const minDelayInput = createInput(els.minDelayL, 'minDelay', 3);
    const maxDelayInput = createInput(els.maxDelayL, 'maxDelay', 8);
    const autoPauseCountInput = createInput(els.pauseCountL, 'pauseCount', 50);
    const autoPauseDurationInput = createInput(els.pauseDurationL, 'pauseDuration', 300);

    // Unfollow Action Panel
    const actionPanel = document.createElement('div');
    actionPanel.style.cssText = 'background-color: #18181b; border: 1px solid #ed143d; border-radius: 12px; padding: 20px; margin-top: auto;';
    sidebar.appendChild(actionPanel);

    els.unfollowBtn = document.createElement('button');
    els.unfollowBtn.disabled = true;
    els.unfollowBtn.style.cssText = 'width: 100%; padding: 14px; background: #e11d48; color: #fff; border: none; border-radius: 8px; font-weight: bold; font-size: 15px; cursor: not-allowed; opacity: 0.5; transition: all 0.2s;';
    actionPanel.appendChild(els.unfollowBtn);

    // CONTENT AREA
    const contentArea = document.createElement('div');
    contentArea.style.cssText = 'flex: 1; min-width: 400px; display: flex; flex-direction: column; background-color: #18181b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden;';
    main.appendChild(contentArea);

    const contentHeader = document.createElement('div');
    contentHeader.style.cssText = 'padding: 16px 24px; border-bottom: 1px solid #27272a; display: flex; justify-content: space-between; align-items: center; background: #09090b;';
    contentArea.appendChild(contentHeader);

    els.userListTitle = document.createElement('h2');
    els.userListTitle.style.cssText = 'margin: 0; font-size: 16px; font-weight: 600; color: #fff;';
    contentHeader.appendChild(els.userListTitle);

    const selectAllLabel = document.createElement('label');
    selectAllLabel.style.cssText = 'display: flex; align-items: center; gap: 8px; font-size: 14px; color: #e4e4e7; cursor: pointer; user-select: none;';
    const selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.disabled = true;
    selectAllCheckbox.style.cssText = 'width: 16px; height: 16px; cursor: pointer; accent-color: #22d3ee;';
    selectAllLabel.appendChild(selectAllCheckbox);
    els.selectAllText = document.createTextNode('');
    selectAllLabel.appendChild(els.selectAllText);
    contentHeader.appendChild(selectAllLabel);

    const listContainer = document.createElement('div');
    listContainer.style.cssText = 'flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 12px;';
    contentArea.appendChild(listContainer);

    els.emptyState = document.createElement('div');
    els.emptyState.style.cssText = 'text-align: center; color: #a1a1aa; margin-top: 100px; font-size: 15px; padding: 0 20px;';

    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = 'height: 4px; background: #27272a; width: 100%; display: none;';
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'height: 100%; width: 0%; background: #22d3ee; transition: width 0.3s;';
    progressContainer.appendChild(progressBar);
    contentArea.insertBefore(progressContainer, listContainer);

    // Konsol yerine panel ici debug kutusu, kopyalanabilir
    const debugBox = document.createElement('textarea');
    debugBox.readOnly = true;
    debugBox.style.cssText = 'height: 140px; width: 100%; box-sizing: border-box; resize: vertical; background: #09090b; color: #a1a1aa; border: 0; border-top: 1px solid #27272a; padding: 8px 12px; font: 11px/1.4 monospace; outline: none;';
    contentArea.appendChild(debugBox);
    function dbg(msg) {
        const line = `[${new Date().toISOString().slice(11, 19)}] ${msg}`;
        console.log('[Munfollow] ' + msg);
        debugBox.value += line + '\n';
        debugBox.scrollTop = debugBox.scrollHeight;
    }
    dbg('Munfollow 4.3.2 loaded, user ' + userId + ', ajax ' + rolloutHash);

    function updateTranslations() {
        els.appTitle.textContent = t('appTitle');
        els.appDesc.textContent = t('appDesc');
        els.antiBanGroup.textContent = t('antiBanGroup');
        els.minDelayL.textContent = t('minDelay');
        els.maxDelayL.textContent = t('maxDelay');
        els.pauseCountL.textContent = t('pauseCount');
        els.pauseDurationL.textContent = t('pauseDuration');

        if (isScanning) els.scanBtn.textContent = t('scanning');
        else if (allUsers.length > 0) els.scanBtn.textContent = t('rescanBtn');
        else els.scanBtn.textContent = t('scanBtn');

        els.statsGroup.textContent = t('statsGroup');
        els.statTotalL.textContent = t('statTotal');
        els.statNonFollowersL.textContent = t('statNonFollowers');
        els.statMutualsL.textContent = t('statMutuals');
        els.statSelectedL.textContent = t('statSelected');
        els.statSuccessL.textContent = t('statSuccess');

        els.filtersGroup.textContent = t('filtersGroup');
        els.filterLabel.textContent = t('filterLabel');
        els.sortLabel.textContent = t('sortLabel');

        filterSelect.options[0].text = t('fAll');
        filterSelect.options[1].text = t('fNonFollowers');
        filterSelect.options[2].text = t('fMutuals');
        filterSelect.options[3].text = t('fVerified');
        filterSelect.options[4].text = t('fPrivate');
        filterSelect.options[5].text = t('fNoPic');
        filterSelect.options[6].text = t('fCloseFriends');
        filterSelect.options[7].text = t('fFansNotFollowed');

        sortSelect.options[0].text = t('sNewest');
        sortSelect.options[1].text = t('sOldest');

        if (isUnfollowing) els.unfollowBtn.textContent = els.unfollowBtn.dataset.paused ? t('pauseStatus') : t('unfollowing');
        else els.unfollowBtn.textContent = isFansNotFollowedFilter() ? t('removeBtn') : t('unfollowBtn');

        els.selectAllText.textContent = t('selectAll');
        els.userListTitle.textContent = t('userList');
        els.devLink.textContent = t('devLink');
        els.githubText.textContent = t('githubLink');

        if (allUsers.length === 0 && !isScanning) {
            els.emptyState.innerHTML = t('emptyList') + '<br><br><a href="https://www.instagram.com/miabeyefendi/" target="_blank" style="color: #22d3ee; text-decoration: none;">' + t('devLink') + '</a>';
        }
    }

    updateTranslations();

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const randomDelay = (min, max) => sleep(Math.floor(Math.random() * (max - min + 1) + min) * 1000);

    function updateStats() {
        vTotal.textContent = allUsers.length;
        vNonFollowers.textContent = nonFollowersCount;
        vMutuals.textContent = mutualsCount;
        vSelected.textContent = selectedUserIds.size;
        vSuccess.textContent = successCount;

        if (selectedUserIds.size > 0 && !isScanning && !isUnfollowing) {
            els.unfollowBtn.disabled = false;
            els.unfollowBtn.style.opacity = '1';
            els.unfollowBtn.style.cursor = 'pointer';
            els.unfollowBtn.onmouseenter = () => { if (!els.unfollowBtn.disabled) els.unfollowBtn.style.background = '#be123c'; };
            els.unfollowBtn.onmouseleave = () => { if (!els.unfollowBtn.disabled) els.unfollowBtn.style.background = '#e11d48'; };
        } else {
            els.unfollowBtn.disabled = true;
            els.unfollowBtn.style.opacity = '0.5';
            els.unfollowBtn.style.cursor = 'not-allowed';
            els.unfollowBtn.style.background = '#e11d48';
        }

        // Handle select all checkbox state
        if (displayedUsers.length > 0) {
            const allSelected = displayedUsers.every(u => selectedUserIds.has(u.id));
            selectAllCheckbox.checked = allSelected;
        } else {
            selectAllCheckbox.checked = false;
        }
    }

    function applyFilterAndSort() {
        const f = filterSelect.value;
        const s = sortSelect.value;

        let filtered;
        if (f === 'FANS_NOT_FOLLOWED') {
            filtered = [...fansNotFollowed];
        } else {
            filtered = allUsers.filter(user => {
                if (f === 'ALL') return true;
                if (f === 'NON_FOLLOWERS') return !user.follows_viewer;
                if (f === 'MUTUALS') return user.follows_viewer;
                if (f === 'VERIFIED') return user.is_verified;
                if (f === 'PRIVATE') return user.is_private;
                if (f === 'NO_PIC') return user.has_anonymous_profile_picture || (user.profile_pic_url && (user.profile_pic_url.includes('11906329_960233084022564_1448528159_a.jpg') || user.profile_pic_url.includes('44884218_345707102882519')));
                if (f === 'CLOSE_FRIENDS') return closeFriendsIds.has(String(user.id));
                return true;
            });
        }

        if (s === 'OLDEST') {
            filtered = [...filtered].reverse();
        }

        displayedUsers = filtered;
        renderList();
        updateStats();
        if (!isUnfollowing) {
            els.unfollowBtn.textContent = isFansNotFollowedFilter() ? t('removeBtn') : t('unfollowBtn');
        }
    }

    filterSelect.addEventListener('change', applyFilterAndSort);
    sortSelect.addEventListener('change', applyFilterAndSort);

    function renderList() {
        listContainer.innerHTML = '';
        if (allUsers.length === 0 && !isScanning) {
            updateTranslations(); // re-evaluates empty state
            listContainer.appendChild(els.emptyState);
            return;
        }

        if (displayedUsers.length === 0) {
            const msg = document.createElement('div');
            msg.style.cssText = 'text-align: center; color: #a1a1aa; margin-top: 50px;';
            msg.textContent = 'No users match the current filter.';
            listContainer.appendChild(msg);
            return;
        }

        displayedUsers.forEach(user => {
            const item = document.createElement('label');
            item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: #09090b; border: 1px solid #27272a; border-radius: 8px; cursor: pointer; transition: border-color 0.2s;';
            item.addEventListener('mouseenter', () => item.style.borderColor = '#3f3f46');
            item.addEventListener('mouseleave', () => item.style.borderColor = '#27272a');

            const left = document.createElement('div');
            left.style.cssText = 'display: flex; align-items: center; gap: 16px;';

            const img = document.createElement('img');
            img.src = user.profile_pic_url || '';
            img.style.cssText = 'width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 1px solid #27272a;';
            left.appendChild(img);

            const info = document.createElement('div');
            info.style.cssText = 'display: flex; flex-direction: column;';

            const username = document.createElement('a');
            username.href = `/${user.username}`;
            username.target = '_blank';
            username.textContent = user.username;
            username.style.cssText = 'color: #fff; font-weight: 600; font-size: 14px; text-decoration: none;';
            username.addEventListener('mouseenter', () => username.style.textDecoration = 'underline');
            username.addEventListener('mouseleave', () => username.style.textDecoration = 'none');
            info.appendChild(username);

            const fullname = document.createElement('span');
            fullname.textContent = user.full_name || '';
            fullname.style.cssText = 'color: #a1a1aa; font-size: 12px; margin-top: 2px; text-transform: capitalize;';
            info.appendChild(fullname);

            left.appendChild(info);
            item.appendChild(left);

            const right = document.createElement('div');
            right.style.cssText = 'display: flex; align-items: center; gap: 12px;';

            if (user.is_verified) {
                const badge = document.createElement('span');
                badge.textContent = '✓';
                badge.style.cssText = 'background: #3b82f6; color: #fff; font-size: 10px; width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: bold;';
                badge.title = 'Verified';
                right.appendChild(badge);
            }
            if (user.is_private) {
                const lock = document.createElement('span');
                lock.textContent = '🔒';
                lock.style.cssText = 'font-size: 12px;';
                lock.title = 'Private';
                right.appendChild(lock);
            }

            const relationship = document.createElement('span');
            relationship.style.cssText = 'font-size: 11px; padding: 4px 8px; border-radius: 4px; font-weight: 600;';
            if (user.viewer_follows === false && user.follows_viewer) {
                relationship.textContent = t('badgeFollowsYou');
                relationship.style.background = 'rgba(34, 211, 238, 0.1)';
                relationship.style.color = '#22d3ee';
            } else if (user.follows_viewer) {
                relationship.textContent = t('badgeMutual');
                relationship.style.background = 'rgba(167, 139, 250, 0.1)';
                relationship.style.color = '#a78bfa';
            } else {
                relationship.textContent = t('badgeNotFollowing');
                relationship.style.background = 'rgba(244, 63, 94, 0.1)';
                relationship.style.color = '#f43f5e';
            }
            right.appendChild(relationship);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = selectedUserIds.has(user.id);
            checkbox.style.cssText = 'width: 18px; height: 18px; cursor: pointer; accent-color: #22d3ee; margin-left: 8px;';
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedUserIds.add(user.id);
                } else {
                    selectedUserIds.delete(user.id);
                }
                updateStats();
            });

            right.appendChild(checkbox);
            item.appendChild(right);
            listContainer.appendChild(item);
        });
    }

    selectAllCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            displayedUsers.forEach(u => selectedUserIds.add(u.id));
        } else {
            displayedUsers.forEach(u => selectedUserIds.delete(u.id));
        }
        renderList();
        updateStats();
    });

    // Eski graphql query_hash kaldirildi; unfollow api/v1/web, remove_follower /web/friendships
    const apiHeaders = {
        'x-ig-app-id': '936619743392459',
        'x-csrftoken': csrfToken,
        'x-asbd-id': '129477',
        'x-requested-with': 'XMLHttpRequest',
        'x-instagram-ajax': rolloutHash,
        'x-ig-www-claim': (() => { try { return sessionStorage.getItem('www-claim-v2') || '0'; } catch (e) { return '0'; } })()
    };

    let viewerIsPrivate = null;
    async function fetchViewerIsPrivate() {
        if (viewerIsPrivate !== null) return viewerIsPrivate;
        try {
            const res = await fetch(`https://www.instagram.com/api/v1/users/${userId}/info/`, { headers: apiHeaders, credentials: 'include' });
            const raw = await res.text();
            const json = JSON.parse(raw);
            viewerIsPrivate = !!(json && json.user && json.user.is_private);
            dbg(`viewer is_private=${viewerIsPrivate}`);
            return viewerIsPrivate;
        } catch (err) {
            dbg('viewer privacy check failed: ' + err.message);
            viewerIsPrivate = null;
            return null;
        }
    }

    function looksLikeHtml(raw) {
        const s = (raw || '').trim().slice(0, 32).toLowerCase();
        return s.startsWith('<!doctype') || s.startsWith('<html');
    }

    async function postFriendshipAction(url, uid, body) {
        const res = await fetch(url, {
            method: 'POST',
            headers: { ...apiHeaders, 'content-type': 'application/x-www-form-urlencoded' },
            body: body,
            credentials: 'include'
        });
        const raw = await res.text();
        let json = null;
        if (!looksLikeHtml(raw)) {
            try { json = JSON.parse(raw); } catch (e) { json = null; }
        }
        const short = url.replace('https://www.instagram.com/', '');
        return {
            res,
            raw,
            json,
            label: `${short} HTTP ${res.status} ${(raw || '').slice(0, 120)}`,
            jsonOk: !!(json && (json.status === 'ok' || json.friendship_status || json.friendship_statuses))
        };
    }

    let lastNetError = '';
    async function fetchFriendshipPage(type, maxId = '') {
        const url = `https://www.instagram.com/api/v1/friendships/${userId}/${type}/?count=100&search_surface=follow_list_page${maxId ? `&max_id=${maxId}` : ''}`;
        try {
            const res = await fetch(url, { headers: apiHeaders });
            const raw = await res.text();
            if (!res.ok) {
                lastNetError = `${type} HTTP ${res.status}: ${raw.slice(0, 300)}`;
                dbg(lastNetError);
                return null;
            }
            return JSON.parse(raw);
        } catch (err) {
            lastNetError = `${type}: ${err.message}`;
            dbg(lastNetError);
            return null;
        }
    }

    // Yeni uc follows_viewer vermiyor, takipci listesi cekilip fark alinir
    async function fetchFollowers() {
        const ids = new Set();
        const usersById = new Map();
        let maxId = '';
        do {
            const data = await fetchFriendshipPage('followers', maxId);
            if (!data) return null;
            const before = ids.size;
            (data.users || []).forEach(u => {
                const id = String(u.pk);
                ids.add(id);
                usersById.set(id, u);
            });
            dbg(`followers scanned: ${ids.size}`);
            listContainer.innerHTML = `<div style="text-align: center; color: #22d3ee; margin-top: 100px; font-weight: 500;">${t('scanning')} followers: ${ids.size}</div>`;
            const next = data.next_max_id ? String(data.next_max_id) : '';
            // Son sayfada da next_max_id gelebiliyor, yeni kullanici yoksa ya da ayni imlecse dur
            if (!next || next === maxId || ids.size === before) break;
            maxId = next;
            await sleep(Math.floor(Math.random() * 1000) + 1000);
        } while (true);
        return { ids, usersById };
    }

    async function fetchCloseFriends() {
        try {
            const res = await fetch('https://www.instagram.com/api/v1/friendships/besties/', {
                headers: {
                    'x-ig-app-id': '936619743392459',
                    'x-csrftoken': csrfToken
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.users) {
                    data.users.forEach(u => closeFriendsIds.add(String(u.pk || u.pk_id || u.id)));
                }
            }
        } catch (e) {
            console.error('Error fetching close friends:', e);
        }
    }

    els.scanBtn.addEventListener('click', async () => {
        if (isScanning) return;
        try {
            await runScan();
        } catch (err) {
            dbg('Scan crashed: ' + (err && err.stack ? err.stack.slice(0, 400) : err));
            isScanning = false;
            els.scanBtn.disabled = false;
            els.scanBtn.style.opacity = '1';
            updateTranslations();
        }
    });

    async function runScan() {
        isScanning = true;
        els.scanBtn.disabled = true;
        updateTranslations();
        els.scanBtn.style.opacity = '0.5';

        allUsers = [];
        fansNotFollowed = [];
        displayedUsers = [];
        nonFollowersCount = 0;
        mutualsCount = 0;
        selectedUserIds.clear();
        closeFriendsIds.clear();
        viewerIsPrivate = null;
        updateStats();

        await fetchCloseFriends();
        listContainer.innerHTML = `<div style="text-align: center; color: #22d3ee; margin-top: 100px; font-weight: 500;">${t('scanning')}</div>`;
        const followers = await fetchFollowers();
        if (!followers) {
            alert('Error fetching followers.\n' + lastNetError);
            isScanning = false;
            els.scanBtn.disabled = false;
            els.scanBtn.style.opacity = '1';
            updateTranslations();
            return;
        }
        const { ids: followerIds, usersById: followerUsersById } = followers;

        progressContainer.style.display = 'block';
        progressBar.style.width = '0%';
        listContainer.innerHTML = `<div style="text-align: center; color: #22d3ee; margin-top: 100px; font-weight: 500;">${t('scanning')}</div>`;

        let hasNextPage = true;
        let cursor = '';
        const seenIds = new Set();

        while (hasNextPage) {
            const data = await fetchFriendshipPage('following', cursor);
            if (!data) {
                alert('Error fetching following.\n' + lastNetError);
                break;
            }

            const before = allUsers.length;
            (data.users || []).forEach(u => {
                if (seenIds.has(String(u.pk))) return;
                seenIds.add(String(u.pk));
                // Eski graphql node sekline cevir, render kodu degismedi
                const user = {
                    id: String(u.pk),
                    username: u.username,
                    full_name: u.full_name,
                    is_private: u.is_private,
                    is_verified: u.is_verified,
                    profile_pic_url: u.profile_pic_url,
                    has_anonymous_profile_picture: u.has_anonymous_profile_picture,
                    follows_viewer: followerIds.has(String(u.pk)),
                    viewer_follows: true
                };
                allUsers.push(user);
                if (!user.follows_viewer) {
                    nonFollowersCount++;
                } else {
                    mutualsCount++;
                }
            });

            dbg(`following scanned: ${allUsers.length}`);
            applyFilterAndSort();
            const next = data.next_max_id ? String(data.next_max_id) : '';
            hasNextPage = !!next && next !== cursor && allUsers.length > before;
            cursor = next;
            progressBar.style.width = hasNextPage ? '50%' : '100%';
            updateStats();

            if (hasNextPage) {
                await sleep(Math.floor(Math.random() * 1000) + 1000);
            }
        }

        fansNotFollowed = [];
        followerUsersById.forEach((u, id) => {
            if (seenIds.has(id)) return;
            fansNotFollowed.push({
                id,
                username: u.username,
                full_name: u.full_name,
                is_private: u.is_private,
                is_verified: u.is_verified,
                profile_pic_url: u.profile_pic_url,
                has_anonymous_profile_picture: u.has_anonymous_profile_picture,
                follows_viewer: true,
                viewer_follows: false
            });
        });
        dbg(`fans not followed back: ${fansNotFollowed.length}`);

        isScanning = false;
        els.scanBtn.disabled = false;
        els.scanBtn.style.opacity = '1';
        selectAllCheckbox.disabled = false;

        updateTranslations();
        applyFilterAndSort();
    }

    els.unfollowBtn.addEventListener('click', async () => {
        if (isUnfollowing || selectedUserIds.size === 0) return;

        const removeMode = isFansNotFollowedFilter();
        if (removeMode) {
            const isPrivate = await fetchViewerIsPrivate();
            if (isPrivate === false) {
                alert(t('privateRequired'));
                return;
            }
        }
        if (!confirm(removeMode ? t('confirmRemove') : t('confirmUnfollow'))) return;

        isUnfollowing = true;
        els.unfollowBtn.disabled = true;
        selectAllCheckbox.disabled = true;
        updateTranslations();

        const minDelay = parseInt(minDelayInput.value) || 3;
        const maxDelay = parseInt(maxDelayInput.value) || 8;
        const pauseCount = parseInt(autoPauseCountInput.value) || 50;
        const pauseDuration = parseInt(autoPauseDurationInput.value) || 300;

        const usersToProcess = Array.from(selectedUserIds);
        let processedCount = 0;
        let rejectedCount = 0;
        let firstReject = '';

        progressContainer.style.display = 'block';
        progressBar.style.width = '0%';
        progressBar.style.background = '#e11d48';

        for (let i = 0; i < usersToProcess.length; i++) {
            const uid = usersToProcess[i];
            const userObj = findUserById(uid);
            const removeFollower = removeMode || (userObj && userObj.viewer_follows === false);
            const actionName = removeFollower ? 'remove_follower' : 'unfollow';

            try {
                // unfollow works on /api/v1/web/.../unfollow/
                // remove_follower: /api/v1/friendships/remove_follower returns HTML shell on www;
                // working browser path is /web/friendships/{id}/remove_follower/
                const attempts = [];
                let ok = false;

                if (removeFollower) {
                    const removeAttempts = [
                        { url: `https://www.instagram.com/web/friendships/${uid}/remove_follower/`, body: '' },
                        { url: `https://www.instagram.com/web/friendships/${uid}/remove_follower/`, body: `user_id=${uid}` },
                        { url: `https://www.instagram.com/api/v1/web/friendships/${uid}/remove_follower/`, body: `container_module=profile&user_id=${uid}` },
                        { url: `https://www.instagram.com/api/v1/friendships/remove_follower/${uid}/`, body: `user_id=${uid}` }
                    ];
                    for (const attempt of removeAttempts) {
                        const result = await postFriendshipAction(attempt.url, uid, attempt.body);
                        attempts.push(result.label);
                        if (result.jsonOk) {
                            ok = true;
                            break;
                        }
                        // HTML / empty: try next shape. Hard auth failures: stop.
                        if (result.res.status === 401 || result.res.status === 403) break;
                    }
                } else {
                    const result = await postFriendshipAction(
                        `https://www.instagram.com/api/v1/web/friendships/${uid}/unfollow/`,
                        uid,
                        `container_module=profile&nav_chain=&user_id=${uid}`
                    );
                    attempts.push(result.label);
                    ok = result.jsonOk;
                }

                // 200 / JSON yetmiyor, show ile gercek durum okunur
                await sleep(1000);
                const showRes = await fetch(`https://www.instagram.com/api/v1/friendships/show/${uid}/`, { headers: apiHeaders, credentials: 'include' });
                const showRaw = await showRes.text();
                let show = null;
                try { show = JSON.parse(showRaw); } catch (e) {}
                if (removeFollower) {
                    if (show && typeof show.followed_by === 'boolean') ok = show.followed_by === false;
                } else if (show && typeof show.following === 'boolean') {
                    ok = show.following === false;
                }
                attempts.push(`show HTTP ${showRes.status} ${showRaw.slice(0, 200)}`);

                const report = attempts.join(' | ');
                dbg(`${actionName} ${uid} -> ${ok ? 'OK' : 'REJECTED'} :: ${report}`);
                if (!ok) {
                    rejectedCount++;
                    if (!firstReject) firstReject = report;
                }

                if (ok) {
                    successCount++;

                    selectedUserIds.delete(uid);
                    if (removeFollower) {
                        fansNotFollowed = fansNotFollowed.filter(u => u.id !== uid);
                    } else {
                        allUsers = allUsers.filter(u => u.id !== uid);
                        if (userObj) {
                            if (!userObj.follows_viewer) nonFollowersCount--;
                            else mutualsCount--;
                        }
                    }
                    applyFilterAndSort(); // re-render list inline safely
                } else {
                    console.error(`Failed to ${actionName}`, uid);
                }
            } catch (err) {
                dbg(`${actionName} ${uid} -> EXCEPTION ${err && err.stack ? err.stack.slice(0, 300) : err}`);
                rejectedCount++;
                if (!firstReject) firstReject = 'Exception: ' + err.message;
            }

            processedCount++;
            progressBar.style.width = `${(processedCount / usersToProcess.length) * 100}%`;
            updateStats();

            if (i < usersToProcess.length - 1) {
                if ((i + 1) % pauseCount === 0) {
                    els.unfollowBtn.dataset.paused = "true";
                    updateTranslations();
                    await sleep(pauseDuration * 1000);
                    els.unfollowBtn.dataset.paused = "";
                    updateTranslations();
                } else {
                    await randomDelay(minDelay, maxDelay);
                }
            }
        }

        isUnfollowing = false;
        selectAllCheckbox.disabled = false;
        progressBar.style.background = '#22d3ee';
        updateTranslations();
        updateStats(); // To reset unfollow button state based on remaining selections

        setTimeout(() => alert(t('processDone') + successCount
            + (rejectedCount ? `\nRejected: ${rejectedCount}\nFirst response: ${firstReject}` : '')), 500);
    });

})();

