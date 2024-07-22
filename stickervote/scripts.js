document.addEventListener('DOMContentLoaded', () => {
    const sticker = document.getElementById('sticker');
    const dropzones = document.querySelectorAll('.dropzone');

    sticker.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', 'sticker');
    });

    dropzones.forEach(zone => {
        zone.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        zone.addEventListener('drop', (event) => {
            event.preventDefault();
            const img = document.createElement('img');
            img.src = 'sticker.png';
            img.classList.add('sticker-in-cell');
            zone.appendChild(img);

            // Add event listener for removing sticker on double-click
            img.addEventListener('dblclick', () => {
                zone.removeChild(img);
            });
        });
    });
});
