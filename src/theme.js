const colors = require("./colors");

const getTheme = () => ({
  name: "Flat Dark",
  colors: {
    focusBorder: "#1f6feb",
    foreground: colors.foreground.default,
    descriptionForeground: colors.foreground.muted,
    errorForeground: colors.rainbow.red.default,
    "textLink.foreground": colors.primary.default,
    "textLink.activeForeground": colors.primary.active,
    "textBlockQuote.background": colors.base.active,
    "textCodeBlock.background": colors.base.active,
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
    "diffEditor.insertedTextBackground": colors.rainbow.green.dark,
    // "diffEditor.removedTextBackground": "#f8514926",
    "editor.foreground": colors.foreground.default,
    "editor.background": colors.base.default,
    "editorWidget.background": colors.base.default,
    "editor.foldBackground": colors.base.active,
    "editor.lineprimaryBackground": colors.base.muted,
    "editorLineNumber.foreground": colors.foreground.muted,
    "editorLineNumber.activeForeground": colors.foreground.active,
    "editorCursor.foreground": colors.foreground.active,
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
    "quickInput.background": colors.base.active,
    "quickInput.foreground": colors.foreground.active,
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
        foreground: colors.token.comment,
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
        foreground: colors.token.constant,
      },
    },
    {
      scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
      settings: {
        foreground: colors.token.variable,
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
        foreground: colors.token.default,
      },
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: colors.token.function,
      },
    },
    {
      scope: ["entity.name.tag", "support.class.component"],
      settings: {
        foreground: colors.token.default,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: colors.token.keyword,
      },
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: colors.token.keyword,
      },
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
      ],
      settings: {
        foreground: colors.token.default,
      },
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source",
      ],
      settings: {
        foreground: colors.token.string,
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
        foreground: colors.token.variable,
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: colors.token.default,
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: colors.token.invalid,
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: colors.token.invalid,
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: colors.token.invalid,
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: colors.token.invalid,
      },
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: colors.token.keyword,
        foreground: colors.rainbow.black.default,
        content: "^M",
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: colors.token.invalid,
      },
    },
    {
      scope: "string source",
      settings: {
        foreground: colors.token.default,
      },
    },
    {
      scope: "string variable",
      settings: {
        foreground: colors.token.variable,
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: colors.token.string,
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
        foreground: colors.token.string,
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: colors.token.variable,
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: colors.token.default,
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: colors.token.variable,
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
        foreground: colors.token.variable,
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: colors.token.function,
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
        foreground: colors.token.comment,
      },
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: colors.token.invalid,
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: colors.token.string,
        fontStyle: "underline",
      },
    },
  ],
});

module.exports = {
  getTheme,
};
