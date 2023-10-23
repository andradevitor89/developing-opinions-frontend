export function openNewTab(url: string) {
  const newTab = window.open(url, '_blank');

  if (newTab) {
    newTab.focus();
  } else {
    alert(
      'The new tab was blocked. Please check your pop-up settings.'
    );
  }
}
