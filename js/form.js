
/**
 * Форма заказа для Центра Чистоты НТ
 * Копирует заявку в буфер и открывает VK
 */

(function() {
    'use strict';

    // ============================================
    // ХИМЧИСТКА
    // ============================================
    const btnHim = document.getElementById('copyAndSendBtnHim');
    if (btnHim) {
        btnHim.addEventListener('click', function() {
            const name = document.getElementById('nameHim')?.value || '';
            const contact = document.getElementById('contactHim')?.value || '';
            const furniture = document.getElementById('furnitureType')?.value || '';
            const comment = document.getElementById('commentHim')?.value || '';

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = "🟢 ЗАЯВКА НА ХИМЧИСТКУ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: " + name + "\n📞 Контакты: " + contact + "\n🛋️ Тип мебели: " + furniture + "\n📝 Комментарий: " + (comment || "—") + "\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ";

            navigator.clipboard.writeText(orderText).then(() => {
                const successDiv = document.getElementById('copySuccessHim');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    setTimeout(() => successDiv.style.display = 'none', 3000);
                }
                window.open("https://vk.ru/1dimonnt", "_blank");
            }).catch(() => {
                alert('Не удалось скопировать текст. Скопируйте вручную.');
            });
        });
    }

    // ============================================
    // ДЕЗИНСЕКЦИЯ
    // ============================================
    const btnDezin = document.getElementById('copyAndSendBtn');
    if (btnDezin && document.getElementById('nameDezin')) {
        btnDezin.addEventListener('click', function() {
            const name = document.getElementById('nameDezin')?.value || '';
            const contact = document.getElementById('contactDezin')?.value || '';
            const room = document.getElementById('roomType')?.value || '';
            const comment = document.getElementById('commentDezin')?.value || '';

            const opts = [];
            if (document.getElementById('doublePreparat')?.checked) opts.push("Усиленная (2 препарата)");
            if (document.getElementById('barrier')?.checked) opts.push("Барьерная защита");
            if (document.getElementById('fog')?.checked) opts.push("Холодный туман");

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = "🟢 ЗАЯВКА НА ДЕЗИНСЕКЦИЮ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: " + name + "\n📞 Контакты: " + contact + "\n🏠 Помещение: " + room + "\n⚙️ Опции: " + (opts.length ? opts.join(", ") : "—") + "\n📝 Комментарий: " + (comment || "—") + "\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ";

            navigator.clipboard.writeText(orderText).then(() => {
                const successDiv = document.getElementById('copySuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    setTimeout(() => successDiv.style.display = 'none', 3000);
                }
                window.open("https://vk.ru/1dimonnt", "_blank");
            }).catch(() => {
                alert('Не удалось скопировать текст. Скопируйте вручную.');
            });
        });
    }

    // ============================================
    // КЛИНИНГ
    // ============================================
    const btnClean = document.getElementById('copyAndSendBtn');
    if (btnClean && document.getElementById('nameClean')) {
        btnClean.addEventListener('click', function() {
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

            const orderText = "🟢 ЗАЯВКА НА КЛИНИНГ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: " + name + "\n📞 Контакты: " + contact + "\n🧹 Услуга: " + serviceType + "\n📏 Детали: " + (details || "—") + "\n📍 Район/адрес: " + (address || "—") + "\n📝 Комментарий: " + (comment || "—") + "\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ";

            navigator.clipboard.writeText(orderText).then(() => {
                const successDiv = document.getElementById('copySuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    setTimeout(() => successDiv.style.display = 'none', 3000);
                }
                window.open("https://vk.ru/1dimonnt", "_blank");
            }).catch(() => {
                alert('Не удалось скопировать текст. Скопируйте вручную.');
            });
        });
    }

    // ============================================
    // ОЗОНАЦИЯ
    // ============================================
    const btnOzon = document.getElementById('copyAndSendBtn');
    if (btnOzon && document.getElementById('nameOzon')) {
        btnOzon.addEventListener('click', function() {
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
            if (roomType === "Другое помещение" && area) {
                details = roomType + ", " + area + " м²";
            } else if (roomType === "Автомобиль") {
                details = "Автомобиль";
            }

            const orderText = "🟢 ЗАЯВКА НА ОЗОНИРОВАНИЕ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: " + name + "\n📞 Контакты: " + contact + "\n🏠 Помещение: " + details + "\n⏱️ Время: " + duration + "\n📍 Адрес/район: " + (address || "—") + "\n📝 Комментарий: " + (comment || "—") + "\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ";

            navigator.clipboard.writeText(orderText).then(() => {
                const successDiv = document.getElementById('copySuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    setTimeout(() => successDiv.style.display = 'none', 3000);
                }
                window.open("https://vk.ru/1dimonnt", "_blank");
            }).catch(() => {
                alert('Не удалось скопировать текст. Скопируйте вручную.');
            });
        });
    }

    // ============================================
    // ОБРАБОТКА ОТ КЛЕЩЕЙ
    // ============================================
    const btnKlesch = document.getElementById('copyAndSendBtn');
    if (btnKlesch && document.getElementById('nameAkar')) {
        btnKlesch.addEventListener('click', function() {
            const name = document.getElementById('nameAkar')?.value || '';
            const contact = document.getElementById('contactAkar')?.value || '';
            const sotki = document.getElementById('sotki')?.value || '';
            const km = document.getElementById('km')?.value || '0';
            const comment = document.getElementById('commentAkar')?.value || '';

            const opts = [];
            if (document.getElementById('doubleAkar')?.checked) opts.push("Усиленная (2 препарата)");
            if (document.getElementById('barrierAkar')?.checked) opts.push("Барьерная по периметру");
            if (document.getElementById('treesAkar')?.checked) opts.push("Обработка деревьев");

            if (!name || !contact) {
                alert('Заполните имя и контакты');
                return;
            }

            const orderText = "🟢 ЗАЯВКА НА ОБРАБОТКУ ОТ КЛЕЩЕЙ 🟢\n━━━━━━━━━━━━━━━━━━━━━━\n👤 Имя: " + name + "\n📞 Контакты: " + contact + "\n🌿 Площадь: " + (sotki || "—") + " соток\n🚗 Расстояние: " + km + " км\n⚙️ Опции: " + (opts.length ? opts.join(", ") : "—") + "\n📝 Комментарий: " + (comment || "—") + "\n━━━━━━━━━━━━━━━━━━━━━━\nОтправлено с сайта Центр Чистоты НТ";

            navigator.clipboard.writeText(orderText).then(() => {
                const successDiv = document.getElementById('copySuccess');
                if (successDiv) {
                    successDiv.style.display = 'block';
                    setTimeout(() => successDiv.style.display = 'none', 3000);
                }
                window.open("https://vk.ru/1dimonnt", "_blank");
            }).catch(() => {
                alert('Не удалось скопировать текст. Скопируйте вручную.');
            });
        });
    }

})();