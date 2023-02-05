const SCROLL_OPTIONS = {
    behavior: "smooth",
    block: "center",
    inline: "nearest",
};

class YouTubeService {
    constructor() {
        this.row = 0;
    }

    focusNextRow() {
        const grids = document.getElementsByTagName("ytd-rich-grid-row");

        this.row = this.row < grids.length - 1 ? (this.row += 1) : this.row;
        grids[this.row].scrollIntoView(SCROLL_OPTIONS);
    }

    focusPerviousRow() {
        const grids = document.getElementsByTagName("ytd-rich-grid-row");

        this.row = this.row > 0 ? (this.row -= 1) : this.row;
        grids[this.row].scrollIntoView(SCROLL_OPTIONS);
    }
}
