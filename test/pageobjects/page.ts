/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    public title: string;
    public basePathPage:string;

    constructor(basePathPage : string = "https://the-internet.herokuapp.com/") {
        this.title = 'Gayrat Page Title';
        this.basePathPage=basePathPage;
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        return browser.url(`${this.basePathPage}${path}`)
    }
}
