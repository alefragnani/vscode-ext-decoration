/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { TextEditorDecorationType, window, DecorationRenderOptions, OverviewRulerLane, ThemeColor } from "vscode";

function createLineDecoration(
    lineBackground: string | ThemeColor,
    lineBorder?: string | ThemeColor,
    overviewRulerLane?: OverviewRulerLane,
    overviewRulerColor?: string | ThemeColor,
    gutterIconPath?: string): TextEditorDecorationType {

    const decorationOptions: DecorationRenderOptions = {
        gutterIconPath,
        overviewRulerLane,
        overviewRulerColor
    };

    decorationOptions.backgroundColor = lineBackground;
    decorationOptions.isWholeLine = true;

    if (lineBorder) {
        decorationOptions.borderWidth = '1px',
        decorationOptions.borderStyle = 'solid',
        decorationOptions.borderColor = lineBorder;
    }

    return window.createTextEditorDecorationType(decorationOptions);
}

function createGutterDecoration(
    gutterIconPath: string): TextEditorDecorationType {

    const decorationOptions: DecorationRenderOptions = {
        gutterIconPath
    };

    return window.createTextEditorDecorationType(decorationOptions);
}

export { 
    createLineDecoration,
    createGutterDecoration
};