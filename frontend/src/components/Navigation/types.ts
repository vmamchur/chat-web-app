export interface NavItem {
  label: string;
  icon: React.ReactNode;
  flexGrow?: number;
  onClick?: () => void;
}

