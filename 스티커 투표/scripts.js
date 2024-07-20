document.addEventListener('DOMContentLoaded', () => {
    const sticker = document.getElementById('sticker');
    const dropzones = document.querySelectorAll('.dropzone');

    let activeSticker = null;

    // Desktop drag start
    sticker.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', 'sticker');
        activeSticker = sticker;
    });

    // Mobile touch start
    sticker.addEventListener('touchstart', (event) => {
        activeSticker = sticker;
    });

    dropzones.forEach(zone => {
        // Desktop drag over
        zone.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        // Mobile touch move
        zone.addEventListener('touchmove', (event) => {
            event.preventDefault();
        });

        // Desktop drop
        zone.addEventListener('drop', (event) => {
            event.preventDefault();
            if (activeSticker) {
                const img = document.createElement('img');
                img.src = 'sticker.png';
                img.classList.add('sticker-in-cell');
                zone.appendChild(img);

                img.addEventListener('dblclick', () => {
                    zone.removeChild(img);
                });

                activeSticker = null;
            }
        });

        // Mobile touch end
        zone.addEventListener('touchend', (event) => {
            event.preventDefault();
            if (activeSticker) {
                const img = document.createElement('img');
                img.src = 'sticker.png';
                img.classList.add('sticker-in-cell');
                zone.appendChild(img);

                img.addEventListener('dblclick', () => {
                    zone.removeChild(img);
                });

                activeSticker = null;
            }
        });
    });
});
