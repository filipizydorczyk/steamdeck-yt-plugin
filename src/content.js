const ytService = new YouTubeService();

document.addEventListener("keydown", (event) => {
    if (event.key === LEFT_JOYSTICK_DOWN) {
        event.preventDefault();
        ytService.focusNextRow();
    }
    if (event.key === LEFT_JOYSTICK_UP) {
        event.preventDefault();
        ytService.focusPerviousRow();
    }
    if (event.key === LEFT_JOYSTICK_LEFT) {
        event.preventDefault();
        if (ytService.getThumbnail() > 0) {
            ytService.focusPreviousThumbnail();
        } else {
            ytService.handleMenuAction();
        }
    }
    if (event.key === LEFT_JOYSTICK_RIGHT) {
        event.preventDefault();
        ytService.focusNextThumbnail();
    }
});
