import 'styled-components';
import { dark } from './index';

export type Themes = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Themes { }
}