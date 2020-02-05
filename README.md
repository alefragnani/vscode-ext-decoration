# vscode-ext-decoration

This module contains a set of helper functions to work with **Decorations** while developing VS Code extensions.

## Installation

`npm install vscode-ext-decoration`

## Usage

```ts
    import { createLineDecoration, createGutterDecoration } from "vscode-ext-decoration";

    ...

    const pathIcon = context.asAbsolutePath("images/bookmark.svg");    
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