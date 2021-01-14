function handleSystemModeChanged(system_mode) {
  $.cookie("system_mode", system_mode);
  refreshTheme();
}

function refreshTheme() {
  const system_mode = $.cookie("system_mode");
  if (system_mode === "dark") {
    document.body.classList.add("theme-dark");
  } else {
    document.body.classList.remove("theme-dark");
  }
}

function getOSTheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}