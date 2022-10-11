export type NavbarProps = {
  sideBarData: {
    section: number | string;
    content: {
      icon: string;
      content: string;
      address: string;
    }[];
  }[];
  topBarData: {
    icon: string;
    address: string;
  }[];
};
