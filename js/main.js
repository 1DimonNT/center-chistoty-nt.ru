/**
 * Центр Чистоты НТ — Основные скрипты
 * Объединяет: sticky-навигацию + все формы заказа
 * Версия: 2.0 (оптимизированная)
 */

(function() {
    'use strict';

    // ============================================
    // 1. STICKY-НАВИГАЦИЯ
    // ============================================
    function initStickyNav() {
        const nav = document.querySelector('.sticky-nav');
        if (!nav) return;

        const navOffsetTop = nav.offsetTop;

        window.addEventListener('scroll', function() {
            if (window.scrollY >= navOffsetTop) {
                nav.style.position = 'fixed';
                nav.style.top = '0';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.zIndex = '99999';
            } else {
                nav.style.position = '';
                nav.style.top = '';
                nav.style.left = '';
                nav.style.width = '';
                nav.style.zIndex = '';
            }
        });
    }

    // ============================================
    // 2. ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ КОПИРОВАНИЯ
    // ============================================
    function copyAndOpenVK(orderText, successDivId) {
        navigator.clipboard.writeText(orderText).then(function() {
            const successDiv = document.getElementById(successDivId);
            if (successDiv) {
                successDiv.style.display = 'block';
                setTimeout(function() { successDiv.style.display = 'none'; }, 3000);
            }
            window.open('https://vk.ru/1dimonnt', '_blank');
        }).catch(function() {
            alert('Не удалось скопировать текст. Скопируйте вручную.');
        });
    }

    // ============================================
    // 3. ФОРМА ХИМЧИСТКИ
    // ============================================
    function initHimchistkaForm() {
        const btn = document.getElementById('copyAndSendBtnHim');
        if (!btn) return;

        btn.addEventListener('click', function() {
            const name = document.getElementById('nameHim')?.value || '';
            const contact = document.getElementById('contactHim')?.value || '';
            const furniture = document.getElementById('furnitureType')?.value || '';
            const comment = document.getElementById('commentHim')?.value || '';

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = '🟢 ЗАЯВКА НА ХИМЧИСТКУ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ' + name + '\n📞 Контакты: ' + contact + '\n🛋️ Тип мебели: ' + furniture + '\n📝 Комментарий: ' + (comment || '—') + '\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ';

            copyAndOpenVK(orderText, 'copySuccessHim');
        });
    }

    // ============================================
    // 4. ФОРМА ДЕЗИНСЕКЦИИ
    // ============================================
    function initDezinsekciyaForm() {
        const btn = document.getElementById('copyAndSendBtn');
        if (!btn || !document.getElementById('nameDezin')) return;

        btn.addEventListener('click', function() {
            const name = document.getElementById('nameDezin')?.value || '';
            const contact = document.getElementById('contactDezin')?.value || '';
            const room = document.getElementById('roomType')?.value || '';
            const comment = document.getElementById('commentDezin')?.value || '';

            const opts = [];
            if (document.getElementById('doublePreparat')?.checked) opts.push('Усиленная (2 препарата)');
            if (document.getElementById('barrier')?.checked) opts.push('Барьерная защита');
            if (document.getElementById('fog')?.checked) opts.push('Холодный туман');

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = '🟢 ЗАЯВКА НА ДЕЗИНСЕКЦИЮ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ' + name + '\n📞 Контакты: ' + contact + '\n🏠 Помещение: ' + room + '\n⚙️ Опции: ' + (opts.length ? opts.join(', ') : '—') + '\n📝 Комментарий: ' + (comment || '—') + '\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ';

            copyAndOpenVK(orderText, 'copySuccess');
        });
    }

    // ============================================
    // 5. ФОРМА КЛИНИНГА
    // ============================================
    function initKliningForm() {
        const btn = document.getElementById('copyAndSendBtn');
        if (!btn || !document.getElementById('nameClean')) return;

        btn.addEventListener('click', function() {
            const name = document.getElementById('nameClean')?.value || '';
            const contact = document.getElementById('contactClean')?.value || '';
            const serviceType = document.getElementById('serviceType')?.value || '';
            const details = document.getElementById('detailsClean')?.value || '';
            const address = document.getElementById('addressClean')?.value || '';
            const comment = document.getElementById('commentClean')?.value || '';

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = '🟢 ЗАЯВКА НА КЛИНИНГ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ' + name + '\n📞 Контакты: ' + contact + '\n🧹 Услуга: ' + serviceType + '\n📏 Детали: ' + (details || '—') + '\n📍 Район/адрес: ' + (address || '—') + '\n📝 Комментарий: ' + (comment || '—') + '\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ';

            copyAndOpenVK(orderText, 'copySuccess');
        });
    }

    // ============================================
    // 6. ФОРМА ОЗОНАЦИИ
    // ============================================
    function initOzonaciyaForm() {
        const btn = document.getElementById('copyAndSendBtn');
        if (!btn || !document.getElementById('nameOzon')) return;

        btn.addEventListener('click', function() {
            const name = document.getElementById('nameOzon')?.value || '';
            const contact = document.getElementById('contactOzon')?.value || '';
            const roomType = document.getElementById('roomType')?.value || '';
            const area = document.getElementById('areaOzon')?.value || '';
            const duration = document.getElementById('durationOzon')?.value || '';
            const address = document.getElementById('addressOzon')?.value || '';
            const comment = document.getElementById('commentOzon')?.value || '';

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            let details = roomType;
            if (roomType === 'Другое помещение' && area) {
                details = roomType + ', ' + area + ' м²';
            } else if (roomType === 'Автомобиль') {
                details = 'Автомобиль';
            }

            const orderText = '🟢 ЗАЯВКА НА ОЗОНИРОВАНИЕ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ' + name + '\n📞 Контакты: ' + contact + '\n🏠 Помещение: ' + details + '\n⏱️ Время: ' + duration + '\n📍 Адрес/район: ' + (address || '—') + '\n📝 Комментарий: ' + (comment || '—') + '\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ';

            copyAndOpenVK(orderText, 'copySuccess');
        });
    }

    // ============================================
    // 7. ФОРМА ОБРАБОТКИ ОТ КЛЕЩЕЙ
    // ============================================
    function initKleschiForm() {
        const btn = document.getElementById('copyAndSendBtn');
        if (!btn || !document.getElementById('nameAkar')) return;

        btn.addEventListener('click', function() {
            const name = document.getElementById('nameAkar')?.value || '';
            const contact = document.getElementById('contactAkar')?.value || '';
            const sotki = document.getElementById('sotki')?.value || '';
            const km = document.getElementById('km')?.value || '0';
            const comment = document.getElementById('commentAkar')?.value || '';

            const opts = [];
            if (document.getElementById('doubleAkar')?.checked) opts.push('Усиленная (2 препарата)');
            if (document.getElementById('barrierAkar')?.checked) opts.push('Барьерная по периметру');
            if (document.getElementById('treesAkar')?.checked) opts.push('Обработка деревьев');

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = '🟢 ЗАЯВКА НА ОБРАБОТКУ ОТ КЛЕЩЕЙ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: ' + name + '\n📞 Контакты: ' + contact + '\n🌿 Площадь: ' + (sotki || '—') + ' соток\n🚗 Расстояние: ' + km + ' км\n⚙️ Опции: ' + (opts.length ? opts.join(', ') : '—') + '\n📝 Комментарий: ' + (comment || '—') + '\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ';

            copyAndOpenVK(orderText, 'copySuccess');
        });
    }

    // ============================================
    // 8. ЗАПУСК ВСЕХ ФУНКЦИЙ
    // ============================================
    initStickyNav();
    initHimchistkaForm();
    initDezinsekciyaForm();
    initKliningForm();
    initOzonaciyaForm();
    initKleschiForm();

})();