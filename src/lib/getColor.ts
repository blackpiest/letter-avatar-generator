interface Item {
  letter: string;
  color: string;
}

const letterColors = {
  items: [
    { letter: 'а', color: '#00CC66', },
    { letter: 'б', color: '#0033FF', },
    { letter: 'в', color: '#0066FF', },
    { letter: 'г', color: '#339900', },
    { letter: 'д', color: '#0033CC', },
    { letter: 'е', color: '#0000FF', },
    { letter: 'ё', color: '#006600', },
    { letter: 'ж', color: '#0000CC', },
    { letter: 'з', color: '#006699', },
    { letter: 'и', color: '#0099FF', },
    { letter: 'й', color: '#003300', },
    { letter: 'к', color: '#00CCFF', },
    { letter: 'л', color: '#000033', },
    { letter: 'м', color: '#009933', },
    { letter: 'н', color: '#006666', },
    { letter: 'о', color: '#00CC00', },
    { letter: 'п', color: '#000099', },
    { letter: 'р', color: '#3399FF', },
    { letter: 'с', color: '#3333FF', },
    { letter: 'т', color: '#009966', },
    { letter: 'у', color: '#FF0000', },
    { letter: 'ф', color: '#3300FF', },
    { letter: 'х', color: '#00CCCC', },
    { letter: 'ц', color: '#339999', },
    { letter: 'ч', color: '#3333CC', },
    { letter: 'ш', color: '#3300CC', },
    { letter: 'щ', color: '#003399', },
    { letter: 'ъ', color: '#3399CC', },
    { letter: 'ы', color: '#00CC99', },
    { letter: 'э', color: '#333300', },
    { letter: 'ю', color: '#009900', },
    { letter: 'я', color: '#003366', },
    { letter: 'a', color: '#3366FF', },
    { letter: 'b', color: '#336600', },
    { letter: 'c', color: '#330099', },
    { letter: 'd', color: '#336633', },
    { letter: 'e', color: '#000066', },
    { letter: 'f', color: '#333366', },
    { letter: 'g', color: '#339933', },
    { letter: 'h', color: '#00FF00', },
    { letter: 'i', color: '#00FFCC', },
    { letter: 'j', color: '#00FF33', },
    { letter: 'k', color: '#333333', },
    { letter: 'l', color: '#00FFFF', },
    { letter: 'm', color: '#336666', },
    { letter: 'n', color: '#003333', },
    { letter: 'o', color: '#00CC33', },
    { letter: 'p', color: '#330033', },
    { letter: 'q', color: '#339966', },
    { letter: 'r', color: '#330066', },
    { letter: 's', color: '#009999', },
    { letter: 't', color: '#3366CC', },
    { letter: 'u', color: '#339900', },
    { letter: 'v', color: '#333399', },
    { letter: 'w', color: '#0033FF', },
    { letter: 'x', color: '#0099CC', },
    { letter: 'y', color: '#330000', },
    { letter: 'z', color: '#3399FF', },
  ],
  reserveColor: '#757575',
}


export function getColor(letter: string): string {
  if (!letter) return letterColors.reserveColor;

  const lowerCaseLetter = letter.toLowerCase();
  const currentLetter: Item | null = letterColors.items.find(item => item.letter === lowerCaseLetter) || null;

  if (!currentLetter) return letterColors.reserveColor;
  return currentLetter.color;
}