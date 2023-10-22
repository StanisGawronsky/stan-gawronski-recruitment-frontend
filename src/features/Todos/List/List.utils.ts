export const getListItemExtraStyling = ({
  styles,
  darkMode,
  done,
}: {
  darkMode: boolean;
  done: boolean;
  styles: {
    readonly [key: string]: string;
  };
}) => {
  switch (true) {
    case done && darkMode: {
      return styles.listItemDoneDarkMode;
    }
    case darkMode: {
      return styles.listItemDarkMode;
    }
    case done: {
      return styles.listItemDone;
    }
  }
};
