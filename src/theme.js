const colors = require("./colors");

const getTheme = (name) => ({
  name: "Flat Dark",
  colors: {
    focusBorder: "#1f6feb",
    foreground: colors.foreground.default,
    descriptionForeground: colors.foreground.muted,
    errorForeground: colors.rainbow.red.default,
    "textLink.foreground": colors.primary.default,
    "textLink.activeForeground": colors.primary.active,
    // "textBlockQuote.background": "#010409",
    // "textBlockQuote.border": "#30363d",
    // "textCodeBlock.background": "#6e768166",
    // "textPreformat.foreground": "#d1d5db",
    // "textSeparator.foreground": "#21262d",
    "button.background": colors.primary.default,
    "button.foreground": colors.foreground.active,
    "button.hoverBackground": colors.secondary.active,
    "button.secondaryBackground": colors.secondary.default,
    "button.secondaryForeground": colors.foreground.active,
    "button.secondaryHoverBackground": colors.secondary.active,
    "checkbox.background": colors.base.active,
    "checkbox.border": colors.base.muted,
    "dropdown.background": colors.base.active,
    "dropdown.border": colors.base.active,
    "dropdown.foreground": colors.foreground.default,
    "dropdown.listBackground": colors.base.active,
    "input.background": colors.base.active,
    "input.border": colors.base.muted,
    "input.foreground": colors.foreground.default,
    "input.placeholderForeground": colors.foreground.muted,
    "badge.foreground": colors.foreground.active,
    "badge.background": colors.primary.default,
    "progressBar.background": colors.primary.default,
    "activityBar.foreground": colors.foreground.active,
    "activityBar.inactiveForeground": colors.foreground.muted,
    "activityBar.background": colors.base.default,
    "activityBarBadge.foreground": colors.foreground.active,
    "activityBarBadge.background": colors.primary.default,
    "activityBar.activeBorder": colors.primary.default,
    "activityBar.border": colors.border.default,
    "breadcrumb.background": colors.base.default,
    "breadcrumb.foreground": colors.foreground.muted,
    "breadcrumb.focusForeground": colors.foreground.muted,
    "breadcrumb.activeSelectionForeground": colors.foreground.active,
    "breadcrumbPicker.background": colors.base.default,
    "debugToolBar.background": colors.base.default,
    // "diffEditor.insertedTextBackground": "#2ea04326",
    // "diffEditor.removedTextBackground": "#f8514926",
    "editor.foreground": colors.foreground.default,
    "editor.background": colors.base.default,
    "editorWidget.background": colors.base.default,
    // "editor.foldBackground": "#fff",
    "editor.lineprimaryBackground": colors.base.muted,
    "editorLineNumber.foreground": colors.foreground.muted,
    "editorLineNumber.activeForeground": colors.foreground.active,
    // "editorIndentGuide.background": "#fff",
    // "editorIndentGuide.activeBackground": "#fff",
    // "editorWhitespace.foreground": "#fff",
    // "editorCursor.foreground": "#fff",
    // "editor.findMatchBackground": "#fff",
    // "editor.findMatchprimaryBackground": "#fff",
    // "editor.linkedEditingBackground": "#fff",
    // "editor.inactiveSelectionBackground": "#fff",
    // "editor.selectionBackground": "#fff",
    // "editor.selectionprimaryBackground": "#fff",
    // "editor.selectionprimaryBorder": "#fff",
    // "editor.wordprimaryBackground": "#fff",
    // "editor.wordprimaryStrongBackground": "#fff",
    // "editor.wordprimaryBorder": "#fff",
    // "editor.wordprimaryStrongBorder": "#fff",
    // "editorBracketMatch.background": "#fff",
    // "editorBracketMatch.border": "#fff",
    // "editorGutter.modifiedBackground": "#fff",
    // "editorGutter.addedBackground": "#fff",
    // "editorGutter.deletedBackground": "#fff",
    // "editor.stackFrameprimaryBackground": "#D2992225",
    // "editor.focusedStackFrameprimaryBackground": "#3FB95025",
    "editorGroupHeader.tabsBackground": colors.base.default,
    "editorGroupHeader.tabsBorder": colors.base.default,
    "editorGroup.border": colors.base.default,
    "gitDecoration.addedResourceForeground": colors.rainbow.green.default,
    "gitDecoration.modifiedResourceForeground": colors.rainbow.green.bright,
    "gitDecoration.deletedResourceForeground": colors.rainbow.red.default,
    "gitDecoration.untrackedResourceForeground": colors.rainbow.green.bright,
    "gitDecoration.ignoredResourceForeground": colors.foreground.muted,
    "gitDecoration.conflictingResourceForeground":
      colors.rainbow.orange.default,
    "gitDecoration.submoduleResourceForeground": colors.foreground.muted,
    "list.hoverForeground": colors.foreground.active,
    "list.inactiveSelectionForeground": colors.foreground.active,
    "list.activeSelectionForeground": colors.foreground.active,
    "list.hoverBackground": colors.base.active,
    "list.inactiveSelectionBackground": colors.base.active,
    "notificationCenterHeader.foreground": colors.foreground.default,
    "notificationCenterHeader.background": colors.base.active,
    "notifications.foreground": colors.foreground.default,
    "notifications.background": colors.base.active,
    "notifications.border": colors.base.active,
    "notificationsErrorIcon.foreground": colors.rainbow.red.default,
    "notificationsWarningIcon.foreground": colors.rainbow.yellow.default,
    "notificationsInfoIcon.foreground": colors.rainbow.blue.default,
    "panel.background": colors.base.default,
    "panel.border": colors.base.default,
    "panelTitle.activeBorder": colors.primary.default,
    "panelTitle.activeForeground": colors.foreground.active,
    "panelTitle.inactiveForeground": colors.foreground.muted,
    "panelInput.border": colors.base.active,
    "peekViewEditor.matchprimaryBackground": colors.base.muted,
    "peekViewResult.matchprimaryBackground": colors.base.muted,
    "peekViewEditor.background": colors.base.active,
    "peekViewResult.background": colors.base.active,
    // "pickerGroup.border": "#30363d",
    // "pickerGroup.foreground": "#d1d5db",
    // "quickInput.background": "#161b22",
    // "quickInput.foreground": "#9ca3af",
    "scrollbar.shadow": colors.base.muted,
    "scrollbarSlider.background": colors.base.active,
    "scrollbarSlider.hoverBackground": "#374151",
    "scrollbarSlider.activeBackground": "#374151",
    "sideBar.foreground": colors.foreground.default,
    "sideBar.background": colors.base.default,
    "sideBar.border": colors.base.default,
    "sideBarTitle.foreground": colors.foreground.default,
    "sideBarSectionHeader.foreground": colors.foreground.muted,
    "sideBarSectionHeader.background": colors.base.default,
    "sideBarSectionHeader.border": colors.base.default,
    "statusBar.foreground": colors.foreground.active,
    "statusBar.background": colors.primary.default,
    "statusBar.border": colors.base.default,
    "statusBar.noFolderBackground": colors.status.nofolder,
    "statusBar.debuggingBackground": colors.status.debug,
    "statusBar.debuggingForeground": colors.foreground.active,
    "statusBarItem.prominentBackground": colors.secondary.default,
    "tab.activeForeground": colors.foreground.active,
    "tab.inactiveForeground": colors.foreground.muted,
    "tab.inactiveBackground": colors.base.default,
    "tab.activeBackground": colors.base.default,
    "tab.hoverBackground": colors.base.active,
    "tab.unfocusedHoverBackground": colors.base.default,
    "tab.border": colors.base.default,
    "tab.unfocusedActiveBorderTop": colors.base.default,
    "tab.activeBorder": colors.base.default,
    "tab.unfocusedActiveBorder": colors.base.default,
    "tab.activeBorderTop": colors.primary.default,
    "titleBar.activeForeground": colors.foreground.active,
    "titleBar.activeBackground": colors.base.default,
    "titleBar.inactiveForeground": colors.foreground.muted,
    "titleBar.inactiveBackground": colors.base.default,
    "titleBar.border": colors.base.default,
    "terminal.foreground": colors.foreground.default,
    "terminal.ansiBlack": colors.rainbow.black.default,
    "terminal.ansiRed": colors.rainbow.red.default,
    "terminal.ansiGreen": colors.rainbow.green.default,
    "terminal.ansiYellow": colors.rainbow.yellow.default,
    "terminal.ansiBlue": colors.rainbow.blue.default,
    "terminal.ansiMagenta": colors.rainbow.indigo.default,
    "terminal.ansiCyan": colors.rainbow.violet.default,
    "terminal.ansiWhite": colors.rainbow.white.default,
    "terminal.ansiBrightBlack": colors.rainbow.black.bright,
    "terminal.ansiBrightRed": colors.rainbow.red.bright,
    "terminal.ansiBrightGreen": colors.rainbow.green.bright,
    "terminal.ansiBrightYellow": colors.rainbow.yellow.bright,
    "terminal.ansiBrightBlue": colors.rainbow.blue.bright,
    "terminal.ansiBrightMagenta": colors.rainbow.indigo.bright,
    "terminal.ansiBrightCyan": colors.rainbow.violet.bright,
    "terminal.ansiBrightWhite": colors.rainbow.white.bright,
    "welcomePage.buttonBackground": colors.primary.default,
    "welcomePage.buttonHoverBackground": colors.primary.active,
  },
  semanticprimarying: true,
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "#d1d5db",
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.language",
        "entity",
      ],
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
      settings: {
        foreground: colors.rainbow.orange.default,
      },
    },
    {
      scope: [
        "variable.parameter.function",
        "meta.jsx.children",
        "meta.block",
        "meta.tag.attributes",
        "entity.name.constant",
        "meta.object.member",
        "meta.embedded.expression",
      ],
      settings: {
        foreground: "#9ca3af",
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: colors.rainbow.violet.default,
      },
    },
    {
      scope: ["entity.name.tag", "support.class.component"],
      settings: {
        foreground: colors.rainbow.green.default,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: colors.rainbow.red.default,
      },
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: colors.rainbow.red.default,
      },
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
      ],
      settings: {
        foreground: "#9ca3af",
      },
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source",
      ],
      settings: {
        foreground: colors.rainbow.indigo.default,
      },
    },
    {
      scope: "support",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "variable",
      settings: {
        foreground: colors.rainbow.orange.default,
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "#9ca3af",
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: colors.rainbow.red.default,
        foreground: colors.rainbow.black.default,
        content: "^M",
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: "string source",
      settings: {
        foreground: "#9ca3af",
      },
    },
    {
      scope: "string variable",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: colors.rainbow.indigo.default,
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: colors.rainbow.indigo.default,
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: colors.rainbow.green.default,
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: colors.rainbow.orange.default,
      },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: colors.rainbow.green.default,
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "#9ca3af",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#9ca3af",
      },
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        background: colors.rainbow.red.dark,
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        background: colors.rainbow.green.dark,
        foreground: colors.rainbow.green.default,
      },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: colors.rainbow.orange.dark,
        foreground: colors.rainbow.orange.default,
      },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: colors.rainbow.blue.dark,
        background: colors.rainbow.blue.default,
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: colors.rainbow.violet.default,
        fontStyle: "bold",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: "meta.output",
      settings: {
        foreground: colors.rainbow.blue.default,
      },
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: "#d1d5db",
      },
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: colors.rainbow.pink.default,
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: colors.rainbow.indigo.default,
        fontStyle: "underline",
      },
    },
  ],
});

module.exports = {
  getTheme,
};
