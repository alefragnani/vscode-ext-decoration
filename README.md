# vscode-ext-decoration

This module contains a set of helper functions to work with **Decorations** while developing VS Code extensions.

## Installation

`npm install vscode-ext-decoration`

## Usage

```ts
    import { createLineDecoration, createGutterDecoration } from "vscode-ext-decoration";

    ...

    // regular file from disk
    const pathIcon = context.asAbsolutePath("images/bookmark.svg");    
    // building a SVG on the fly
    const pathIcon = Uri.parse(
        `data:image/svg+xml,${encodeURIComponent(
            `<?xml version="1.0" ?><svg height="16px" version="1.1" viewBox="0 0 16 16" width="16px" 
            xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" 
            xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" 
            id="Page-1" stroke="none" stroke-width="1"><g fill="#157EFB" id="icon-18-bookmark">
            <path d="m6.6319,2.13334c-0.82764,0 -1.49857,0.67089 -1.49857,1.49555l0,10.50444l2.99999,-3l3,3l0,-10.50444c0,
            -0.82597 -0.67081,-1.49555 -1.49858,-1.49555l-3.00285,0z" id="bookmark"/></g></g></svg>`,
        )}`,
    );
    const backgroundColor: string = vscode.workspace.getConfiguration("bookmarks").get("backgroundLineColor", "");

    const decor = createLineDecoration(backgroundColor, "rgba(0, 255, 0, 0.5)", vscode.OverviewRulerLane.Full, "rgba(21, 126, 251, 0.7)", pathIcon);
```

## Support

If you find it useful, please consider supporting it.

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"/></a>
    </td>
    <td>
      <a title="Paypal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=BR&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_SM.gif"/></a>
    </td>
    <td>
      <a title="Patreon" href="https://www.patreon.com/alefragnani"><img src="https://raw.githubusercontent.com/alefragnani/oss-resources/master/images/button-become-a-patron-rounded-small.png"/></a>
    </td>
  </tr>
</table>

# License

[MIT](LICENSE.md) &copy; Alessandro Fragnani