export const shortText = (activeText, maxlength) => {
  if (activeText.length > maxlength) {
    return activeText.slice(0, maxlength - 1) + '…';
  } else {
    return activeText;
  }
};
