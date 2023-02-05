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
});
