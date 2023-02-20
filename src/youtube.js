const SCROLL_OPTIONS = {
    behavior: "smooth",
    block: "center",
    inline: "nearest",
};

class YouTubeReposiotry {
    constructor() {}

    getRows() {
        return document.getElementsByTagName("ytd-rich-grid-row");
    }

    getSideMenuButton() {
        return document.getElementById("guide-button");
    }

    getTumbnails(row) {
        return row.getElementsByTagName("ytd-thumbnail");
    }

    getThumbnailLink(thumbnail) {
        return thumbnail.getElementsByTagName("a")[0];
    }

    setThumbnailHovereStyle(thumbnail) {
        thumbnail.style["border"] = "4px solid #FF0000";
        thumbnail.style["border-radius"] = "12px";
    }

    setElementEmptyStyle(thumbnail) {
        thumbnail.style["border"] = "";
        thumbnail.style["border-radius"] = "";
    }
}

class YouTubeService {
    constructor() {
        this.repository = new YouTubeReposiotry();
        this.row = 0;
        this.thumbnail = 0;
    }

    focusNextRow() {
        this.clearCurrentThumbnail();
        const grids = this.repository.getRows();
        this.row = getValueInRage(0, grids.length - 1, this.row + 1);
        this.thumbnail = 0;
        grids[this.row].scrollIntoView(SCROLL_OPTIONS);

        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.repository.setThumbnailHovereStyle(thumbnails[this.thumbnail]);
    }

    focusPerviousRow() {
        this.clearCurrentThumbnail();
        const grids = this.repository.getRows();

        this.row = getValueInRage(0, grids.length - 1, this.row - 1);
        this.thumbnail = 0;
        grids[this.row].scrollIntoView(SCROLL_OPTIONS);

        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.repository.setThumbnailHovereStyle(thumbnails[this.thumbnail]);
    }

    focusPreviousThumbnail() {
        const grids = this.repository.getRows();
        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.thumbnail = getValueInRage(
            0,
            thumbnails.length - 1,
            this.thumbnail - 1
        );

        this.repository.setElementEmptyStyle(thumbnails[this.thumbnail + 1]);
        this.repository.setThumbnailHovereStyle(thumbnails[this.thumbnail]);
    }

    focusNextThumbnail() {
        const grids = this.repository.getRows();
        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.thumbnail = getValueInRage(
            0,
            thumbnails.length - 1,
            this.thumbnail + 1
        );

        this.repository.setElementEmptyStyle(thumbnails[this.thumbnail - 1]);
        this.repository.setThumbnailHovereStyle(thumbnails[this.thumbnail]);
    }

    getThumbnail() {
        return this.thumbnail;
    }

    handleMenuAction() {
        this.repository.getSideMenuButton().click();
    }

    clearCurrentThumbnail() {
        const grids = this.repository.getRows();
        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.repository.setElementEmptyStyle(thumbnails[this.thumbnail]);
    }

    goPreviousPage() {
        window.history.go(-1);
    }

    goCurrentSelection() {
        const grids = this.repository.getRows();
        const thumbnails = this.repository.getTumbnails(grids[this.row]);
        this.repository.getThumbnailLink(thumbnails[this.thumbnail]).click();
    }
}
