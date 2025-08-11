export interface Reset {
  id: string;
  title: string;
  description: string;
  instructions?: string;
  icon: string;
  color: 'blue' | 'sage' | 'pink';
  type: 'micro' | 'emergency';
}
