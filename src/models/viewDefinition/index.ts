export interface ViewDefinition {
  name: string;
  urlName: string;
  description: string;
  element: React.ReactNode;
  childMenu?: ViewDefinition[];
}
