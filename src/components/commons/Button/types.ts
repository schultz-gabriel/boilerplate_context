import { ComponentTypes } from '../../types';

export interface ButtonTypes extends ComponentTypes {
    fullWidth?: boolean,
    ghost?: boolean,
    as?: any
    href?: string
    onClick?: () => void
}
